/** File System 모듈
 * Description: 노드에서 가장 중요한 모듈 중 하나이다.
 * API 문서: https://nodejs.org/api/fs.html
 * 
 * 대부분의 메소드들이 동기/비동기 방식으로 나뉘는데, Sync 이름이 붙어있는 메소드가 동기 방식이다.
 * 
 * 동기적 읽기방식: 파일을 읽으면서 다른 작업을 동시에 할 수 없다.
 * 
 * 비동기적 읽기 방식: 파일을 읽으면서 다른 작업도 동시에 수행할 수 있고, 다 읽으면 매개변수 callback으로 전달한 함수가 호출된다. 비동기 형식은 항상 마지막 인수가 수행 완료 시 호출할 콜백 함수로 작성되어야 한다.
 * 
 * 주로 비동기적 형식을 많이 쓰나, 서버 시작 시 설정 파일을 읽는 작업과 같이 동기적 형식이 더 적절한 경우도 있다.
 * [options]에는 주로 인코딩 방식을 쓰며, 웹에서는 UTF-8을 주로 사용한다.
 * 
 * fs.readFile(filename, [options], callback): filename의 파일을 [options]의 방식으로 읽은 후 callback으로 전달된 함수를 호출한다(비동기적)
 * fs.readFileSync(filename, [options]): filename의 파일을 [options]의 방식으로 읽은 후 문자열을 반환한다(동기적).
 * fs.writeFile(filename, data, [options], callback): filename의 파일에 [options]의 방식으로 Data 내용을 쓴 후 callback 함수를 호출한다(비동기적).
 * fs.writeFileSync(filename, data, [options]): filename의 파일에 [options]의 방식으로 data 내용을 쓴다.
 */

/*
// readfile 메소드를 이용한 읽기 기능 예제
var fs = require('fs');

    // 비동기적 읽기
    fs.readFile('./05-1 text.txt', 'utf8', function(err, data){
        console.log('비동기적 읽기' + data);
    });

    // 동기적 읽기
    var text = fs.readFileSync('./05-1 text.txt', 'utf8');
    console.log('동기적 읽기' + text);


// writefile 예제
var fs = require('fs');

var data = 'fs.writeFile test';

fs.writeFile('text1.txt', data, 'utf8', function(err) {
    console.log('비동기적 파일 쓰기 완료');
});

fs.writeFileSync('text2.txt', data, 'utf8');
console.log('동기적 파일 쓰기 완료');
*/

// 파일의 입출력은 다양한 원인으로 예외가 발생할 수 있으므로 파일 입출력을 하면서 가장 중요한 부분중 하나가 예외처리이다.
// 시스템이 비정상적으로 종료되지 않게 하기 위한 필수 사항인데, 동기적 방식과 비동기적 방식에서의 예외 처리방식이 조금씩 다르다.

// 동기적 방식 예외처리 예제
var fs = require('fs');

    // 파일 읽기(동기적)
    try {
        var data = fs.readFileSync('notexist.txt', 'utf8'); // 파일이 없는데 읽으려 함
        console.log(data);
    } catch (err) {
        console.log(err);
    }

// 동기적 방식에서는 자바스크립트에서 예외처리를 할 때 일반적으로 써주는 방식인 try~catch 구문으로 처리한다. 쓰기도 마찬가지로 try~catch 구문을 이용하면 된다.

// 비동기적 방식 예외처리 예제
    // 예외가 발생하면 callback 함수의 매개변수 err에 전달되므로, 따로 try~catch 구문을 사용할 필요는 없다.

    var fs = require('fs');
    // 파일 읽기
    fs.readFile('notexist.txt', 'utf8', function(err, data) { // 존재하지 않는 파일 읽기
        if (err) {
            console.log(err); // 읽기 실패
        } else {
            console.log(data); // 읽기 성공
        }
    });