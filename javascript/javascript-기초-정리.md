# data type

1. Number

1) 정수(Integer) // 1, 2, 3, 4 ...
2) 소수(Float) // 1.555, 2.545345 ...

- Number타입은 서로 연산기호를 이용하여 계산할 수 있다.

2. String

- 처음부터 끝까지 문자(Text)로 구성되어 있다는 의미

# variable

let 재선언 금지, 재할당 가능
const 재선언 금지, 재할당 금지
var 재선언 가능, 재할당 가능

대부분 const, 가끔 let 쓰기, 절대 var 쓰지않기.

# boolean

true,
false,
undefined = 변수는 선언했지만 값을 할당하지는 않음
null = 변수에 null(값이 없다)이 할당된다 즉, 정의됨

# array

데이터를 나열하기 위한 데이터 구조.
하나의 변수 안에 데이터의 list를 가지는 것.
항상 [ ] 안에 콤마(,)로 데이터들을 나열.
변수도 쓰일 수 있고, boolean, text, 숫자 등 데이터 정렬 가능

# object

property를 가진 데이터를 저장해주며, { } 를 사용한다.

property를 불러오는 방법은 2가지가 있다.

```js
console.log(player.name); // tomato
console.log(player['name']); // tomato
```

또한 property의 값을 바꾸는 것은 가능하지만 선언된 object를 바꾸는 것은 불가능하다.

```js
const player = {
  name: tomato,
  color: red,
  food: true,
};

console.log(player);
player.color = 'blue';
console.log(player.color);
// blue
```

그리고 property를 추가 할 수도 있다.

```js
player.koreanName = '토마토';

// {name: "tomato", color: "blue", food: true, koreaName: "토마토"}
```

# function

반복해서 사용할 수 있는 코드 조각, 어떤 코드를 캡슐화 해서 실행을 여러번 할 수 있게 해준다.

선언

```
function 함수명() {
실행코드
}

함수명() //실행
```

argument

- 함수에게 보내는 인자.

parameter

- 인자가 들어오는 변수 이름.

예시

```js
function sayHello(nameOfPerson, age) {
  console.log('Hello my name is ' + nameOfPerson + " and I'm " + age);
}
sayHello('nico', 10);
sayHello('dal', 23);

// 객체안에 함수 만들어 보려면(player.name();이런식으로 만들어 보려면)
const player = {
  name: 'nico',
  sayHello: function (otherPersonsName) {
    console.log('Hello ' + otherPersonsName + ' nice to meet you!');
  },
};
player.sayHello('lynn');
```

return

- 함수의 값을 꺼내와서 변수에 할당할 수 있음.

# conditional

prompt는 사용자에게 창을 띄울 수 있도록 하는 역활
typeof 는 변수의 type을 보는 방법이다.
ParseInt() 는 string을 number 로 변환하는 역할
NaN = not a number

const age = prompt(“How old are you?”);
console.log(typeof “15”, typeof paseInt(“15”));
= string, number
number 은 크기 비교가 가능하다. string 은 불가능

const age= parseInt(prompt (“How old are you?”));

숫자를 입력하면 parseInt가 숫자로 인식하게 바꾼다.
string을 쓰면 NaN이 뜬다.

isNaN 은 무언가가 NaN인지 판별하는 방법

```js
const age= parseInt(prompt (“How old are you?”));
console.log(isNaN(age));
```

숫자입력하면 false
글자입력하면 ture

```js
//condition=true -> if 실행
if (condition) {
  //condition=false -> else 실행
} else {
}
```

condition은 boolean으로 판별가능해야 한다, (true , false)

```js
if(isNaN(age)){
console.log(“please wirte a number”);
} else{
console.log(“Thank you for writing your age”);
}
```

# 연산자

true || true === true
false || true === true
true || false === true
false || false === false

true && true === true
false && true === false
true && false === false
false && false === false
