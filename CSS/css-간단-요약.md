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

```html
<!DOCTYPE html>

<html lang="ko">
  <head>
    <!--href부분에 css파일 경로 적기-->
    <style>
      html {
        background-color: tomato;
      }
      body {
        margin: 20px 5px 12px 9px;
        background-color: thistle;
      }
      div {
        margin: 20px 50px;
        height: 150px;
        width: 150px;
        background-color: whitesmoke;
      }
      span {
        display: block;
        background-color: turquoise;
      }
    </style>
  </head>
  <body>
    <div></div>
    <span>hi</span>
  </body>
</html>
```

display를 작성해서 block을 inline, inline을 block으로 바꿀 수 있다.

block은 높이와 너비가 있고 inline는 높이와 너비가 없다.

즉 block은 box이고 inline은 box가 아니다.

box에는 특징이 3가지가 있다. margin, padding, border.

브라우저는 원치 않아도 기본적으로 style 속성을 준다. user agent stylesheet : 브라우저가 기본적으로 준 style 속성

margin은 box의 border(경계)의 바깥에 있는 공간이다.

collapsing margins 현상 : 어느 box의 경계가 다른 box의 경계와 같다면 이 두 box의 margin은 하나로 취급된다.(위, 아래쪽에서만 일어난다.)
