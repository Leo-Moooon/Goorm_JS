// 서버 측

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var { isNullOrUndefined } = require('util');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('main', { title: '온라인 빙고 게임', username: req.query.username });
});

// 전역 변수 선언
var users = {};  // 사용자를 저장하기 위한 객체
var user_count = 0;  // 현재 접속한 사용자의 수
var turn_count = 0;  // 누구의 차례인지 기록

// connection: 소켓이 연결됐을 때 발생하는 이벤트
io.on('connection', function(socket) {

    console.log('user connected : ', socket.id);

    /* join 이벤트: 사용자가 접속했을 때 발생
       클라이언트 페이지에서 발생한 connect 이벤트를 여기서 받는다.
       사용자의 이름을 가져와서 소켓의 사용자 이름으로 설정하고, 사용자 객체를 생성하여 이름과 턴 값을 설정한다.
       그리고 클라이언트에게 새로운 사용자가 접속했으니 사용자 목록을 업데이트하여 출력하라고 update.users라는 
       이벤트를 전송하여 알려준다. 
    */
    socket.on('join', function(data) {
        var username = data.username;
        socket.username = username; // 사용자 이름을 가져와서 소켓의 사용자 이름으로 설정

        users[user_count] = {}; // 사용자 객체 생성
        users[user_count].id = socket.id; 
        users[user_count].name = username; // 이름 설정
        users[user_count].turn = false; // 턴값 설정
        user_count++;

        io.emit('update_users', users, user_count);
    });
    /* game_start 이벤트: 클라이언트 쪽에서 게임 시작 버튼을 누르면 발생
       game_started 이벤트를 발생시켜 모든 사용자에게 게임 시작을 알리는 이벤트이다.
       또한 현재 순서에 따라 해당 사용자의 턴 값을 true로 바꾸어 해당 사용자가 빙고판의 숫자를 선택할 수 있게 한다.
       그 후 해당 사용자의 순서를 update_users라는 이벤트를 전송하여 알려준다.
     */
    socket.on('game_start', function (data) {
        socket.broadcast.emit("game_started", data); // game_started 이벤트를 발생시키고 게임시작을 모두에게 알린다.
        users[turn_count].turn = true; // 턴 값을 true로 바꾸어 사용자가 빙고판의 숫자를 선택할 수 있게 한다.

        io.emit('update_users', users); // 새로운 사용자가 접속했으니 update_users 이벤트를 전송하여 사용자 목록을 업데이트하여 출력하라고 알려줌.
    });

    /* select 이벤트: 숫자를 선택할 때 발생
       현재 사용자의 턴을 종료시키고 다음 사용자의 턴을 true로 바꾸도록 한다. 
       마찬가지로 다음 사용자의 순서를 알려주기 위해 이번에도 update_users라는 이벤트를 전송한다. */
    socket.on('select', function (data) {
        socket.broadcast.emit("check_number", data); // check_number 이벤트를 발생시키고 숫자를 고르게 한다.

        users[turn_count].turn = false; // 턴을 false로 바꾸고 종료시키다.
        turn_count++;  // 카운트를 올려 다음 사용자의 턴으로 넘긴다.

        if(turn_count >= user_count) {
            turn_count = 0;
        }
        users[turn_count].turn = true;

        io.sockets.emit('update_users', users); // 다음 사용자의 순서를 알려주기 위해 update_users 이벤트 전송
    });

    /* disconnect: 접속을 종료했을 때 발생
       users 배열에서 현재 소켓의 아이디와 같은 값을 가진 사용자를 삭제하고, users_count를 감소시킨다.
       그리고 사용자가 나가면 상대방도 알 수 있도록 유저 리스트를 업데이트한다.
    */
    socket.on('disconnect', function() {
        console.log('user disconnected : ', socket.id, socket.username);
        for(var i = 0; i < user_count; i++) {
            if(users[i].id == socket.id)
            delete users[i];
        }

        user_count--; 
        io.emit('update_users', users, user_count);
    });
});

http.listen(3000, function() {
    console.log('server on!');
});