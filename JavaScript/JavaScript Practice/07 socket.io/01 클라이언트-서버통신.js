/*
클라이언트: 서버에게 서비스를 요구하는 사용자나 컴퓨터
서버: 서버프로그램이 실행되고 있는 하드웨어

사용자의 요청으로 서비스를 수행하고 네트워크를 관리, 제어, 감시하며 파일이나 프로그램, 혹은 하드웨어 자원을 공유할 수 있도록 서비스한다.
*/

/* 
클라이언트/서버 통신: 서버에 있는 풍부한 자원들과 서비스를 통합된 방식으로 제공받기 위한 통신이다.

클라이언트에서는 서비스를 요청하고 서버에서는 서비스에 응답하는 형태를 가지는 네트워크 모델, 혹은 방식을 가리켜 클라이언트/서버 모델이라 부른다.

하나의 서버 프로그램이 다수 클라이언트에 응용 서비스를 제공하는 클라이언트-서버 모델은 인터넷 응용 환경에서 가장 보편화된 연결 설정 방식이다.

일반적으로 네트워크 서비스를 받기 위해 클라이언트가 통신을 시작한다. 클라이언트는 서버에 접속을 시도하고 그 연결 결과를 기다리든지, 어떤 서비스를 요구하고 응답을 기다린다. 클라이언트의 이와같은 요구에 대하여 서버가 응답을 보내는 방식으로 동작이 이루어진다.
*/

/* 
통신 프로토콜: 통신 서비스 또는 기능 수행을 위해 관련 통신 당사자 간 교환하는 정보의 종류와 표현 형식, 교환 절차, 그리고 교환 과정에서 실행해야 할 행위에 관한 규약이다.
*/

/* 
클라이언트/서버 통신 방식

(1) Polling 방식
은 클라이언트가 서버에 주기적으로 요청 후 응답을 받는 방식이다. 가장 기본적이 기법으로 구현이 간단하지만,
쓸모없는 요청-응답으로 많은 트래픽이 낭비되며, 다음 폴링 전까지 어떤 이벤트가 왔는지 모르기에 실시간성이 보장되지 않는다.

요청주기를 조절할 수 있지만, 주기가 짧으면 서버에 부하를 줄 수 있으므로 주의해야 한다.

실시간 메시지 전달이 크게 중요하지 않는 서비스에 적합한 방식이다.


(2) Long Poll 방식
은 위 방식의 단점인 '반복적인 요청으로 응답을 받는 형태'에서, 클라이언트가 서버에 대한 요청을 유지하여 반복적인 요청을 없애고 '유효한 이벤트가 발생하면 응답을 해주는 방식'이다. 이름에서 알 수 있듯이 접속을 오래 유지하다가 응답이 오면 데이터를 처리함과 동시에 새로운 접속을 생성하는 것이다. 

무한정 기다리지는 않고, 일정 시간이 지나면 접속을 완료 하고 새로 요청한다. (1)에 비해 불표요한 요청과 응답을 줄일 수 있다.

(3) WebSocket 방식
은 이런 불편함을 개선하기 위해 만들어진 HTML5 표준 기술로, 클라이언트와 서버가 연결된 후부터 HTTP 요청/응답과는 무관하게 서버와 양방향 통신이 가능하다. 
*/