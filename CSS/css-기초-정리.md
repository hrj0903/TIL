## 목차

1. [CSS란](#css란)
2. [CSS 구조](#css-구조)
3. [Id, Class](#id-class)
4. [css 단위](#css-단위)
5. [pseudo selectors](#pseudo-selectors)
6. [custom properties](#custom-properties)
7. [transitions](#transitions)
8. [Transformations](#transformations)
9. [Animations](#animations)
10. [z-index](#z-index)

# CSS란

> Cascading Style Sheets로 사용자에게 문서를 표시하는 방법을 지정하는 언어

# CSS 구조

```
selector {
 property: value;
}
```

사용 예제

```
// 부모(login-form)로부터 색을 상속받는 것

#login-form a {
color:inherit;
}

// border-top-left-radius처럼 꼭지점 하나를 특정해서 radius를 줄 수 있다.

.message__bubble {
  background-color: white;
  padding: 13px;
  font-size: 18px;
  border-radius: 15px;
  border-top-left-radius: 0px;
  margin-right: 5px;
}

// 시간과 말풍선 위치를 바꾸는 방법
// order는 flex children일 경우만 가능 order 순서대로 앞에 옴. default 값은 0
// flex children에게 사용할 수 있다. 자식 수가 많으면 어렵다.
1)
.message-row--own .message__time {
order: 0;
margin-right: 5px;
}
.message-row--own .message__bubble {
order: 1;
margin-right: 0px;
}

2) 간단하고 쿨한방법
.message-row--own .message__info {
flex-direction: row-reverse;
}
```

# Id, Class

- id
  - 유일한 고유 식별자
    - ex) #아이디{ 속성1:속성값; }
- class - 여러개의 속성들이 공용으로 사용할 수 있는 스타일 형식
  - ex) .클래스명{ 속성:속성값; }

# css 단위

viewport(screen) height. 화면크기에 따라 다름.

100vh = The screen's height
100vw = The screen's width
100% = 100% of the PARENT

# pseudo selectors

> 좀더 세부적으로 엘리먼트를 선택해 주는 것

```
// id나 class를 따로 만드는것보다 이렇게 지정하는게 좋은 방법.
// css에서만 선택을 하면 되니까 html코드를 고칠 필요가 없음.
// first-child, last-child, nth-child(n) 등..

div:first-child {
property: value;
}

// not은 이것을 제외한 나머지에 적용한다는 뜻.

#login-form input:not([type='submit']) {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  transition: border-color, 0.3s ease-in-out;
}
```

### attribute selectors

> tag[attribute = "value"] : 속성의 값이 "value"인 태그를 모두적용
> tag[attribute ~= "value"] : 앞뒤에 공백이 있는 상태에서 "value" 값을 포함한 모든 tag 적용
> tag[attribute *= "value"] : 앞뒤 공백 상관없이 "value" 값을 포함한 모든 tag 적용
> tag: required {}: required 속성을 가지고 있는 tag
> tag: optional {}: required 속성이 없는 tag

### combinators

```
// div밑에 있는 모든 span이 효과.
div span {
text-decoration : underline;
}

// div 바로 밑을 찾게 되므로 바로 밑의 span만 효과
div > span {
text-decoration : underline;
}

p 바로 옆에 있는 span에게 효과
p + span {
color: black;
}

p ~span : p와 같은 부모를 공유하는 모든 span 선택

// 정보: cascading이 위에서 아래로 덮어씌워지지 않을 수 있음. selector끼리는 우선순위대로 동작. 우선순위 계산 사이트 https://specificity.keegan.st/

```

### States

> active

    - 해당 요소를 마우스로 클릭했을 때 효과를 적용

> hover

    - 마우스가 해당 요소 위를 지나갈 때 효과를 적용

> focus

    - 키보드로 선택되었을 때 효과를 적용

> focus-within

    - 부모 요소에게 적용. 자신의 자식 요소 중 하나가 focused되었을 때 효과를 적용

> visited

    -방문한 사이트일 경우에 효과를 적용

### pseudo element

> :: placeholder

    - placeholder의 특성만 바꾸고 싶을 때 사용

> :: selection

    - 클릭해서 드래그 할 때 발생

> :: first-letter

    - 첫 글자에만 적용

> ::first-line

    - 첫 줄에만 작용

# custom properties

:root 라는 엘리먼트에 변수를 추가하는 것
:root은 기본적으로 모든 document의 출발점
여기에 변수이름을 쓰고 document의 root에 저장하는것이다

```
:root {

}
```

변수 작성방법

> --를 써주고 변수이름을 써줘야한다 변수는 -- 2개 그리고 변수이름 빈공간이 있다면 -로 채워야한다.

```
--default-border: 1px solde var(--main-color);
```

그 다음 이 변수를 사용할 곳에

```
p {
background-color: var(--main-color);
}

a {
background-color: var(--main-color);
```

# transitions

> 어떤 상태에서 다른 상태로의 변화를 보여주는 애니메이션

transition은 state에 들어있는 property의 값들을 변화시키는 것.

```
div {
  width: 500px;
  height: 500px;
  color: white;
  //예시
  transition: background-color 0.5s ease-in-out, color 20s cubic-bezier(24, 25, 34, 50);
}
div:hover {
  background-color: yellow;
  color: black;
}

```

주의점

> state가 없는 요소에 작성해야 한다. state에 transition을 주면 마우스를 땔 경우 바로 원상태로 돌아가서 좋지 않음.

ease-in function - 브라우저에게 변화하는 방법을 알려주는 역할 - 확인해 볼수 있는 사이트: https://matthewlein.com/tools/ceaser

> linear - 변화 그래프가 직선
> ease-in - 시작과 끝이 빠름
> ease-out - 시작과 끝이 느림
> ease-in-out - 시작이 빠르고 끝이 느림
> cubic-bezier(0, 0, 0, 0); 으로 직접 설정할수도 있다.

# Transformations

> 한 요소를 transform(변형)시킬 수 있다.
> transformation은 다른 요소의 box element를 변형시키지 않는다. box 차원에서 일어나지 않음.
> margin, padding이 적용되지 않는다. 일종의 3D transformation이기 때문이다.
> margin, padding을 위해서 translateX, translateY를 사용하지 않는다.
> 다른 요소의 box를 변형시키지 않고 원하는 요소를 이동시키기 위해 translate를 사용.
> transform과 transition을 조합하면 더 역동적인 애니메이션을 만들 수 있다.

```
img {
border: 10px solid black;
border-radius: 50%
transition: transform 5s ease-in-out;
}

img:hover{
transform: rotateX(360deg);
}
```

# Animations

마우스 안올리고도 자동으로 재생하는 애니메이션을 만들고 싶으면 animation을 사용

애니메이션 만들기

```
@keyframes 애니메이션 이름 {
  from {
  }
  to {
  }
}

```

사용하기

```
태그 {
  animation: 애니메이션이름 재생시간 ease-in옵션 infinite;
}
```

무한으로 반복되게 하려면 옵션 뒤자리에 infinite를 붙여준다.

from to 말고, 1,2,3,4,5...10 혹은 0% 25% 50% 75% 100% 같이 여러 단계로 나뉘어 애니메이션을 만들 수 있다.

```
@keyframes 애니메이션 이름 {
  0% {
  }
  50% {
  }
  100% {
  }
}

//예시

@keyframes hideSplashScreen {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    visibility: hidden;
  }
}

// 애니메이션의 마지막 값을 기억하고 싶다면 forwards라는 단어를 사용해야한다.
→ 마지막 keyframes를 기억한다.( opacity: 0; visibility: hidden;)

#splah-screen {
  background-color: var(--blue);
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 132px;

  animation: hideSplashScreen 0.4s ease-in-out forwards;
  animation-delay: 2s;
}

```

> 주의: 일부 property는 애니매이션이 안되는 경우도 있음.

# z-index

z-index 속성은 위치 지정 요소와, 그 자손 또는 하위 플렉스 아이템의 Z축 순서를 지정합니다. 더 큰 z-index 값을 가진 요소가 작은 값의 요소 위를 덮습니다.

```
// default 값은 auto, 기본값이 0이다 라고 생각하면 됨.
z-index: auto;
z-index: 1;
z-index: 2;
```
