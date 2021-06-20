# advanced css

## transitions

> 어떤 상태에서 다른 상태로의 변화를 보내주는 애니매이션이다.

- transtion은 state가 없는 요소에 붙어야한다. 처음 생긴곳에 있어야한다.
  state에 transition을 준다면 변화를 준것(예를들면 hover라면 마우스를 갖다 댄것)을 그만할경우(마우스를 뗄경우) 원래상태로 바로 돌아간다.
- transtion에 변화를 준것들은 state에 들어있는것들이 기준이 되어 바뀌는것이다.바뀌는 것들에 한정하여 transition이 일어난다.
- ease-in function : 브라우저에게 변화하는 방법을 알려주는 역할
  - linear - 변화 그래프가 직선
  - ease-in - 시작과 끝이 빠름
  - ease-out - 시작과 끝이 느림
  - ease-in-out - 시작이 빠르고 끝이 느림
  - cubic-bezier(0, 0, 0, 0); 으로 직접 설정할수도 있다.

```css
div {
  width: 500px;
  height: 500px;
  color: white;
  //예시
  transition: all 0.5s ease-in-out, color 20s cubic-bezier(24, 25, 34, 50);
}
div:hover {
  background-color: yellow;
  color: black;
}
```

## transformations

- transformation은 한 요소를 transform(변형)시킬 수 있다.
- border-radius에 50%를 준다면 원이 된다.
- translate은 transformation을 적용 시키긴 하지만, 다른 형제(sibling)을 변화시키진 않는다.
  - transformation은 box element를 변형시키지 않는다.
  - margin, padding이 적용되지 않는다. 일종의 3D transformation이기 때문이다.
  - margin, padding을 위해서 translateX, translateY를 사용하지 않는다.
- transform과 transition을 조합하면 더 역동적인 애니메이션을 만들 수 있다.
- CSS 3D는 GPU로 돌아가므로, 3D 작업을 할 수 있다.

### 속성들 간략하게 요약

```css
.controls__btns button:active {
  transform: scale(0.98);
}
```

버튼을 누를때마다 0.98배 확대

## animations

애니메이션 만들기

```css
@keyframes 애니메이션 이름 {
  from {
  }
  to {
  }
}
```

사용하기

```css
img {
  animation: 애니메이션이름 재생시간 ease-in옵션;
}
```

무한으로 반복되게 하려면 옵션 뒤자리에 infinite를 붙여준다.

from to 말고, 1,2,3,4,5...10 혹은 0% 25% 50% 75% 100% 같이 여러 단계로 나뉘어 애니매이션을 만들 수 있다.

다른 property들도 애니매이션으로 만들 수 있다. 꼭 transform만 써야하는 건 아니지만, transform을 쓰는걸 권한다. 일부 property는 애니매이션이 잘 안되기 때문이다.

## media queries

- Media query는 오직 CSS만을 이용해서 스크린의 사이즈를 알 수 있는 방법이다.(웹사이트를 보고 있는 사용자의 스크린 사이즈)

- @media screen and (max-width: 00px) {} 을 이용하여 몇 픽셀부터는 달라보이도록 만들 수 있다. 이를 통해 스크린의 사이즈를 알 수 있다.

- min 사이즈와 max사이즈를 조절하여 단계별로 만들면, 스크린 사이즈의 범위를 알 수 있다.

- 브라우저에서 inspect의 device toolbar를 이용하여 핸드폰 기종 별 사이즈로 브라우저를 볼 수 있다.

- media screen에 (orientation: landscape)를 이용하면, 세로모드인지 가로모드인지도 구별 할 수 있다.

- Media Queries 주요기능

  - min-device-width
  - max-device-width
  - orientation: landscape
  - orientation: portrait
  - aspect-ration - 레티나디스플레이 감지가능
  - display-mode
  - inverted-colors
  - lightlevel
  - prefers-contrast
  - resolution
  - monochrome

- Media type
  - @media screen{}
  - @media print{}
