# JavaScript

## 1.JavaScript 란?

동적(Interactivity)인 웹사이트를 만들기 위해 필요한 프로그래밍 언어이다.

## 속성들

clientX,Y는 윈도우 전체의 범위내에서 마우스 위치값

offset은 내가 적용하고자 하는 내에서의 마우스 위치값

내가 적용하고자 하는 크기가 윈도우만 하다면 client나 offset은 차이가 없을 거임

- mousedown

  - 클릭했을때 발생하는 event

- const ctx = canvas.getContext("2d);
  - canvas의 context, 이 안에서 픽셀들을 다룸
  - ctx.strokeStyle = "#2c2c2c";
    - ctx.strokeStyle은 그릴 선들이 모두 value의 색을 갖는다.
  - ctx.lineWidth = 2.5;
    - ctx.lineWidth은 그 선의 너비가 value의 px값이다..
  - ctx.beginPath()
    - path는 선
  - ctx.moveTo(x,y)
    - 마우스의 xy 좌표로 path를 옮김
  - ctx.lineTo()
    - path의 이전 위치부터 지금 위치까지 선을 만듦.
  - ctx.stroke()
    - 획을 긋음.
