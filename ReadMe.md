# AJAX 공부

## ajax란 ? Asynchronous JavaScript and XML 이다.

서버와의 통신을 위해 브라우저가 가지고 있는 XMLHttpRequest 객체를 이용해 페이지를 새로 리로딩 하지 않고 새 페이지에 필요한 데이터만을 로드한다. JavaScript를 사용한 비동기 통신, 클라이언트와 서버간의 XML, JSON, HTML, 일반 텍스트 형식 등 다양한 형태로의 데이터를 주고 받을 수 있다. 여기서 Ajax가 가지고 있는 가장 중요한 특징은 바로 "비동기성(Asynchoronous)"이다. 비동기적으로 데이터를 주고 받는 방식으로 코드가 블로킹 되는 것을 방지한다.

## 비동기 방식이란 ?

해야 할 일을 위임하고 기다리는 방식.
<br />
스택이 비어질 때 까지 기다리다 비어지면 콜백 함수들을 실행 하는 방식.
<br />
따라서 코드를 막힘 없이 실행 할 수 있다. (Non-Blocking 형식)
<br />
<strong>\* 스택에 아무것도 쌓여있지 않으면 그 즉시 콜백 큐에서 함수 실행을 기다리고 있던 콜백 함수들이 스택에 올라와 실행 된다.</strong>

## HTTP 메소드 (GET과 POST)에 대해서

### HTTP

HTTP는 웹상에서 클라이언트와 서버 간 요청/응답으로 데이터를 주고 받을 수 있는 프로토콜이다. 이 때 HTTP 요청 할 때 서버가 요청을 어떻게 수행해야 하는지 표시하는 용도로 HTTP 메소드를 사용한다.

### GET 메소드

GET 메소드는 데이터를 이름과 값의 형식으로 URL을 통해 전송한다. 서버로부터 정보를 조회하기 위해 사용한다.

### POST 메소드

POST 메소드는 데이터를 URL이 아닌 Body에 담아 전송한다. 데이터를 수정 할 때 사용한다. POST로 요청을 보낼 때는 요청 헤더에 Content-Type 에 요청 데이터의 타입을 표시해야 한다.

<hr />

![post get_method](https://user-images.githubusercontent.com/66318653/104191123-6f8c6e80-5460-11eb-9697-f0753315647a.png)

출처 https://en.wikipedia.org/wiki/Post/Redirect/Get
