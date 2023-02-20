/** for 구문
 * 구성: 초기화, 조건, 연산
 */

var array = new Array();

for(var i = 0; i < 10; i++) {
    array.push(i);
}

console.log(array.toString()); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

/** for - in 구문
 * description: 배열의 원소들이나 객체를 쉽게 탐색하게 해준다.
 * 실제 사용은 for문보다 제한적이다.
 */

var a = ['a', 'b', 'c', 'x', 'y', 'z'];
var result = '';

for(var i in a) {
    result += 'index:' + i + ', value:' + a[i] + '\n';
}

console.log(result);
// index:0 , value:a
// index:1 , value:b
// index:2 , value:c
// index:3 , value:x
// index:4 , value:y
// index:5 , value:z

/** while, do while
 * while: 특정 조건에서 무한 루프를 발생시키는 구문이다.
 *  Description: 조건문이 참인 동안 계속 실행하는 반복문이다.
 * 
 * do while: do 구문 뒤에 바로 코드블럭이 위치하고 그 후에 while이 오는 형태이다.
 *  Description: 조건문이 거짓이더라도 최소 한 번은 do {} 블럭이 실행된다.
 */

var i = 0;

while(i < 10) {
    i++;
}

console.log(i); // 10


var i = 0;

do {
    i++;
} while (i < 10)

console.log(i); // 10
