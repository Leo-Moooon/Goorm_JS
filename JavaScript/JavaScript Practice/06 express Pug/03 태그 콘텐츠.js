/* 텍스트 표현

태그 내부의 텍스트를 표현하는 방법은 간단하다.
태그에 대한 서술이 끝나면 띄어쓰기 후에 표현하고자 하는 텍스트를 적으면 된다.

'./03-1 텍스트표현.pug'
'./03-2 결과.html'

만약 표현하려는 텍스트가 길다면 세로선(|)을 통해 다음줄에서 이어서 표현할 수 있다.

'./03-3 긴 텍스트.pug'
'./03-4 결과.html'
*/


/* 동적인 컨텐츠 표현

pug는 뷰 템플릿 엔진으로 동적 콘텐츠를 표현할 수 있다. 다시 말해 서버에서 가공한 데이터를 pug를 통해 만들어놓은 틀에 맞게 출력할 수 있따는 뜻이다. 이때 모든 정보는 JSON 형태로 주고받게 되는데, 전달받은 데이터는 Pug 문법으로 간단히 출력 가능하다.

만약 Express가 pug 엔진에 {"title":"goorm","message":"Welcome to GoormEdu"}이라는 JSON 데이터를 보냈다고 하자.
이것을 pug에서 적절한 위치에 출력하려면 다음과 같이 #{filename}으로 기술하면 된다.

'./03-5 동적인 콘텐츠 표현.pug'
'./03-6 결과.html'

전달하는 JSON 데이터에 값이 HTML 값을 포함하고 있다면 html 태그가 표시되지 않는다.
예) express에서 보내는 값이 {"content": <font color='blue>font</font>}일 때
 -> 이스케이프 처리하여 출력된다. HTML 코드로 동작하려면, 이스케이프되지 않은 상태로 출력해야 한다.
  따라서 !{fieldName}으로 출력한다.

  './03-7 올바른 예시.Pug'
*/



