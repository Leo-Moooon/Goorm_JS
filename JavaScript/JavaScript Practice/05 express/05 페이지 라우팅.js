/** express에서의 라우팅
 * 클라이언트로부터 요청받은 URL과 뷰를 매칭시키는 것
 * URL이라 했지만 실제로 라우팅에 사용되는 정보는 호스트 이름을 제외하고 나머지 경로를 표시한 문자
 * 
 * 예) 다음과 같은 URL로 접속하면 라우팅 대상은 '/hello'라는 문자열이 된다.
 *  http://localhost:3000/hello
 */

/* 
app.js의 코드 일부분으로, 페이지 라우팅의 기본적인 구조이다.
app.get('/'. function(req, res) {
    res.render('index.jade');

app.get 함수는 GET방식으로 들어오는 경로를 연결하여, 이에 대응하는 동작을 콜백함수로 기술할 수 있도록 한다.

지정된 Path '/'로, 웹사이트의 루트 페이지(제일 처음 보이는 메인페이지)로 연결한다.

콜백함수의 req: 요청객체(Request Object)
res: 응답객체(Response Object)

요청객체에는 클라이언트에서 보낸 여러 정보가 포함되어 있다.
응답객체에는 우리가 클라이언트에 응답할 수 있게 하는 객체인데, 위에서 render()이라는 함수로 뷰를 렌더링하게 되어 있다.

렌더링할 내용은 'index.jade'이고, 이는 jade 형식으로 된 뷰파일이다. jade는 외부모듈로, 템플릿 엔진 모듈이다. 

요약: 위 코드는 설정된 경로의 루트 페이지('/')로 접속했을 떄, index.jade 페이지를 보여준다는 뜻이다.
}); */

/* 
app.post('/post', function(req, res) {
    res.render('write.jade', {
        id: req.body.id,
        name: req.body.name
    });
})

app.post 함수는 POST 방식으로 들어오는 경로를 연결한다. POST 방식은 express Configuration에서 bodyParser를 포함하여 요청 객체의 body 속성을 통해 클라이언트에서 HTML Form으로 작성한 데이터를 읽어올 수 있다.

위 코드는 write.jade로 렌더링하면서 id, name이라는 HTML Form의 Item으로 넘어온 값을 전달하여 출력하는 것이다. 렌더링할 때에 id, name의 값이 jade 템플릿 엔진(현재는 Pug로 이름 변경)을 통해 write.jade 파일에 넘겨지고 write.jade는 이를 출력한다.
*/

/* 
express의 페이지 라우팅의 장점 중 하나는 유연한 라우팅이 가능하다는 점이다. app.get, app.post의 첫 번째 매개변수에는 정규표현식 등 특정 표현식을 사용할 수 있다.

app.get('/hello/:id', function(req, res) {
    var id = req.params.id;
    ~~
});

위 경우 http://localhost://3000/hello/world로 요청을 받았다면 req.params.id에는 'world'라는 문자열이 들어가게 된다.

즉, URL을 통해 값을 넘겨줄 수 있다는 뜻이다.

만약 methodOverride를 설정에 추가하면 get, post 말고도 Put 등의 REST 방식도 사용할 수 있다.

(REST 방식이란 Representational State Transfer의 약자로, 데이터 전송 방식 중 하나를 의미한다.)
*/