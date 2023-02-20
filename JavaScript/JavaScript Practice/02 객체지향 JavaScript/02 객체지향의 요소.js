/** 클래스
 * Description: 일종의 틀의 개념이다.
 * 
 * 객체는 인스턴스(Instance)라는 말로도 쓰이는데, 우리는 "박지성은 축구선수라는 클래스로 만들어진 하나의 인스턴스다"라고도 말할 수 있다.
 * 마치 템플릿처럼, 하나의 클래스로 여러 객체를 만들 수 있다.
 * 
 * 암묵적인 약속: 함수의 첫 글자를 대문자로 설정하면 객체로 선언한 것이다.
 *             따라서 일반 함수라면 첫 글자는 소문자로 하여야 한다.
 */

var SoccerPlayer = function() { };

SoccerPlayer.prototype = {
    name: String,
    age: Number,
    height: Number,
    weight: Number,
    position: String,
    team: String
};

var park_ji_sung = new SoccerPlayer();

park_ji_sung.name = "Park Ji Sung";
park_ji_sung.age = 31;
park_ji_sung.height = 178;
park_ji_sung.weight = 70;

console.log(park_ji_sung);

/** 프로토타입(Prototype)
 * 자바스크립트에는 클래스 개념이 존재하지 않는다.
 * 그래서 프로토타입이라는 표기법을 이용해 객체가 생성된다.
 */

/** 캡슐화(정보 은닉, Information Hiding)
 * Description: 객체가 데이터를 속성에 저장하거나 저장한 데이터를 이용해 무언가를 수행하는 메소드를 포함하는 것을 말한다.
 */

/** 집합(Aggregation) / 구성(Composition)
 * Description: 해결하고자 하는 문제를 개발자가 쉽게 다룰 수 있게 쪼개어주는 방법이다.
 * 예) 집을 지을 때 지붕, 기둥, 문, 바닥을 나누는 것
 */

/** 상속(Inheritage)
 * 객체지향 방법론으로 잘 설계된 프로그램은 상속 개념을 아주 효율적으로 사용하고 있을 것이다.
 * 
 * 클래스 개념이 없으니 프로토타입을 이용해 상속을 구현할 수 있다.
 */

// 자바스크립트 상속 예제
function Man() {
    this.name = "Anonymous";
    this.gender = "Man";
    this.Run = function () {
        return this.name + " is running!";
    }
    this.Sleep = function () {
        return this.name + " is sleeping!";
    }
}

function SoccerPlayer () {
    this.base = new Man();
    this.name = "Anonymous Soccer Player";
    this.Run = function () {
        return this.base.Run();
    }
    this.Pass = function() {
        return this.name + "is passing to other player!";
    }
}

SoccerPlayer.prototype = new Man();
var player = new SoccerPlayer();

console.log(player.name);
console.log(player.gender);
console.log(player.Run());
console.log(player.Pass());
console.log(player.Sleep());