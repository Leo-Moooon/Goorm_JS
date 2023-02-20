/** OS 모듈
 * 실제 개발에서 많이 사용되지는 않으나, 운영 체제와 시스템의 정보를 가져오는 모듈이다.
 * 활용: CPU, 메모리, 디스크 용량이 얼마 남았는지 확인이 필요할 때 사용한다.
 * API 문서: https://nodejs.org/api/os.html
 * 
 * os.tmpdir(): 임시 저장 폴더의 위치
 * os.endianness(): CPU의 endianness(BE 또는 LE)
 * os.hostname(): 호스트(컴퓨터) 이름
 * os.type(): 운영체제 이름
 * os.platform(): 운영체제 플랫폼
 * os.arch(): 운영체제 아키텍쳐
 * os.release(): 운영체제 버젼
 * os.uptime(): 운영체제가 실행된 시간
 * os.loadavg(): 로드 에버리지 정보를 담은 배열
 * os.totalmem(): 시스템의 총 메모리
 * os.freemem(): 시스템의 가용 메모리
 * os.cpus(): CPU의 정보를 담은 객체, CPU의 세부 정보를 반환한다. / CPU 개수만큼 배열로 반환한다.
 * os.networkInterfaces(): 네트워크 인터페이스 정보를 담은 배열
 */

/** OS 객체의 유일한 속성
 * os.EOL: 운영체제의 개행문자(\n과 같은 문자)
 */

//예제

var os = require('os');

console.log(os.tmpdir());
console.log(os.type());

var cpus = os.cpus();

for(var i = 0; i < cpus.length; i++) {
    console.log("CPU[" + (i+1) + "]");
    console.log("model: " + cpus[i].model);
    console.log("speed: " + cpus[i].speed);
}