# document object

document는 브라우저가 불러온 웹페이지를 나타냄.

document로부터 모든 것이 시작하며 자바스크립트로 html element를 가져와서 변경할 수 있음.

document를 log로 객체를 출력하면 html 태그 내용이 나오고
![](https://images.velog.io/images/hrj0903/post/c242029e-9029-4c91-b2cf-1fc06c001dbd/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-11-10%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%208.18.49.png)

dir로 출력하면 객체의 속성을 계층구조로 출력한다.
![](https://images.velog.io/images/hrj0903/post/d4e04e0f-07ce-4d50-bced-76c0f29d6f8c/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-11-10%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%208.17.03.png)

# searching for elements

- getElementsByClassName() : 많은 element를 가져올때 씀(array를 반환)
- getElementsByTagName() : 태그이름으로 가져옴.(array를 반환)
- getElementById(): 하나의 값 가져옴.
- querySelector : element를 CSS selector방식으로 검색할 수 있음 (ex. h1:first-child)
  단 하나의 element를 return해줌
  => hello란 class 내부에 있는 h1을 가지고 올 수 있다(id도 가능함)
  => 첫번째 element만 가져옴
- 조건에 맞는 세개 다 가져오고 싶으면 querySelectorAll
  => 세개의 h1이 들어있는 array를 가져다 줌
- querySelector("#hello); 와 getElementById("hello"); 는 같은 일을 하는 것임
  하지만 후자는 하위요소 가져오는 것을 못함.

# event

- element의 내부를 보고 싶으면 console.dir()
  기본적으로 object로 표시한 element를 보여줌(전부 js object임)
  그 element 중 앞에 on이 붙은 것들은 event임

- title.addEventListener("click") : 누군가가 title을 click하는 것을 listen할 거임 → 무언가를 해줘야함

document의 body,head,title 이런것들은 중요하기 때문에
document.body.style~의 명령이 허용되지만, div같은것들은 호출이 안됨

나머지 element들은 querySelector나 getElementById로 불러와야됨

```js
title.onclick = handleMouseEnter;
title.addEventListener(“mouseenter” , handleMouseEnter);

위에 두 코드는 동일하나 addEventListener를 선호하는 이유는
removeEventListener을 통해서 event listener을 제거할수있기 때문이다.
```

```js
const title = document.querySelector(".hello:first-child h1");

function handleTitleClick(){
title.style.color = "blue";
}

function handleMouseEnter(){
title.innerText = "mouse is here!";
}

function handleMouseLeave(){
title.innerText = "mouse is gone!";
}

function handleWindowResize(){
document.body.style.backgroundColor = “tomato”;
}
function handleWindowCopy(){
alert(“copier”);
}

title.addEventListener("click",handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener(“resize”, handleWindowResize);
window.addEventListener(“copy”, handleWindowCopy);
```

### css in javascript

```js
function handleTitleClick() {
  //현재 색상을 변수로 지정
  const currentColor = h1.style.color;
  //변화 후!! 색상을 변수로 지정
  let newColor;
  if (currentColor === 'blue') {
    newColor = 'tomato';
  } else {
    newColor = 'blue';
  }
  //조건문을 통한 newColor를 색상으로 지정
  h1.style.color = newColor;
}
```

css파일에

```css
h1 {
  color: cornflowerblue;
}
.clicked {
  color: tomato;
}
```

를 적고
js파일에

```js
const h1 = document.querySelector('div.hello:first-child h1');
function handleTitleClick() {
  if (h1.className === 'clicked') {
    h1.className = '';
  } else {
    h1.className = 'clicked';
  }
}
h1.addEventListener('click', handleTitleClick);
```

적음.
여기서 JS는 HTML을 변경할거고, CSS는 HTML을 바라보고 style을 변경한다.
이게 js에서 직접 style을 변경하는 것 보다 좋음.

```js
function handleTitleClick() {
  //raw value를 그대로 입력하다 오타가 발생할 수 있으므로 변수로 지정
  const clickedClass = 'clicked';
  if (h1.className === clickedClass) {
    h1.className = '';
  } else {
    h1.className = clickedClass;
  }
}
```

이전의 class들은 상관없이 className은 모든걸 교체.

classList를 사용하면 class를 목록으로 작업할 수 있음.
classList에는 function들이 있는데,
constains라는 function은 우리가 명시한 class가 HTML element의 class에 포함되어 있는지 체크.
remove라는 function은 명시한 class name을 제거.
add라는 function은 명시한 class name을 추가.

```js
function handleTitleClick() {
  const clickedClass = 'clicked';
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
}
```

더 좋은 function이 존재한다. toggle function은 class name이 존재하는지 확인.
class name이 존재하면 toggle은 class name을 제거하고, class name이 존재하지 않으면 toggle은 class name을 추가한다.

```js
function handleTitleClick() {
  h1.classList.toggle('clicked');
}
```

toggle은 켜고끄는 버튼같은거.

```js
function onLoginSubmit(event) {
  // 브라우저가 기본 동작을 실행하지 못하게 막기
  // event object는 preventDefault함수를 기본적으로 갖고 있음
  event.preventDefault();
  console.log(event);
}

// submit 이벤트가 발생한다면, onLoginSubmit함수를 실행시킨다는 의미
// JS는 onLoginSubmit함수 호출시 인자를 담아서 호출함. 해당 인자는 event object를 담은 정보들
loginForm.addEventListener('submit', onLoginSubmit);
```

form을 submit하면 브라우저는 기본적으로 페이지를 새로고침 하도록 되어있다. << 우리가 원하는 것이 아님

### innerText가 차이 innerHTML

둘 다 작동하지만 브라우저에서 실행될 HTML을 포함하려면 innerHTML을 사용해야 합니다.

### localstorage에 저장하는법

localStorage.setItem("key이름", "값"); // 저장
localStorage.getItem("KEY이름"); // 얻기
