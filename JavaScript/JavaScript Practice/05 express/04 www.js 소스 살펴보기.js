/** www.js
 * bin 폴더에 있고,
 * 앞으로 사용할 'npm start'도 이 www 파일을 실행시키는 명령어이다.
 * 
 * 이 중 포트 설정에 관한 부분만 살펴보자.
 * 
 * 15번 라인: 웹 서버의 포트값을 설정하는 부분이다. 프로세스에 정해진 포트값이 없으면 기본적으로 포트 3000으로 실행한다. http.createServer()에서 이 코드의 포트 설정으로 http 서버를 만든다. 포트값을 변경해주고 싶다면, 이 부분을 변경하면 된다.
*/
