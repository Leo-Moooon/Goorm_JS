/** 상속
 * 자바스크립트와 동일한 상속이 가능하나, 더 편리함을 위해 Util 모듈을 통해 별도의 메소드를 지원하고 있다.
 */

// 자바스크립트에서의 상속

function Foo() {
    // 코드
}
Foo.prototype = {
    bar: function() {
        console.log('Foo_bar 실행');
    }
};
    // 위 코드는 bar() 메소드를 가진 Foo 객체를 생성하는 코드이다. Foo를 상속받아 Bar 객체를 생성하는 코드를 아래에서 살펴보자.

function Bar() {
}

Bar.prototype = Object.create(Foo.prototype);

Bar.prototype.baz = function() {
    console.log('Bar_baz 실행');
};

Foo.prototype.bar();
Bar.prototype.bar();
Bar.prototype.baz();

    // 이렇듯 Foo 객체의 원형을 상속받은 Bar는 Foo의 bar() 메소드를 사용할 수 있게 되었다.



// util.inherits() 메소드를 이용한 상속
// 큰 차이는 없으나 코드 양이 줄고, Bar가 Foo를 상속받았다는 것이 명확히 보인다.

var util = require('util');

function Bar() {
}

util.inherits(Bar, Foo);

Bar.prototype.baz = function() {
    console.log('Bar_baz 실행');
}

Foo.prototype.bar();
Bar.prototype.bar();
Bar.prototype.baz();
