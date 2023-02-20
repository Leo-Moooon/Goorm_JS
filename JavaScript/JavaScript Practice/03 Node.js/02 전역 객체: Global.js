/** console 객체
 * Description: 콘솔화면과 관련된 기능을 갖고 있다. 여러 메소드가 있지만 log 제외하고는 많이 쓰지 않는다.
 * API 문서: https://nodejs.org/api/console.html
 * - console.log(): 콘솔에 로그 메시지 출력
 * - console.time(label): 시간 측정 시작
 * - console.timeEnd(label): 시간 측정 종료
 * 
 * log로 출력 시 지정한 포맷보다 변수가 많으면 그대로 출력하고 부족하다면 특수문자를 출력한다.
 */

// Log 예제
console.log('%d + %d = %d', 1, 2, 1+2);
    // > 1 + 2 = 3
console.log('%d + %d = %d', 1, 2, 1+2, 4);
    // > 1 + 2 = 3 4
console.log('%d + %d = %d', 1, 2);
    // > 1 + 2 = %d

// time 예제
console.time('time');
console.timeEnd('time');
    // > time: 0.029ms

/** Process 객체
 * Description: 프로그램과 관련된 기능을 다루는 객체이다. process 객체는 자바스크립트에는 없는, Node.js만의 객체이다.
 * API 문서: https://nodejs.org/api/process.html
 */

    /** 속성
     * process.argv: 프로그램의 매개변수 정보
     * process.env: 컴퓨터 환경과 관련된 정보
     * process.version: Node.js의 버젼
     * process.versions: Node.js 프로세스에서 사용하는 모듈들의 버젼
     * process.arch: 프로세서의 아키텍처
     * process.platform: 플랫폼의 정보
     */

    /** 메소드
     * process.exit(): 프로그램 종료
     * process.memoryUsage(): 메모리 사용 정보
     * process.uptime(): 현재 프로그램이 실행된 시간
     */

// 예제
console.log('process env property: ', process.env);
console.log('uptime method: ', process.uptime());

/** Exports 객체
 * 모듈 관련 객체로, Node.js는 Exports 객체를 사용하여 기능을 확장할 수 있다. 
 * 모듈: 기능을 쉽게 사용하기 위해 메소드와 속성을 미리 정의해서 모아 놓은 것(클래스, 라이브러리)
 * 모듈 생성: 파일을 만들고, exports 객체의 속성이나 메소드로 정의해주면 된다. 
 * 만들어진 모듈은 전역함수 require()를 이용하여 추출한다.
 */

// test.js에서 가져오기
var calculator = require('./02-1 test.js');
console.log('Double value is ' + calculator.double(3));
console.log('Plus value is ' + calculator.plus(3));