# HTML

## 웹개발에 앞서 알아야 할 기본내용

웹사이트는 텍스트 파일로 이루어져 있다.

텍스트 파일을 브라우저에게 전달하면 브라우저가 코드를 이해해서 웹사이트를 구현한다.

따라서 어떤 텍스트를 어디에 작성해야 하는지를 알면 웹사이트를 제작할 수 있다.

파일과 폴더명은 항상 소문자로 작성한다.(오류를 줄이기 위해서)

브라우저는 html 파일에 에러가 있다고 알려주지 않는다.

브라우저는 html 문법을 따르지 않아도 언제나 사용자에게 content를 보여준다.

## HTML 이란

브라우저에게 웹사이트에서 보여줄 content가 ‘무엇’인지 알려주는 마크업 언어이다.

예를 들어 title은 무엇인지, link는 무엇인지, 이미지는 무엇인지를 html을 통해 브라우저에게 알려주는 것이다.

## HTML Document
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
  	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

```html
<!DOCTYPE html>
- html이 올바르게 작동하려면 doctype을 포함해야 합니다.

<html lang="en"></html> 
- <html>요소는 루트 요소라고도 하는 페이지의 모든 콘텐츠를 래핑. 
  lang페이지의 언어를 선언하는 속성을 항상 포함

<head></head>
- 사용자에게 표시하는 콘텐츠는 아님.

<meta http-equiv="X-UA-Compatible" content="IE=edge">
- 사용자가 익스플로러를 이용한다면 최신 버전인 엣지로 화면을 보여 주는 기능을 합니다.

<meta charset="UTF-8" />
- 첫 번째 메타 요소는 문자 집합을 문자 집합을 UTF-8로 설정하는 데 사용되며, 여기에는 대부분의 문자가 포함

<meta name="viewport" content="width=device-width, initial-scale=1.0" />
- 두 번째 메타 요소는 브라우저 뷰포트를 지정합니다. 모바일에 최적화된 사이트를 위한 설정

<title>Document</title> 
- 페이지의 제목을 설정합니다.

<body></body>
- 페이지의 모든 콘텐츠가 포함
```

## Tag 란

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

# html data

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Data Attributes</title>
    <!-- https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes -->
    <style>
      div {
        width: 200px;
        height: 200px;
        background-color: tomato;
        margin-bottom: 50px;
      }

      div[data-display-name='dream'] {
        background-color: beige;
      }
    </style>
  </head>
  <body>
    <div data-index="1" data-display-name="dream"></div>
    <div data-index="2" data-display-name="coding"></div>
    <span data-index="1" data-display-name="dream">sdfsdf</span>
    <script>
      const dream = document.querySelector('div[data-display-name="dream"]');
      console.log(dream.dataset);
      console.log(dream.dataset.displayName);
      console.log(dream.dataset.index);
    </script>
  </body>
</html>
```

## 시맨틱 태그가 중요한 이유 3가지

1.SEO

2.Accessibility

3.For us, Maintainability

## article vs section

article 같은 경우에는 블로그에서 post 하나, 신문기사 하나, article은 독립적으로 다른 페이지에 보여줬을때 전혀 문제가 없을 때 사용 즉 그 말은 main안에 있는 다른 내용들과 전혀 상관없이 독립적으로 그 고유한 정보를 나타낼때 사용.

## i vs em

em은 내가 정말 강조하고 싶은 이탤릭체가 있을때, i는 책의 제목이나 인용구나 그냥 시각적으로만 이탤릭체을 하고 싶을 때

## b vs strong

b는 시각적으로만 볼드체 strong은 중요한 볼드체

## dl

dl은 어떤 한 단어에 대해서 설명이 묶여 있을때 그 목록을 나타낼때 사용.

dt에는 원하는 단어, dd는 해당하는 설명을 넣으면 됨.

## img vs background-image

img가 웹페이지 안에서 하나의 중요한 요소로 자리를 잡고 있을때 이런 경우에는 img태그를 이용해서 html 문서 안에서 자체적으로 포함이 되도록 만드는 것이 좋음.

img 태그가 문서의 내용과는 별개로 스타일링 목적을 위해서 배경이미지로 사용이 되는 경우 문서의 일부분이 아닌 경우라면 css 백그라운드 이미지를 이용해서 표기하는 것이 좋음. 이미지가 없어도 문서를 읽고 이해하는데 지장이 없기 때문에 백그라운드 이미지를 사용하는 것이 적절함.

## button vs a

리뷰, 추천, 로그인, 가입, 퀴즈 풀기 등등 사용자의 어떤 특정한 액션을 위해서 이 버튼을 클릭했을때 어떤 특정한 행동이 발생하는 경우에는 버튼을 사용하는 것이 적절.

사용자가 클릭을 했을때 다른 페이지로 또는 페이지에서 어딘가로 이동하는 경우에는 링크가 걸려져 있는 경우에는 a 태그를 사용하는 것이 적절.

## table vs css

정말 많은 데이터의 양을 행과 열을 이용해서 정말 테이블이 필요해서 그런 데이터를 나타내는 경우에는 테이블 태그를 이용하면 되지만

단순히 아이템을 테이블 형식으로 그리드 형식으로 표현하기 위해서 테이블 태그를 사용하는 것은 좋지않음

예전에는 css가 많이 발달되어 있지 않아서 테이블 태그를 이용해서 스타일링을 했지만 요즘에는 테이블을 사용하기 보다는 css flex나 grid를 이용해서 좀 더 유연하고 아름답게 스타일링 할 수 있음.

문서 안에서 자체적으로 의미있는 태그가 필요한 건지 아니면 내가 css로 스타일링을 위해서 점검해 볼 필요가 있음.
