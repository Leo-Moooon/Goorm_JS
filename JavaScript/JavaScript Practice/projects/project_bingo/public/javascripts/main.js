// 클라이언트 측 이벤트

var bingo = {
    is_my_turn: Boolean,
    socket: null,

    // init의 socket 이벤트들
    init: function(socket) {
        var self = this;
        var user_cnt = 0;

        this.is_my_turn = false;

        socket = io();

        // 
        socket.on("check_number", function(data) {
            self.where_is_it(data.num);
            self.print_msg(data.username + "님이 '" + data.num + "'을 선택했습니다.");
        });

        // 
        socket.on("game_started", function(data) {
            console.log("enter the game_started");
            self.print_msg(data.username + " 님이 게임을 시작했습니다. ");
            $('#start_button').hide();
        });

        // 
        socket.on("update_users", function(data, user_count) {
            console.log(data);
            user_cnt = user_count;
            self.update_userlist(data, socket);
        });

        // join
        socket.on("connect", function() {
            socket.emit("join", { username: $('#username').val()});
        });

    //init의 클릭 이벤트들
        var numbers = [];
        for(var i = 1; i <= 25; i++) {
            numbers.push(i);
        }

        // 빙고판 랜덤하게 생성
        numbers.sort(function (a, b) {
            var temp = parseInt(Math.random() * 10); 
            var isOddOrEven = temp%2;
            var isPosOrNeg = temp > 5 ? 1 : -1;
            return (isOddOrEven*isPosOrNeg);
        });

        $("table.bingo-board td").each(function(i) {
            $(this).html(numbers[i]);

            $(this).click(function() {

                if(user_cnt == 1){
                    self.print_msg("<알림> 최소 2명부터 게임이 가능합니다.");
                } else {
                    self.select_num(this, socket);
                }
            });
        });

        // 게임 시작 버튼 이벤트 콜백
        $('#start_button').click(function() {
            if(user_cnt == 1) {
                self.print_msg("<알림> 최소 2명부터 게임이 가능합니다.");
            } else {
                socket.emit('game_start', { username: $('#username').val() });
                self.print_msg("<알림> 게임을 시작했습니다.");
                $("#start_button").hide();
            }
        });
    },
    // init 끝

    // 사용자가 클릭할 때 사용되는 함수
    select_num: function (obj, socket) {
        if(this.is_my_turn && !$(obj).attr("checked")) {
            
            // select 이벤트: 자신의 차례일 때 실행
            socket.emit("select", { username: $('#username').val(), num: $(obj).text() });
            this.check_num(obj);

            this.is_my_turn = false;
        } else {
            this.print_msg("<알림> 차례가 아닙니다!");
        }
    },

    // 상대방이 선택한 숫자가 어디인지 찾아서 check_num()이라는 메소드를 호출
    where_is_it: function (num) {
        var self = this;
        var obj = null;

        $("table.bingo-board td").each(function (i) {
            if($(this).text() == num) {
                self.check_num(this); 
            }
        });
    },

    check_num: function (obj) { // 상대방이 선택한 숫자를 선택할 수 없는 상태로 만들고 화면에 표시
        $(obj).css("text-decoration", "line-through");
        $(obj).css("color", "lightgray");
        $(obj).attr("checked", true);
    },

    // 사용자 목록과 순서 표시
    update_userlist: function (data, this_socket) {
        var self = this;
        $("#list").empty();
        console.log(data);

        $.each(data, function(key, value) {
            var turn = "(-) ";
            if(value.turn === true) {
                turn = "(*) ";

                if(value.id == this_socket.id) {
                    self.is_my_turn = true;
                }
            }
            if(value.id == this_socket.id) {
                $("#list").append("<font color='DodgerBlue'>" + turn + value.name + "<br></font>");
            } else {
                $("#list").append("<font color='black'>" + turn + value.name + "<br></font>");
            }
        });
    },

    // 메시지 출력 이벤트: 사용자가 어떤 숫자를 선택했는지 등을 표시해주는 메시지. 자기 이름이 출력될 때는 색깔을 다르게 주어 편의성을 높이고, 문구가 출력될 때도 스크롤이 가장 아래로 내려가게 하였다.
    print_msg: function(msg) {
        $("#logs").append(msg + "<br />");
        $('#logs').scrollTop($('#logs')[0].scrollHeight);
    }
};

$(document).ready(function () {
    bingo.init(); // html 로딩이 끝나면 여기로 bingo 객체를 초기화하면서 빙고 게임 설정
});