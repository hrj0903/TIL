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
