# HTML

## 0.웹개발에 앞서 알아야 할 기본내용

웹사이트는 텍스트 파일로 이루어져 있다.

텍스트 파일을 브라우저에게 전달하면 브라우저가 코드를 이해해서 웹사이트를 구현한다.

따라서 어떤 텍스트를 어디에 작성해야 하는지를 알면 웹사이트를 제작할 수 있다.

파일과 폴더명은 항상 소문자로 작성한다.(오류를 줄이기 위해서)

브라우저는 html 파일에 에러가 있다고 알려주지 않는다.

브라우저는 html 문법을 따르지 않아도 언제나 사용자에게 content를 보여준다.

## 1.HTML 이란

브라우저에게 웹사이트에서 보여줄 content가 ‘무엇’인지 알려주는 마크업 언어이다.

예를 들어 title은 무엇인지, link는 무엇인지, 이미지는 무엇인지를 html을 통해 브라우저에게 알려주는 것이다.

## 2.Tag 란

tag 사이에 있는 content가 무엇인지를 브라우저에게 알려주는 것이다.

```html
<!DOCTYPE html>
<!--lang 속성은 검색엔진들에게 우리사이트에서 사용되는 언어를 알려준다.-->
<html lang="ko">
  <!--link는 브라우저탭에 아이콘을 넣는다.-->
  <link rel="icon" href="#" />
  <title>routine</title>
  <!--charset는 브라우저가 어떤 글자를 표시할 지 알려준다.-->
  <meta charset="utf-8" />
  <!--description는 검색시 페이지 제목 아래 페이지 내용의 요약이 부분에 반영되는 항목이다.-->
  <meta name="description" content="routine description" />

  <h1>안녕하세요</h1>
  <ol>
    <li>시리얼</li>
  </ol>
  <ul>
    <li>우유</li>
  </ul>
  <!--href는 HTTP reference 혹은 hyperlink reference라고 한다.-->
  <!--target="_self"는 기본값. 안 적어도 된다.-->
  <a href="https://google.com" target="_self">구글접속</a>
  <!--target="_blank"는 다른탭에서 사이트가 열리는 것을 나타낸다.-->
  <a href="https://google.com" target="_blank">구글접속</a>

  <img src="#" />
</html>
```

tag에 부가적인 정보 추가하는 것을 attributes(속성)이라고 한다.(href, target, src 등)

self closing tag는 content가 없는 태그로 모든 정보는 attribute를 통해 제공된다.

!DOCTYPE html은 이 문서에 html 코드가 포함되어 있음을 브라우저에 알려준다.

html 문서는 head(문서의 구성(환경설정)), body(문서의 내용)로 구성된다.

meta tag는 문서에 추가 정보를 제공한다.

```html
<!DOCTYPE html>
<html>
  <head> </head>
  <body>
    <form action="" method="">
      <label for="website">website</label>
      <input id="website" required type="date" />
      <input type="submit" value="Create Account" />
    </form>
  </body>
</html>
```

- label 태그는 input태그와 함께 작동한다.(label이 input을 activate)

- label 태그에 for=“”, input 태그에 id=“”에 똑같은 벨류가 들어가야 한다.

- id 속성은 body 안에 어떤 태그에든 넣을 수 있는 attribute임

- element당 하나의 id만을 가질 수 있다. (고유 식별자이며, 중복된 id를 사용하면 작동되지 않는다.)

- css가 태그를 지정하여 꾸미기 위해서 id가 필요하기 때문이다.

- form은 중요한 2가지 속성(attribute)을 가지고 있다. 하나는 action이고, 다른 하나는 method이다.
- action은 어떤 페이지로 data를 보낼건지 지정할 수 있다.
- action에 적어 놓은 URL에 해당하는 파일이 반드시 존재해야한다.
- method는 2가지 방식 중 하나를 쓸 수 있다. 하나는 POST이고, 다른 하나는 GET이다.
- POST는 백엔드 서버에 정보를 전송하는 방식.
- GET 방식은 보안에 취약하다. username이랑 password를 GET 방식으로 보내선 안된다. URL에 포함되어도 상관없는 정보들을 GET 방식으로 보내는 것이다.

```html
<!--논 시맨틱 태그로 작성한 사례-->
<body>
  <div>
    <h1>The Times</h1>
  </div>
  <div>
    <adress>hello!</adress>
  </div>
  <div>&copy; 2020 N.C</div>
</body>
```

```html
<!--시맨틱 태그로 작성한 사례-->
<body>
  <header>
    <h1>The Times</h1>
  </header>
  <main>
    <adress>hello!</adress>
  </main>
  <footer>&copy; 2020 N.C</footer>
</body>
```

div는 box와 같은 기능을 한다. box는 양옆에 올 수 없다.(상하로 컨텐츠가 배열된다.)

div와 같은 기능을 하지만 의미가 있는 semantic tag로 작성해주는 것이 좋다.

semantic tag (예시.header,main,footer...)

이 태그를 읽는 것만으로 어떤내용을 담고 있는지 이해하기 좋기 때문에 가능한 semantic tag로 작성하는 것이 좋다.

```html
<nav class="nav">
  <ul class="nav__list">
    <li class="nav__btn">
      <a class="nav__link" href="friends.html">
        <i class="fa-solid fa-user fa-2x"></i>
      </a>
    </li>
    <li class="nav__btn">
      <a class="nav__link" href="chats.html">
        <span class="nav__notification badge">1</span>
        <i class="fa-regular fa-comment fa-2x"></i>
      </a>
    </li>
    <li class="nav__btn">
      <a class="nav__link" href="find.html">
        <i class="fas fa-search fa-2x"></i>
      </a>
    </li>
    <li class="nav__btn">
      <a class="nav__link" href="more.html">
        <span class="point"></span>
        <i class="fa-solid fa-ellipsis fa-2x"></i>
      </a>
    </li>
  </ul>
</nav>
```

- navigation 안의 ul 안에 많은 li들로 구성되는데, 검색엔진 구글도 navigation을 찾아서 ul의 li 안에 있는 link를 가져오게끔 설정되어 있다.
- VSC의 단축키로 navigation에서 하위메뉴까지 한번에 자동 완성 시킬 수 있다.
  - nav>il>li\*(필요한 갯수)>a
  - 그 후 #과 tab만으로 간편하게 작성이 가능하다.(수정하다보면 다음 tab이 옳게 먹히지 않는다.)
- 점 3개는 ellipsis라고 한다.
- 속성과 class 이름이 똑같아도 상관없다.
- 메인 styles.css에 다른 요소의 css를 import 할 때, 순서를 지키는 것이 정말 중요하다.

## 메인 페이지를 index.html로 정하는 이유

대부분의 웹 서버가 디폴트로 index.html을 찾아보도록 설정되어 있기 때문

## 간략한 태그 요약

- <canvas></canvas>
  - canvas는 html5의 요소, 안에 있는 픽셀들을 다룸
  - css에서 width와 height를 줌
  - javascript에서도 이용됨
