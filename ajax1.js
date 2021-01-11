document.getElementById("button1").addEventListener("click", loadText);

function loadText() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "dummy.text", true);

  xhr.onload = function () {
    if (this.status == 200) {
      console.log(this.responseText);
      document.getElementById("text").innerHTML = this.responseText;
    } else if (this.status == 400) {
      //에러 처리
    }
  };

  // xhr.onreadystatechange = function () {
  //   if (this.status == 200 && this.readyState == 4) {
  //     console.log(this.responseText);
  //   }
  // };

  //readyStaet : 3 => 데이터의 일부를 받은 상태 (로딩)
  //readyState : 4 => 데이터 전부를 받은 상태

  //요청(duumy.text 파일)을 클라이언트(웹페이지)로 보내는 역할
  xhr.send();
}
