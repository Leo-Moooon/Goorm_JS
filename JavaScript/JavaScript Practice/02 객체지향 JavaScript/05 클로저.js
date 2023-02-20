/** 클로저(Closure)
 * Description: 외부 함수의 실행이 끝나고 외부함수가 소멸된 이후에도 내부함수가 외부 함수의 변수에 접근할 수 있는 구조
 * 
 *  -> 자신의 고유 스코프를 가진 상태로 소멸하지 않고 외부 함수에 의해 호출되는 함수를 만드는 것
 * 
 *  이 개념이 Node.js가 높은 효율성을 가지게 한다.
 * 
 *  언제 사용? 
 * 함수를 호출할 때 이전에 쓰던 값을 유지하고 싶을 때 사용하면 된다.
 */

var num = 1;

function foo() {
    var num = 2;

    function bar() {
        console.log(num);
    }
    return bar;
}

var baz = foo();
baz(); // 2

    // foo()는 리턴되어 사라진 후 bar()가 생성되어야 하는데, 내부함수인 bar()의 참조로 인해 foo()의 값을 유지하게 된다.
    // 이를 클로저라 하고, 내부함수를 클로저 함수라 부른다.


// 예시 (1)
function f(arg) {
    var n = function() {
        return arg;
    }
    arg++;
    return n;
}

// var m = f(123);
// console.log(m()); // 124


// 예시 (2)
function f() {
    var a = [];
    var i ;

    for(i = 0; i < 3; i++){
        a[i] = function() {
            return i;
        }
    }
    return a;
}
var b = f();

console.log( b[0]() ); 
console.log( b[1]() );
console.log( b[2]() );

    /** 코드 설명
     * 당연히 0,1,2가 차례로 출력될 것 같지만, 실제로는 333이다.
     *  a[i] = function {
     *      return i;
     * }
     * 는 함수선언만 된 것이고, 실제로 실행되는 것은 console.log(b[0]());줄인데, var b = f(); 문장에서 for문의 실행이 다 끝나고 나서야 실제 참조가 이루어지게 된다. 따라서 I 값이 이미 3으로 증가했기 때문에 전부 3으로 처리된다.
     * 
     * 즉 클로저는 그 순간의 값을 저장하는 것이 아니라 연결된 함수 범위에서 최종 처리된 값을 가지게 된다.
     */

// 클로저를 이용해 정상적으로 0 1 2 출력하기

function f() {
    var a = [];
    var i;

    for(i = 0; i < 3; i++){
        a[i] = (function(x) {
            return function() {
                return x;
            }
        })(i);
    }
    return a;
}

var b = f();

console.log( b[0]() ); 
console.log( b[1]() );
console.log( b[2]() );

/** 코드 설명
 * 
 * function 내부 변수인 i를 바로 리턴하지 않고, 파라미터를 받는 function을 정의한 다음에 파라미터로 내부 변수 i를 넘겨서 클로저가 내부 변수 i가 아니라 파라미터를 리턴하도록 하는 방법이다. 
 */


