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

tag에 부가적인 정보 추가하는 것을 attributes(속성)이라고 한다.(href, target, src 등)

self closing tag는 content가 없는 태그로 모든 정보는 attribute를 통해 제공된다.

!DOCTYPE html은 이 문서에 html 코드가 포함되어 있음을 브라우저에 알려준다.

html 문서는 head(문서의 구성(환경설정)), body(문서의 내용)로 구성된다.

meta tag는 문서에 추가 정보를 제공한다.

label 태그는 input태그와 함께 작동한다.(label이 input을 activate)
label 태그에 for=“”, input 태그에 id=“”에 똑같은 벨류가 들어가야 한다.
id 속성은 body 안에 어떤 태그에든 넣을 수 있는 attribute임
element당 하나의 id만을 가질 수 있다. (고유 식별자이며, 중복된 id를 사용하면 작동되지 않는다.)
css가 태그를 지정하여 꾸미기 위해서 id가 필요하기 때문이다.

div는 box와 같은 기능을 한다. box는 양옆에 올 수 없다.(상하로 컨텐츠가 배열된다.)
div와 같은 기능을 하지만 의미가 있는 semantic tag로 작성해주는 것이 좋다.
semantic tag (예시.header,main,footer...)
이 태그를 읽는 것만으로 어떤내용을 담고 있는지 이해하기 좋기 때문에 가능한 semantic tag로 작성하는 것이 좋다.

```html
<body>
  <header>
    <h1>The Times</h1>
  </header>
  <main>
    <adress>hello!</adress>
  </main>
  <footer>&copy; 2020 N.C</footer>
</body>
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
<!DOCTYPE html>
<!--lang 속성은 검색엔진들에게 우리사이트에서 사용되는 언어를 알려준다.-->
<html lang="ko">
  <head>
    <!--link는 브라우저탭에 아이콘을 넣는다.-->
    <link rel="icon" href="#" />
    <title>routine</title>
    <!--charset는 브라우저가 어떤 글자를 표시할 지 알려준다.-->
    <meta charset="utf-8" />
    <!--description는 검색시 페이지 제목 아래 페이지 내용의 요약이 부분에 반영되는 항목이다.-->
    <meta name="description" content="routine description" />
  </head>
  <body>
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
    <form>
      <label for="website">website</label>
      <input id="website" required type="date" />
      <input type="submit" value="Create Account" />
    </form>
  </body>
</html>
```
