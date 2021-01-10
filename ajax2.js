document.getElementById("button1").addEventListener("click", loadUser);
document.getElementById("button2").addEventListener("click", loadUser2);

function loadUser() {
  const xhr = new XMLHttpRequest();

  //xhr.open(method(get,post 등등), url(데이터를 fetch 할 주소), 비동기 여부)
  xhr.open("GET", "user.json", true);

  //onload 말고 다른 방법을 써도 괜찮다. xhr.onreadystatechange 같은
  xhr.onload = function () {
    if (this.status == 200) {
      //string 형식에서는 user의 data를 추출할 수 없다.
      //JSON.parse() 를 통해 string에서 JSON(객체)형식을 바꿔준다.😉

      const user = JSON.parse(this.responseText);
      console.log(user); //id: 1, name: "김덕기", email: "ejrlajtwu@naver.com"

      let output = "";

      output += `<ul>
            <li>ID: ${user.id}</li>
            <li>Name: ${user.name}</li>
            <li>Email: ${user.email}</li>
        </ul>`;

      document.getElementById("user").innerHTML = output;
    }
  };

  xhr.send();

  // The XMLHttpRequest method send() sends the request to the server. If the request is asynchronous (which is the default), this method returns as soon as the request is sent and the result is delivered using events. If the request is synchronous, this method doesn't return until the response has arrived.

  // send() accepts an optional parameter which lets you specify the request's body; this is primarily used for requests such as PUT. If the request method is GET or HEAD, the body parameter is ignored and the request body is set to null.

  //XMLHttpRequest 메소드 send()는 서버에게 요청을 보내는 메소드다. 만약 요청이 비동기적이라면 send 메소드는 이벤트( 버튼 클릭 등 )를 이용한 요청이 보내지고 그 요청에 따른 결과를 곧 바로 반환한다. 반면 만약 요청이 동기적이라면, 이 메소드는 응답이 도착할 때 까지 아무것도 반환하지 않는다.

  //send 메소드는 optional 한(음..선택적인(?)) 파라미터를 받는데 이 파라미터는 요청의 바디를 구체화 한다. 주로 PUT 같은 요청에 이용된다. 만약 요청의 방식이 GET 이나 HEAD 일 경우, body 파라미터는 무시되어지고 null로 설정된다.
}

function loadUser2() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "users.json", true);

  xhr.onload = function () {
    if (this.status == 200) {
      const users = JSON.parse(this.responseText);

      let output = "";

      //for of
      for (let i of users) {
        console.log(i);
        output += `<ul>
            <li>ID: ${i.id}</li>
            <li>Name: ${i.name}</li>
            <li>Email: ${i.email}</li>
        </ul>`;
        document.getElementById("users").innerHTML = output;
      }
    }
  };

  xhr.send();
}
