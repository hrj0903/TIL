# HTML

## 0.웹개발에 앞서 알아야 할 기본내용

웹사이트는 텍스트 파일로 이루어져 있다.

텍스트 파일을 브라우저에게 전달하면 브라우저가 코드를 이해해서 웹사이트를 구현한다.

따라서 어떤 텍스트를 어디에 작성해야 하는지를 알면 웹사이트를 제작할 수 있다.

파일과 폴더명은 항상 소문자로 작성한다.(오류를 줄이기 위해서)

브라우저는 html 파일에 에러가 있다고 알려주지 않는다.

브라우저는 html 문법을 따르지 않아도 언제나 사용자에게 content를 보여준다.

## 1.HTML 이란?

브라우저에게 웹사이트에서 보여줄 content가 ‘무엇’인지 알려주는 마크업 언어이다.

예를 들어 title은 무엇인지, link는 무엇인지, 이미지는 무엇인지를 html을 통해 브라우저에게 알려주는 것이다.

## 2.Tag의 역할

tag 사이에 있는 content가 무엇인지를 브라우저에게 알려주는 것이다.

tag에 부가적인 정보 추가하는 것을 attributes(속성)이라고 한다.(href, target, src 등)

self closing tag는 content가 없는 태그로 모든 정보는 attribute를 통해 제공된다.

```html
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
```
