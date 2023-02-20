// 연산자

    /**  산술 연산자
     * 사칙연산자:  // + - * / 
     * 후위연산자: a++ a-- (다음 줄에서 값이 바뀜)
     * 전위연산자: ++a --a (그 줄에서 바로 값이 바뀜)
     */
    
    var a = 1;
    var b = 2;
    var c = 3, d = 10;

    a = b + 1; // 3
    a = b - 1; // 1
    a = b * d; // 20
    a = a/10; // 2
    a++; // 2
    a; // 3
    a--; // 3
    a; // 2

    /** 문자열 연산자
     * + : 두 문자열을 결합시켜준다.
     */
    var str1 = "Hello";
    var str2 = "World";
    var str3 = null;

    str3 = str1 + " "; // "Hello"

    console.log(str3);

    str3 = str3 + str2; // "Hello World"

    console.log(str3);

    /** 할당 연산자
     * += -= *= /=
     * 연산과 동시에 해당 값을 갱신하는 역할을 수행한다.
     *  예) a += 1 은 a = a + 1과 같은 뜻이다.
     */
    var a = 1, b = 2, c = 3, d = 4;

    a += 1; // a = a + 1;과 같다
    b -= 1; // b = b - 1;과 같다
    c *= 2; // c = c * 2;과 같다
    d /= 2; // d = d / 2;과 같다

    /** 비교 연산자
     * > >= < <=
     * 크기 비교
     */
    var a = 2, b = 1, c = 6, d = 8;
    console.log(a > b); // true
    console.log(b >= c); // false
    console.log(c <= 10); // true
    console.log(d < 10); // true

    /** 논리 연산자
     * 같다: ==
     * 다르다: !=
     * and: && (앞뒤 모두 true이어야 true)
     * or: || (앞뒤 하나만 true면 true)
     * not: ! (조건의 반대로 인식)
     */
    var a = 2, b = 1, c = 6;

    console.log(a == 1); // false
    console.log(b != c); // true
    console.log(true && false); // false
    console.log(false || true); // true
    console.log(!false); // true


    /** 조건 연산자
     * (조건)? A:B
     * 조건이 참이면 A를 수행하고,
     * 조건이 거짓이면 B를 수행한다.
     */
    var a = 2, b = 1;

    (a > b)? (console.log("a is bigger than b")):(console.log("a is smaller than b"));
    // a is bigger than b