/** 객체지향의 특징
 * 자바스크립트는 완전한 객체지향 언어이다. 아래는 "객체 지향"하면 제일 먼저 떠올리는 개념들이다.
 * 
 * 클래스
 * 객체
 * 메소드
 * 속성
 * 캡슐화
 * 집합
 * 재사용
 * 상속
 * 변형
 * 
 * 자바스크립트는 자바/C++과는 조금 다른 객체지향 언어이다.
 * 자바/C++는 '클래스 기반'의 언어이고, 자바스크립트는 '프로토타입 기반'의 언어이다.
 */

/** 객체(Object)
 * 하나의 객체는 '어떤 것'을 의미하며, 단위화된 표현을 통해 개발을 더 쉽게 할 수 있게 된다.
 * 
 * 객체의 속성(Property): 대상의 특성
 * 객체의 메소드(Method): 대상의 동작
 */

// 박지성 선수를 자바스크립트로 표현해본 예시

var park_ji_sung = {
    name: "Park Ji Sung",
    height: 178,
    weight: 70,
    position: "RW",
    team: "Queen's Park Rangers"
};

console.log(park_ji_sung.team); // "Queen's Park Rangers"

