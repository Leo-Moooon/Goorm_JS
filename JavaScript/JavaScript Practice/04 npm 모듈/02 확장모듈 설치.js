/** npm 설치방법 2가지
 * 
 *  1) 글로벌 설치: 어디서나 사용가능
 *      - 설치경로/node_modules 디렉토리
 *  2) 로컬 설치: 특정 프로젝트에서만 사용 
 *      - 설치경로: 현재 개발중인 어플리케이션의 node_modules 디렉토리
 */

/** 글로벌 설치(전역 설치)
 * 노드 모듈 설치 위치: {prefix}/lib/node_modules
 * 실행과 관련된 파일: {prefix}/bin
 * 메뉴얼 페이지 위치: {prefix}/share/man
 * {prefix}: 기본적으로 /usr/local을 의미한다.
 * 
 * nodemon이나 express같은 모듈은 글로벌 설치를 권장
 * 셀에서 커맨드라인처럼 사용하고 싶은 모듈은 전역으로 설치할 것(단, 필요할때만!)
 * 
 * 설치 명령어: npm install [모듈명] -g
 * 글로벌로 설치된 모듈 목록 확인: npm list -g
 */

/** 로컬설치(지역 설치)
 * 노드모듈: ./node_modules
 * 실행관련 파일들:./node_modules/bin
 * 매뉴얼 페이지: 설치X
 * 
 * *소스코드에서 require() 메소드를 통해 특정 어플에 국한되어 사용하는 경우가 많은 확장 모듈은 로컬 설치가 좋다.
 * 로컬 설치는 애플리케이션 중심으로 해당 애플리케이션이 접근할 수 있는 로컬에 설치되어야 하는데, -g 옵션 없이 설치한다.
 * 
 * 여러 개의 모듈 설치 명령어: npm install [모듈 1] [모듈 2] [모듈 3]
 * 특정 버전의 확장 모듈 설치 명령어: npm install [모듈명@버전]
 */

/** 원하는 npm 찾아서 설치하기
 * npm registry 사이트: https://www.npmjs.com/
 *  - 중앙저장소에 등록된 모든 확장 모듈을 검색하고 확인할 수 있다.
 *  - 원하는 모듈을 찾으면 해당 모듈의 이름으로 npm install 명령을 이용하여 설치하면 된다.
 * 
 * npm 검색과 정보 확인 명령어
 *  - 확장 모듈 검색: npm search [모듈명]
 *  - 특정 모듈의 정보 검색: npm info [모듈명]
 */