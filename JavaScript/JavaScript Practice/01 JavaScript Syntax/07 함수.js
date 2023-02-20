/** JavaScript에서의 함수
 * 
 *  함수를 선언할 때는 function이라는 별도의 키워드를 사용하며, 함수의 반환값에 대한 자료형은 명시하지 않는다.
 *  여러 값을 반환하고 싶다면 배열이나 객체 형태로 반환하면 된다.
 *  JS에서는 함수가 하나의 데이터로서 취급된다.
 */

function sum(a, b) {
    var c = a + b;
    return c;
}

console.log(sum(1, 2)); // 3

/** Delete
 * delete 키워드를 사용하면 메모리 공간에 할당된 객체의 속성을 삭제할 수 있으나, 객체 자체를 삭제할 수는 없다. 
 * delete 연산 성공 시 혹은 존재하지 않는 속성이라 아무 연산도 못했을 시 True가 출력이 되고, 실패 시 false가 출력된다.
*/

function sum(a, b) {
    var c = a + b;
    return c;
}

var add = sum;
typeof add; // 'function'

add(1, 2); // 3

var student = {
    name : 'goorm',
    age : 20
}

console.log(student.name); // goorm

delete student.name; // true

console.log(student.name); // undefined

delete student; // false

delete not_exist; // true

console.log(student.age); // 20


/** 익명함수(Anonymous Function) 
 * 함수가 객체로서 취급되고 처리되기 때문에 가능한 개념
 * 
 * 말 그대로 이름을 붙여주지 않아도 되는 함수(일회용 함수)
 * 함수 표현식, 콜백함수, 즉시 실행함수에서 많이 사용한다..
*/

var f = function (a) {
    return "This is anonymous function!";
};

console.log(f()); // "This is anonymous function!"

/** 콜백 함수(Callback Function) 
 * Description: 특정 이벤트가 발생하면 호출되는 함수이다
 * 예) 버튼을 클릭한다던지, 네트워크를 통해 어떤 데이터가 도착한다던지 등의 이벤트 발생
*/

    // 콜백함수를 지정하는 방법
        // (1) 명시적으로 정의된 함수의 경우
        function one() {
            return 1;
        }

        var two = function () {
            return 2;
        }
        function invoke_and_add(a, b) {
            return a() + b();
        }

        console.log(invoke_and_add(one, two)); // 3

        /** 소스코드 설명
         * one()과 two() 함수 그 자체가 invoke_and_add()라는 함수의 인자로서 전달되며,
         * 이 함수는 해당 함수를 실행하여 그 결과를 반환받아 최종 연산을 수행한다.
         */

        // (2) 익명함수의 경우
        function one() {
            return 1;
        }
        function invoke_and_add(a, b){
            return a() + b();
        }
        invoke_and_add(one, function() {
            return 2;
        }); // 3

        /** 소스코드 설명
         * 두 번쨰 인자의 경우는 인자로 넘겨주는 동시에 익명함수를 생성하여 전달하였다.
         */