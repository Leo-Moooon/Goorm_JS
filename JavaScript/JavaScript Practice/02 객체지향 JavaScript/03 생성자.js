/** 생성자 함수(Constructor Function) 
 * 생성자는 객체를 생성할 때 처음으로 호출되는 함수를 의미한다.
 * 
*/
function SoccerPlayer() {
    this.position = "Forward";
}
var VanPersie = new SoccerPlayer();
VanPersie.position; // Forward

// 장점: 새로운 객체를 만들 때 초깃값을 전달하여 생성할 수 있다는 점이다.

function SoccerPlayer(name, position) {
    this.name = name;
    this.position = position;
    this.whatIsYourName = function () {
        return "My name is" + this.name;
    };
    this.whatIsYourPosition = function () {
        return "My position is" + this.position;
    };
}

/**코드설명
 * name이라는 속성이 추가되었고, 함수의 인자로서 name과 position이 추가되어 입력받으면 자신으 ㅣ속성값으로 취하도록 하였다.
 * 또한 이름과 포지션을 확인할 수 있는 메소드를 추가하였다.
 */

var player = new SoccerPlayer("Park Ji Sung", "Wing Forward");

player.whatIsYourName(); // My name is Park Ji Sung
player.whatIsYourPosition(); // My position is Wing Forward

player.constructor; // FUnction: SoccerPlayer

function SoccerPlayer(name, position) {
    this.name = name;
    this.position = position;
    this.whatIsYourName = function () {
        return 'My name is' + this.name;
    };
    this.whatIsYourPosition = function () {
        return 'My position is' + this.position;
    };
}
var player2 = new player.constructor("Koo Ja Cheol");
player2.name; // Koo Ja Cheol


/** instanceof 연산자
 * Description: 특정 객체가 어떤 생성자를 이용하여 만들어졌는지 테스트할 수 있다.
 */

/** 컨스트럭터 속성(Constructor Property)
 * 우리가 새로운 객체를 생성하면 보이지 않지만 constructor이라는 속성이 생긴다.
 * 이는 객체를 만드는데 어떤 객체를 참조했는지에 대한 정보가 담긴다.
 */

player instanceof SoccerPlayer; //true
player instanceof Object; // true

/** 내장형 객체(Built-in Object)
 * 내장형객체는 자료형을 포함해 다음 것들이 있다.
 * 
 * Object, Number, Array, String, Boolean, Function
 * RegExp: 정규식을 위한 객체
 * Math: 수학과 관련된 각종 값과 메소드를 내장한 객체
 * Date: 날짜와 시간에 관련된 메소드를 가진 객체
 * Error: 자바스크립트에서 발생하는 에러를 처리하기 위한 객체
 */