# JavaScript

## 1.JavaScript 란?

동적(Interactivity)인 웹사이트를 만들기 위해 필요한 프로그래밍 언어이다.

JAVASCRIPT TYPES

---

1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. Symbol (new in ECMAScript 6)
7. Object

## JAVASCRIPT COMPARISONS

# !==

> =
> <=
>
> <

## JAVASCRIPT VARIABLES

var

let (new in ECMAScript 6)
const (new in ECMAScript 6)

## JAVASCRIPT CONDITIONALS

if
else
else if

<!-- ternary operator -->
<!-- switch -->

## JAVASCRIPT LOGICAL OPERATORS

&&
||
!

## JAVASCRIPT FUNCTIONS

var a = function name() {}
function name() {}
return

() => (new in ECMAScript 6)

## JAVASCRIPT DATA STRUCTURES

Array
Object

## JAVASCRIPT LOOPING

for
while
do
forEach (new in ECMAScript 5)

## JAVASCRIPT KEYWORDS

break
case
catch
class
const
continue
debugger
default
delete
do
else
export
extends
finally
for
function
if
import
in
instanceof
new
return
super
switch
this
throw
try
typeof
var
void
while
with
yield

## variables

const는 변하지 않는값을 만들때, let은 변하는 값을 만들때 var은 절대 쓰지 않기.

const와 let은 block scope고 var은 function scope임

즉 block안에 있는 것을 밖에서 접근 안됨. 안에서 밖은 가능

## functions

arrow function은 this랑 scope관련해서 사용하지 않기. 적용안됨

this랑 scope는 function(){}사용하기

## 속성들

clientX,Y는 윈도우 전체의 범위내에서 마우스 위치값

offset은 내가 적용하고자 하는 내에서의 마우스 위치값

내가 적용하고자 하는 크기가 윈도우만 하다면 client나 offset은 차이가 없을 거임

- mousedown

  - 클릭했을때 발생하는 event

- const ctx = canvas.getContext("2d);
  - canvas의 context, 이 안에서 픽셀들을 다룸
  - ctx.strokeStyle = "#2c2c2c";
    - ctx.strokeStyle은 그릴 선들이 모두 value의 색을 갖는다.
  - ctx.lineWidth = 2.5;
    - ctx.lineWidth은 그 선의 너비가 value의 px값이다..
  - ctx.beginPath()
    - path는 선
  - ctx.moveTo(x,y)
    - 마우스의 xy 좌표로 path를 옮김
  - ctx.lineTo()
    - path의 이전 위치부터 지금 위치까지 선을 만듦.
  - ctx.stroke()
    - 획을 긋음.

## Dom

- 웹 브라우저에는 'document object'를 표시하기 위해 무엇을 표시할지 지정하는 'documnet' property를 가지고 있는 'window object'가 있으며, 'document object'는 HTML과 CSS를 읽은 다음 JavaScript 엔진(구글 크롬에서는 V-8 엔진)과 같은 것으로 한 줄씩 JavaScript를 읽습니다. 그리고 무엇이든 변경해야 하는 경우 JavaScript는 문서 객체와 대화하고 HTML 및 CSS를 수정할 수 있습니다.
- 앞에 아무것도 없이 메소드 써서 실행되면 window object를 쓴거임 (ex. alert()는 사실 window.alert()에서 window가 생략 된 거임.)

- 변수
  - 변수를 선언하면 데이터를 담을 수 잇는 공간이 할당이 되고 변수명이 할당된 공간을 가리킨다. 숫자나 string, boolean null undefined같은 경우에는 데이터 단위가 작기 때문에 메모리에 들어오지만 object 같은 경우에는 objcet가 따로 할당이 어딘가에 되어있고 이 object를 가리키고 있는 reference가 메모리에 들어가 있다. 변수를 다른 변수에 할당하거나 전달할때 변수 안에 들어있는 값이 복사되어서 가는데 object같은 경우에는 reference가 복사되어서 전달된다. object를 통해 무언가를 변경할때 reference를 변경하는 것은 안되지만 object가 가리키는 데이터는 업데이트 될 수 있다.

## join

```js
const fruits = ['apple', 'banana', 'orange'];
const result = fruits.join();
console.log(result);

result

apple,banana,orange

//만약 구분자를 전달한다면?
const fruits = ['apple', 'banana', 'orange'];
const result = fruits.join(|);
console.log(result);

result

apple|banana|orange
우리가 원하는 방식으로 얼마든지 구분자를 전달할 수 있다.
```

## json

```js
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
	//symbol: Symbol('id'),
  jump: function () {
    console.log(`${this.name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'ellie' : value;
});
console.log(json);

result

true
["apple", "banana"]
{"name":"tory", "color":"white", "size":null, "birthDate":"2020-05-
29T13:20:22.670Z"}
{"name":"tory", "color":"white"}
{"name":"ellie", "color":"white", "size":null, "birthDate":"2020-05-
29T13:20:22.670Z"}
// jump 메서드는 json에 포함되지 않았다.
// 또한 자바스크립트에만 존재하는 Symbol API 등은 변환되지 않음.

// 1번과 이어집니다.
console.clear();
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());

result
 {"name":"tory", "color":"white", "size":null, "birthDate":"2020-05-
29T13:20:22.670Z"}
can jump!
Error
Error
 29
 29
// Object가 JSON으로 Serialize할 때 메서드는 데이터가 아님으로
// 포함되지 않기 때문에 마찬가지로 Deserialize해도 jump()메서드가
// 존재하지 않음
// rabbit의 birthDate.getDate는 Date객체의 API를 사용했지만
// obj의 birthDate.getDate는 Deserialize할 때 그저 String으로
// 변환되었기 때문에. getDate를 사용해도 에러가 발생함!
// 하지만 Deserialize를 할 때 콜백함수에서 세부조정을 함으로써
// obj도 getDate()메서드를 사용할 수가 있게 됩니다.
```

## async

```js
function fetchUser() {
    // do network request in 10 seconds...
    return 'ellie';
}

const user = fetchUser();
console.log(user);

// 자바스크립트는 매우 똑똑한 녀석이라 동기적으로 실행이 되는데
예를들어 위의 함수처럼 네트워크 요청을 10초동안 받아오는 함수가
있다면 동기로 처리되기 때문에 fetchUser함수가 끝날때까지 기다려야
하는 현상을 유발시킵니다.
만약, 이 함수 뒤에 브라우저 UI를 나타내야 하는 중요한 코드들이
기다리고 있다면 어떻게 될까요?
브라우저는 fetchUser함수가 끝나길 기다리고 끝날때에서야
비로소 다음 코드들이 실행되는 것을 알 수 있습니다.
하나의 함수 때문에 모든 코드들이 실행될 수 없는 것이죠.
이렇게 요청이 긴 함수들은 반드시 비동기로 빼둬야 합니다.

저번 강의에서 이것을 이렇게 Promise로 해결할 수 있었습니다.
function fetchUser() {
   // do network request in 10 seconds...
   return new Promise((resolve, reject) => {
       // do network request in 10 seconds...
          resolve('ellie');
   })
}

const user = fetchUser();
user.then(console.log);
console.log(user);

이번 강의에서는 async 하나로 가볍게 해결하는 방법을 보여드리겠습니다.
async function fetchUser() {
    // do network request in 10 seconds...
    return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 이렇게 하면 자동적으로 함수 안에 있는 코드 블럭들이 자동적으로
Promise로 변환이 됩니다.
마치 async 한 단어면 귀찮게 Promise 작업을 해줬던 것들이 알아서
생성해주는 것이다.
// ㄹㅇ 갓갓
```

## await

```js
function getBanana() {
    return delay(3000)
    .then(() => '🍌');
}
async function pickFruits() {
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}

// 마치 동기식처럼 코드를 작성해도 비동기식으로 작동하며
코드도 상당히 간결해지는 것을 볼 수 있습니다.
만약 에러가 발생한다면 async await에서는 이렇게 처리할 수 있습니다.

async function pickFruits() {
    try {
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
    } catch {
    } finally {
    }
}
// Promise에서 then은 async await에서 try와 흡사하며
catch와 finally는 async await에서 catch / finally와 똑같다.
하지만 이 코드에도 문제점은 있는데 await로 getApple()함수를
3초 기다리고 그 뒤에 getBanana()함수를 또 3초 기다린다는 것이다.
둘은 별개이므로 사실 서로 기다려줄 필요가 없는데 말이다.
위의 식을 해결하기 위해 아래처럼 코드를 짜볼 수도 있다.

async function pickFruits() {
   const applePromise = getApple();
   const bananaPromise = getBanana();
   const apple = await applePromise;
   const banana = await bananaPromise;
   return `${apple} + ${banana}`;
}
// 이렇게 하면 애플 함수와 바나나함수가 동시에 실행되고
실행되자마자 Promise객체를 생성하기 때문에
마치 병렬적으로 실행되게 됩니다.
그런데 사실 이렇게 동시다발적으로 병렬적으로 실행되는 경우에는
이렇게 사용하지 않고 밑의 코드처럼 아주 좋은 Promise api를
사용하게 됩니다.
```

### useful APIs

```js
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then(
        fruits => fruits.join(' + ')
    );
}
pickAllFruits().then(console.log);

// 이것은 Promise 배열을 전달하게 되면 모든 Promise들을
병렬적으로 다 받을때까지 모아주는 역할을 합니다.

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
// 이것은 Promise 배열 중 가장빨리 실행되는 하나의 Promise만
받습니다.
// 사과를 2초 바나나는 1초일때 바나나가 나옴.
```

## 연산자

```js
// false: 0, -0, '', null, undefined
// true: -1, 'hello', 'false'
let obj = {
  name: 'ellie',
}; //undefined
if (obj) {
  console.log(obj.name);
}

obj && console.log(obj.name);
```

## class

```js
class Counter {
  constructor(runEveryFiveTimes) {
    this.counter = 0;
    this.callback = runEveryFiveTimes;
  }

  increase() {
    this.counter++;
    console.log(this.counter);
    if (this.counter % 5 === 0) {
      this.callback && this.callback(this.counter);
    }
  }
}

function printSomething(num) {
  console.log(`Wow! ${num}`);
}
function alertNum(num) {
  console.log(`Wow! ${num}`);
}

const coolCounter = new Counter(printSomething);
const coolCounter = new Counter(alertNum);
```

## es6

```js
//es6
/**
 * Shorthand property names
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer
 *
 */

{
  const ellie1 = {
    name: 'Ellie',
    age: '18',
  };

  const name = 'Ellie';
  const age = '18';

  // 💩
  const ellie2 = {
    name: name,
    age: age,
  };

  // ✨
  const ellie3 = {
    name,
    age,
  };

  console.log(ellie1, ellie2, ellie3);
  console.clear();
}

/**
 * Destructuring Assignment
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 *
 */
{
  // object
  const student = {
    name: 'Anna',
    level: 1,
  };

  // 💩
  {
    const name = student.name;
    const level = student.level;
    console.log(name, level);
  }

  // ✨
  {
    const { name, level } = student;
    console.log(name, level);

    const { name: studentName, level: studentLevel } = student;
    console.log(studentName, studentLevel);
  }

  // array
  const animals = ['🐶', '😽'];

  // 💩
  {
    const first = animals[0];
    const second = animals[1];
    console.log(first, second);
  }

  // ✨
  {
    const [first, second] = animals;
    console.log(first, second);
  }
  console.clear();
}

/**
 * Spread Syntax
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * 스프레드 연산자는 오브젝트 안에 들어있는 것을 복사해오는 것을 아니라 주소의 참조값만 복사해서 오기 때문에
 * 원래의 오브젝트를 변경하게 되면 전부다 영향을 주기 때문에 이점을 유의 하면서 코딩을 해야함! */
{
  const obj1 = { key: 'key1' };
  const obj2 = { key: 'key2' };
  const array = [obj1, obj2];

  // array copy
  const arrayCopy = [...array];
  console.log(array, arrayCopy);

  const arrayCopy2 = [...array, { key: 'key3' }];
  obj1.key = 'newKey';
  console.log(array, arrayCopy, arrayCopy2);

  // object copy
  const obj3 = { ...obj1 };
  console.log(obj3);

  // array concatenation
  const fruits1 = ['🍑', '🍓'];
  const fruits2 = ['🍌', '🥝'];
  const fruits = [...fruits1, ...fruits2];
  console.log(fruits);

  // object merge
  // 동일한 키를 가지고 있는 오브젝트인 경우에는 제일 마지막에 오는 아이가 최종적으로 값을 덮어 씌움.
  const dog1 = { dog: '🐕' };
  const dog2 = { dog: '🐶' };
  const dog = { ...dog1, ...dog2 };
  console.log(dog);
  console.clear();
}

/**
 * Default parameters
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters
 */
{
  // 💩
  {
    function printMessage(message) {
      if (message == null) {
        message = 'default message';
      }
      console.log(message);
    }

    printMessage('hello');
    printMessage();
  }

  // ✨
  {
    function printMessage(message = 'default message') {
      console.log(message);
    }

    printMessage('hello');
    printMessage();
  }
  console.clear();
}

/**
 * Ternary Operator
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */
{
  const isCat = true;
  // 💩
  {
    let component;
    if (isCat) {
      component = '😸';
    } else {
      component = '🐶';
    }
    console.log(component);
  }

  // ✨
  {
    const component = isCat ? '😸' : '🐶';
    console.log(component);
    console.log(isCat ? '😸' : '🐶');
  }
  console.clear();
}

/**
 * Template Literals
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals
 */
{
  const weather = '🌤';
  const temparature = '16°C';

  // 💩
  console.log(
    'Today weather is ' + weather + ' and temparature is ' + temparature + '.'
  );

  // ✨

  console.log(`Today weather is ${weather} and temparature is ${temparature}.`);
}
```

## es11

```js
es11;
/**
 * 관련 강의 영상: https://youtu.be/36HrZHzPeuY
 */
/**
 * Optional Chaining (ES11)
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining
 */
{
  const person1 = {
    name: 'Ellie',
    job: {
      title: 'S/W Engineer',
      manager: {
        name: 'Bob',
      },
    },
  };
  const person2 = {
    name: 'Bob',
  };

  // 💩💩💩💩💩💩
  {
    function printManager(person) {
      console.log(person.job.manager.name);
    }
    printManager(person1);
    // printManager(person2);
  }

  // 💩💩💩
  {
    function printManager(person) {
      console.log(
        person.job
          ? person.job.manager
            ? person.job.manager.name
            : undefined
          : undefined
      );
    }
    printManager(person1);
    printManager(person2);
  }

  // 💩
  {
    function printManager(person) {
      console.log(person.job && person.job.manager && person.job.manager.name);
    }
    printManager(person1);
    printManager(person2);
  }

  // ✨
  {
    function printManager(person) {
      console.log(person.job?.manager?.name);
    }
    printManager(person1);
    printManager(person2);
  }
  console.clear();
}

/**
 * Nullish Coalescing Operator (ES11)
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
 */
{
  // Logical OR operator
  // false: false, '', 0, null, undefined
  {
    const name = 'Ellie';
    const userName = name || 'Guest';
    console.log(userName);
  }

  {
    const name = null;
    const userName = name || 'Guest';
    console.log(userName);
  }

  // 💩
  {
    const name = '';
    const userName = name || 'Guest';
    console.log(userName); //Guest

    const num = 0;
    const message = num || 'undefined';
    console.log(message); //undefined
  }

  // ✨
  {
    const name = '';
    const userName = name ?? 'Guest';
    console.log(userName); //" "

    const num = 0;
    const message = num ?? 'undefined';
    console.log(message); //0
  }
}
```

## Ternary Operator

```js
// ❌ Bad Code 💩
function getResult(score) {
  let result;
  if (score > 5) {
    result = '👍';
  } else if (score <= 5) {
    result = '👎';
  }
  return result;
}

// ✅ Good Code ✨
function getResult(score) {
  return score > 5 ? '👍' : '👎';
}

console.log(getResult(6));
console.log(getResult(5));
```

## Nullish coalescing operator

```js
// ❌ Bad Code 💩
function printMessage(text) {
  let message = text;
  if (text == null || text == undefined) {
    message = 'Nothing to display 😜';
  }
  console.log(message);
}

// ✅ Good Code ✨
function printMessage(text) {
  const message = text ?? 'Nothing to display 😜';
  console.log(message);
}

// 🚨 Default parameter is only for undefined
// null이나 값이 있는 경우에는 적용 안됨.
function printMessage(text = 'Nothing to display 😜') {
  console.log(text);
}

// 🚨 Logical OR operator ||
function printMessage(text) {
  const message = text || 'Nothing to display 😜';
  console.log(message);
}
// 첫번째 값이 실행해서 결과값이 null이나 undefined이면 뒤에것이 실행된 결과값이 result에 할당됨.
const result = getInitialState() ?? fetchFromServer();
console.log(result);

function getInitialState() {
  return null;
}
function fetchFromServer() {
  return 'Hiya from 💻';
}

printMessage('Hello');
printMessage(null);
printMessage(undefined);
printMessage(0);
printMessage('');
```

## Object Destructuring

```js
const person = {
  name: 'Julia',
  age: 20,
  phone: '0107777777',
};

// ❌ Bad Code 💩
function displayPerson(person) {
  displayAvatar(person.name);
  displayName(person.name);
  displayProfile(person.name, person.age);
}

// ❌ Bad Code 💩
function displayPerson(person) {
  const name = person.name;
  const age = person.age;
  displayAvatar(name);
  displayName(name);
  displayProfile(name, age);
}

// ✅ Good Code ✨
function displayPerson(person) {
  const { name, age } = person;
  displayAvatar(name);
  displayName(name);
  displayProfile(name, age);
}
```

## Spread Syntax - Object

```js
const item = { type: '👔', size: 'M' };
const detail = { price: 20, made: 'Korea', gender: 'M' };

// ❌ Bad Code 💩
item['price'] = detail.price;

// ❌ Bad Code 💩
const newObject = new Object();
newObject['type'] = item.type;
newObject['size'] = item.size;
newObject['price'] = detail.price;
newObject['made'] = detail.made;
newObject['gender'] = detail.gender;
console.log(newObject);

// ❌ Bad Code 💩
const newObject2 = {
  type: item.type,
  size: item.size,
  price: detail.price,
  made: detail.made,
  gender: detail.gender,
};
console.log(newObject);

// ✅ Good Code ✨
const shirt0 = Object.assign(item, detail);
console.log(shirt0);

// ✅ Better! Code ✨
const shirt = { ...item, ...detail, price: 30 };
console.log(shirt);
```

## Spread Syntax - Array

```js
let fruits = ['🍉', '🍊', '🍌'];

// fruits.push('🍓');
fruits = [...fruits, '🍓'];
console.log(fruits);

// fruits.unshift('🍇');
fruits = ['🍇', ...fruits];
console.log(fruits);

const fruits2 = ['🍈', '🍑', '🍍'];

let combined = fruits.concat(fruits2);
combined = [...fruits, '🍒', ...fruits2];
console.log(combined);
```

## Optional Chaining

```js
const bob = {
  name: 'Julia',
  age: 20,
};
const anna = {
  name: 'Julia',
  age: 20,
  job: {
    title: 'Software Engineer',
  },
};

// ❌ Bad Code 💩
function displayJobTitle(person) {
  if (person.job && person.job.title) {
    console.log(person.job.title);
  }
}

// ✅ Good Code ✨
function displayJobTitle(person) {
  if (person.job?.title) {
    console.log(person.job.title);
  }
}

// ✅ Good Code ✨
function displayJobTitle(person) {
  // job이 없거나 또는 job은 있는데 title이 없으면 No Job Yet 🔥이 할당됨.
  const title = person.job?.title ?? 'No Job Yet 🔥';
  console.log(title);
}

displayJobTitle(bob);
displayJobTitle(anna);
```

## Template Literals (Template String)

```js
const person = {
  name: 'Julia',
  score: 4,
};

// ❌ Bad Code 💩
console.log(
  'Hello ' + person.name + ', Your current score is: ' + person.score
);

// ✅ Good Code ✨
console.log(`Hello ${person.name}, Your current score is: ${person.score}`);

// ✅ Good Code ✨
const { name, score } = person;
console.log(`Hello ${name}, Your current score is: ${score}`);

// ✅ Good Code ✨
function greetings(person) {
  const { name, score } = person;
  console.log(`Hello ${name}, Your current score is: ${score}`);
}
```

## Looping

```js
const items = [1, 2, 3, 4, 5, 6];

// ❌ Bad Code 💩
function getAllEvens(items) {
  const result = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i] % 2 === 0) {
      result.push(items[i]);
    }
  }
  return result;
}

function multiplyByFour(items) {
  const result = [];
  for (let i = 0; i < items.length; i++) {
    result.push(items[i] * 4);
  }
  return result;
}

function sumArray(items) {
  let sum = 0;
  for (let i = 0; i < items.length; i++) {
    sum += items[i];
  }
  return sum;
}

const evens = getAllEvens(items);
const multiple = multiplyByFour(evens);
const sum = sumArray(multiple);
console.log(sum);

// ✅ Good Code ✨
const evens = items.filter((num) => num % 2 === 0);
const multiple = evens.map((num) => num * 4);
const sum = multiple.reduce((a, b) => a + b, 0);
console.log(sum);

// ✅ Good Code ✨
const result = items
  .filter((num) => num % 2 === 0)
  .map((num) => num * 4)
  .reduce((a, b) => a + b, 0);
console.log(result);
```

## Promise -> Async/await

```javascript
// 두 가지 이상의 연속된 promise를 사용해야 하는 경우에는 async/await를 이용해서 변경하면 좋음.

// ❌ Bad Code 💩
function displayUser() {
  fetchUser() //
    .then((user) => {
      fetchProfile(user) //
        .then((profile) => {
          updateUI(user, profile);
        });
    });
}

// ✅ Good Code ✨
async function displayUser() {
  const user = await fetchUser();
  const profile = await fetchProfile(user);
  updateUI(user, profile);
}
```
