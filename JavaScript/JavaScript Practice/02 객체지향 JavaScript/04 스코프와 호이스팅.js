/** 유효범위(Scope)
 * Description: 작성된 코드를 둘러싼 환경으로, 어떤 변수들에 접근할 수 있는지를 정의한다.
 * 어떤 범위 내에 속해있는지를 정의한다 생각하면 된다.
 * 
 *  (1) 전역 스코프
 *      Description: 함수 안에 포함되지 않은 곳에 정의하는 것으로도 코드 어디에서든지 참조할 수 있다.
 * 
 *  (2) 지역 스코프
 *      Description: 함수 내에 정의된 것으로, 정의된 함수 내에서만 참조할 수 있다.
 * 
 * 자바스크립트의 스코프 특징: Function-level-scope(함수 레벨 스코프)를 사용한다.
 *  (다른 대부분의 언어: Block-level-scope(블록 레벨 스코프)를 사용함으로써, 변수 선언이 코드블록 단위로 유효하다.)
 *  즉, 자바스크립트는 함수 블록 내에서 선언된 변수는 함수 블록 내에서만 유효하다.
 * 
 *  블록 레벨 스코프: const, let
 *  함수 레벨 스코프: var
 */

/** 전역 스코프(Global Scope)와 지역 스코프(Local Scope)
 * 
 * 일반적으로 그렇듯이, 변수가 함수 바깥이나 중괄호{} 바깥에 선언되었다면, 전역 스코프에 정의되었다고 말한다.
 * 
 * 지역 스코프는 함수 내의 범위로, 각각의 함수마다 자신의 지역 스코프를 가지고 있다.
 *  -> 각각 선언된 함수가 있다면 서로의 스코프에 있는 변수는 참조될 수 없다.
 * 
 * 가급적 전역 스코프에 변수 선언을 하지 않는 것이 좋다.
 *  -> 변수 이름의 충돌 위험이 있기 때문이다.
 */

var global_scope = 'global'; // 전역 스코프

var local_function = function () {
    var local_scope = 'goorm'; // 지역 스코프
    console.log(global_scope); // 전역 스코프 참조 가능. global 출력
    console.log(local_scope); // 전역 스코프 참조 가능. global 출력
};

// console.log(local_scope); // 지역스코프이기 때문에 에러 발생

/** 유효 범위 체인(Scope Chain)
 * 함수 안에 함수가 있는 경우는 어떻게 될까? 참조가 가능할까?
 * 
 * 아래 코드와 같이 함수를 정의하면, 제일 안쪽의 함수인 inner는 그 위쪽의 범위까지 흡수하게 된다.
 * 이러한 메커니즘을 Scope Chain이라 한다.
 * 
 * 한 변수가 특정 함수 내부에서 정의되면 그 함수 밖에서는 존재하지 않는 것처럼 보이는 것이다. 
 * 외부에서는 안에 있는 함수의 변수를 참조할 수 없지만, 안에 있는 함수에서는 외부의 변수를 사용할 수 있다.
 */

var a = 1;

function outer() {
    var b = 2;
    console.log(a); // 1

    function inner() {
        var c = 3;
        console.log(b); 
        console.log(c);
    }

    inner(); // 2 1
}
outer();

// console.log(c); // c is not defined

/** 코드 설명
 * 변수 a: 전역 스코프
 * 변수 b: outer 지역 스코프, outer(), inner() 사용 가능
 * 변수 c: inner 지역 스코프, inner()만 사용 가능
 */

/** 정적 범위(Lexical Scope)
 * Description: 렉시컬 스코프는 함수를 어디서 호출하는지가 아니라 어떤 스코프에 선언하였는지에 따라 결정된다.
 */

    var text = 'global';

    function foo() { 
        console.log(text);
    }

    function bar() {
        var text = 'bar';
        foo();
    }

    bar(); // global

// bar를 출력시키고 싶으면 전역변수 text의 값을 바꿔버리면 된다. 아래 코드처럼.

    var text = 'global';

    function foo() {
        console.log(text);
    }

    function bar() {
        text = 'bar';
        foo();
    }

    bar();


/** 호이스팅(Hoisting)
 * Description: 함수 안에서 변수를 선언할 때 어떤 위치에 있든 함수의 시작 위치로 끌어올리는 현상이다.
 * 단, 선언 부분만 위로 끌어올리고 값을 대입하는 부분은 위치 그대로 남아있다.
 */


// 변수 호이스팅
    function foo() {
        console.log(a); // undefined
        var a = 100;
        console.log(a); // 100
    }

    foo();

// 위 코드와 아래 코드는 같다.

    function foo() {
        var a;
        console.log(a); // undefined
        var a = 100;
        console.log(a); // 100
    }

    foo();

// 함수 호이스팅

foo();

function foo() {
    console.log('출력');
}

    // 위 코드의 경우, 마찬가지로 함수 선언이 위로 끌어올려져 제대로 동작한다. 하지만 아래는 오류가 발생한다.

foo(); // foo is not a function

var foo = function() {
    console.log('출력');
};
    // 오류가 나는 이유는 왜일까? 아래 코드와 같은 의미이기 때문이다.

var foo;

foo(); // foo is not a function

foo = function() {
    console.log('출력');
};

    // foo 선언을 위로 호이스팅 해버리기 때문에, foo가 실행될 때는 아직 변수로 선언이 된 상태일 뿐이다. 따라서 foo는 함수가 아니라는 에러 메시지를 보낸다.

    //  이 호이스팅은 혼란스러울 수 있기에, 함수를 호출하기 전 최상단에 선언해야 한다.