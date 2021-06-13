# CSS

## 1.CSS 란?

브라우저에게 웹사이트의 content가 ‘어떻게 보여야’ 하는지에 대해 알려주는 디자인 언어이다.

예를 들어 title의 크기는 얼마인지, link의 색깔은 무엇인지를 CSS를 통해 브라우저에게 알려주는 것이다.

## 2.CSS 적용방법

html에 css를 적용하는 방식이 2가지가 있다.

html 파일에 html 코드와 css 코드를 놓는 방법(inline css)과 css와 html을 분리하는 방식(external css)이다.

external css가 더 좋은 방식이다.

분리된 파일이 있으면 다른 많은 html 페이지에서 사용이 가능하고 html코드와 css코드를 따로 봐서 보기에 좋다.

> inline css 적용 방법

```html
<!DOCTYPE html>

<html lang="ko">
  <head>
    <!--style 안에 css 작성 -->
    <style></style>
  </head>
</html>
```

> external css 적용 방법

```html
<!DOCTYPE html>

<html lang="ko">
  <head>
    <!--href부분에 css파일 경로 적기-->
    <link rel="stylesheet" href="#" />
  </head>
</html>
```

## 3.CSS 작성방법

> selector -> 중괄호 -> 그 안에 property, 콜론, value값 작성 -> 세미콜론

```css
h1 {
  color: blue;
  <!-- css 프로퍼티 작성에서 띄어쓰기 하지 않음. 밑줄(_)이나 슬래쉬(/)사용 안됨. -->
  font-size: 20px;
}
```

브라우저가 CSS를 읽을 때 위에서부터 순서대로 읽는다.

```css
h1 {
  color: blue;
}
h2 {
  color: blue;
}
```

같은 selector를 가리키는 CSS가 여러개이면, 가장 마지막 selector가 적용된다.

## 4.Blocks and Inlines

옆에 다른 요소가 못 오는걸 block, 올 수 있는걸 inline라고 한다. (in the same line)

대부분이 요소가 block이므로 block이 아닌 종류를 기억하는게 더 편하다.

inline의 대표적인 태그 span, a, img

```css
html {
  background-color: tomato;
}
body {
  background-color: thistle;
}
div {
  height: 150px;
  width: 150px;
  background-color: whitesmoke;
}
span {
  display: block;
  background-color: turquoise;
}
```

display를 작성해서 block을 inline, inline을 block으로 바꿀 수 있다.

block은 높이와 너비가 있고 inline는 높이와 너비가 없다.

즉 block은 box이고 inline은 box가 아니다.

## 5.margin, padding, border, id

```css
/* * {
  
} */
body {
  background-color: #ff6446;
  height: 100vh;
  margin: 0;
}
#box {
  background: #f5dfb3;
  padding: 20px;
  width: 230px;
  height: 230px;
  border: 2px solid black;
}

.box__box {
  background: #028080;
  width: 50px;
  height: 50px;
}

.box__box--second {
  width: 200px;
}
```

box에는 특징이 3가지가 있다. margin, padding, border.

브라우저는 원치 않아도 기본적으로 style 속성을 준다. user agent stylesheet : 브라우저가 기본적으로 준 style 속성

margin은 box의 border(경계)의 '바깥'에 있는 공간이다.

collapsing margins 현상 : 어느 box의 경계가 다른 box의 경계와 같다면 이 두 box의 margin은 하나로 취급된다.(위, 아래쪽에서만 일어난다.) - padding을 사용해서 해결하기

padding은 box의 경계로 부터 '안쪽'에 있는 공간이다.

특정 id의 값을 지칭하려면 #id를 이용해 접근한다. 하지만 요즘 class속의 bem작성법으로 인해 잘 쓰지 않는다.

border는 말 그래도 box의 경계이다.

border는 보통 한 종류만 사용한다.(border: 2px solid black; 너비, 스타일(solid만 주로 사용), 색깔)

border는 inline과 block 모두에 적용된다.

'\*'는 '전체'를 뜻한다.

## 6.class, inline block, flex-box

```css
body {
  background-color: #ff6446;
  height: 100vh;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box {
  background: #f5dfb3;
  padding: 20px;
  width: 230px;
  height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.box,
.box__box {
  border: 2px solid black;
}

.box__box {
  background: #028080;
  width: 50px;
  height: 50px;
  border-color: white;
}

.box__box--second {
  border-style: dotted;
  width: 200px;
}
```

inline속성인 태그들은 padding은 전부 적용된다.

하지만 inline속성은 높이와 너비가 없이 때문에 margin은 좌우에만 적용된다.

class는 여러개의 속성들이 공용으로 사용할 수 있는 스타일 형식이고, 여러 개의 속성에 같은 스타일을 적용하고 싶을 때 사용한다.

class는 .속성 으로 사용할 수 있으며 class는 여러 개를 가질 수 있다.

inline: width, height 무시돼서 무언가 추가하지 않는 이상 아무것도 안보임

block: 옆에 아무것도 올 수 없음

inline-block: 위 문제를 해결할 수 있어서 좋긴 한데, 반응형 디자인 지원되지 않음(각 기기마다 만족하는 최적값을 일일히 찾아야 함, 그래서 잘 사용하지 않음)

이 문제를 해결할 수 있는게 flexbox

### flexbox 사용 규칙

- 자식 엘리먼트에는 어떤 것도 적지 말아야 함. 자식 엘리먼트를 움직이게 하려면 부모 엘리먼트를 flex container로 만들어야 한다.
  - justify-content : main axis에서 작용 (가로) (디폴트)
  - align-items : cross axis에서 작용 (세로)
- flex-container가 height를 가지고 있지 않으면 align-items를 사용하더라도 위치가 바뀌지 않음.
  -vh사용 = viewport height (스크린에 따라 다름)

- flex-direction에는 두 가지 속성, column과 row가 있다.
  - justify-content나 align-items의 default를 변경하기 위해선, 'flex-direction'을 수정하면 된다.
  - display를 flex로 했을 때 default는 row이다. 따라서 flex-direction: column;을 주면 주축과 교차축이 반전된다.
- 원하는만큼 flex 부모-자식 엘리먼트를 만들어낼 수 있다.
- flex-wrap: wrap;을 사용하면 가능한 영역 내에서 벗어나지 않고 여러행으로 나누어 표현 할 함.
  - flex-wrap: nowrap;을 사용하면 flexbox는 width값을 초기 사이즈로만 여기고, 모든 엘리먼트를 같은 줄에 있게 하기 위해 width를 바꾸기도 한다.
- flex-direction: column-reverse; 밑에서 시작해서 위로 올라가게 한다.(마찬가지로 row-reverse도 있다.)
- flex-wrap: wrap-reverse; 또한 있는데, 브라우저를 줄일 때, 엘리먼트가 겹쳐지는 위치가 역전된다.
