## 목차

1. [positioning](#positioning)
2. [display](#display)
3. [box model](#box-model)
4. [flexbox](#flexbox)
5. [grid](#grid)

# positioning

> - static(default)
> - fixed

    	- 스크롤 해도 제자리에 위치
    	- top, left, right, bottom 중 하나만 수정해도 서로 다른 레이어에 위치하게되어 원래 위치 무시. 가장 위에 위치.

> - relative

    - 처음 생성된 위치를 기준점으로, top bottom left right으로 위치를 조금씩 수정

> - absolute

    - 가장 가까운 relative 부모를 기준으로 이동, 없으면 body로 이동

# display

### Block & Inline & Inline-Block

> - Block: 옆에 다른 요소가 올 수 없음.

      - div, p
      - 높이와 너비 가짐.


> - inline: 옆에 다른 요소가 올 수 있음.

      - span, a, img
      - 높이와 너비를 가질 수 없음.
      - margin의 위 아래는 가질 수 없음.


> - inline-block : inline 문제를 해결, But 반응형 디자인을 지원하지 않음 -> flex 사용

> - flex: inline-block 문제점 해결.
>   Flex 아이템들은 가로 방향으로 배치되고, 자신이 가진 내용물의 width 만큼만 차지하게 . 마치 inline 요소들 처럼요. height는 컨테이너의 높이만큼 늘어납니다.
>   flex-direction : column;을 하면 content-height만큼 세로가 줄어들고 가로는 늘어나게 됨.

> block -> inline, inline -> block 으로 속성 바꾸는거 가능(display 속성 사용)

### none 과 hidden 의 차이점

> display: none;
> 정상적인 흐름으로부터 요소를 제거하고 그 공간을 차지하고 있는 나머지 콘텐츠를 붕괴시킨다.

> visibility: hidden;
> 정상적인 흐름으로부터 요소를 제거하지 않고 뷰에서 콘테이너의 콘텐츠를 단지 숨긴다. 붕괴도 없고 페이지에 어떠한 영향도 주지 않는다.

출처: https://discuss.codecademy.com/t/when-is-it-better-to-use-visibility-hidden/365560/12

# box model

## margin, padding, border

> - margin: box border의 바깥쪽

> - padding: box border의 안쪽

> - border: box의 경계

> 주의: collapsing margin: 어떤 두 개 이상 블록 요소의 상하 마진이 겹칠 때 어느 한 쪽의 값만 적용

> - box-sizing: border-box;

    	- css에게 "내가 padding을 줘도 신경쓰지마. 내 box 사이즈를 늘리지 말아줘"라고 말하는 격이다.
    	- css는 200픽셀의 박스에 50픽셀의 패딩을 주면, css는 기존 박스의 가로를 유지하기 위해 50만큼 박스를 늘림.

# flexbox

> - 자식 element에 적지 말기

    - 자식 element를 움직이려면 부모 element를 flex container로 만들어야 함.

> - justify-content

    - main axis에서 움직임

> - align-items

    - cross axis에서 움직임
    	- align-items:center를 사용할 때는 flex container(부모)의 높이를 확인하자. 부모 컨테이너의 높이가 자식 item과 높이가 동일하여 위치를 변환시킬 수 없을 경우 부모 컨테이너의 높이를 조절한다.

> - flex-direction

    - row(default), column

> - flex-wrap

    - nowrap(default), wrap
    - width를 초기 사이즈로만 여기고 같은 줄에 있게 하기 위해 width를 바꿀 수 있음.

### align-self and order

부모의 display가 flex여야 함.
자식에게 지정하는 property

부모가 아닌 자식 아이템의 위치(position)를 직접 변경하고 싶을 때는 align-self와 order를 사용한다. 안될경우 이때 유의할 점은 부모의 높이(heigth)를 확인하여 조절한다.

align-self는 cross axis 방향에 있는 item의 위치를 바꾸게 된다. 자식의 위치를 개별로 바꾸고 싶을 때 사용

```css
.child:nth-child(2) {
  align-self: center;
}
```

order의 경우 단어 그대로 순서를 바꾼다. 이때 기본 값(default)는 0이라 order를 1로 줄 경우 order를 주지 않은 것보다 뒤에 위치하게 된다. HTML을 통해 순서를 바꾸기 힘들 때 사용하면 좋다.

```css
.child:nth-child(2) {
  order: 1;
}
```

<img src="https://images.velog.io/images/hrj0903/post/096b2f66-c9e7-43d4-a827-ae2bc933f73b/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-11-13%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%203.13.58.png" width="400">

### wrap, nowrap, reverse, align-content

1. flex-wrap

- flexbox는 width보다도, '같은 줄'에 있도록 하는 것을 우선시함
  -> flex-wrap: wrap; (child의 사이즈를 유지하라고 하는 것 화면 줄이면 사이즈 유지를 위해 다른 줄로 이동)
  -> nowrap; (default값, child를 모두 같은 줄에 정렬함, 이때 width가 줄어들 수 있음)

2. reverse

- flex-direction: row-reverse;
- column-reverse;
- flex-wrap: wrap-reverse;

\*\* wrap으로 정렬 시 (여러 줄으로, 각 item의 width를 유지하면서)
각 줄(기본: row) 간의 간격이 생기는데, 이것을 'align-content'라는 property로 조절 가능
<img src="https://images.velog.io/images/hrj0903/post/8da70938-77ca-4d0c-832a-775cec52a841/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-11-13%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%204.51.35.png" width="300">

3. align-content (line을 변경, line은 cross-axis에 있는 상태)

- row에서는 세로 column에서는 가로.
- justify-content와 비슷하지만 'line'에 관한 것 (각 block이 여러 행에 걸쳐 나올 때, 행간 공백을 얼마나 둘 건지?)
- align-content: flex-start; - align-content: space-around;
  <img src="https://images.velog.io/images/hrj0903/post/e01e05ef-1fe3-4286-b31c-5780c9f4d4d3/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-11-13%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%204.54.41.png" width="300">

### flex-grow, flex-shrink

부모의 display가 flex여야함.
자식에게 지정하는 property

1. flex-shrink:
   flexbox가 쥐어짤 때,flex-wrap: nowrap일 때 자식의 크기가 줄어듬.

- flex-shrink: 2; (default값이 1)
- 특정 element 더 줄어들게 할 수 있음.

2. flex-grow:
   shrink와 반대, 화면이 늘어남에 따라 box 크기가 늘어남.

- flex-grow: 1; (default값이 0)
- 남아있는 공간을 가져옴 (space를 없애고)
- 즉, 남아있는 공간, 여백이 있을 때만 grow 가능
- 화면이 커질 때, element도 함께 커지길 원할 때 사용.
- flex-grow property가 0인 상태거나, 따로 정의되지 않았다면, 화면이 커져도 각 element 크기가 커지지 않음(여백만 늘어나게 됨)

```css
.child:nth-child(2) {
  background: #000;
  flex-grow: 2;
}
```

### flex-basis

부모의 display가 flex여야함.
자식에게 지정하는 property.

shrink, grow 되기전에 element에게 초기 size를 주는 것.

flex-basis는 main aixs에서 작용.
row면 main axis가 가로, 그러므로 flex-basis는 width가 됨.
column이면 main axis가 세로, 그러므로 flex-bais는 height가 됨

but 자주 사용 X, basis 정의 안할시 shrink, grow 없을시 width와 같음.

```css
.child {
  flex-basis: 30%;
  background: peru;
  color: white;
  font-size: 50px;
```

# grid

부모 컨테이너에서 선언.

```css
.father {
  display: grid;
  grid-template-columns: 250px 250px 250px;
  grid-template-rows: 100px 50px 300px;
  column-gap: 5px;
  row-gap: 10px;
}
```

- grid-template-columns: (각 column의 크기와 개수);
- column-gap: (column 사이 공간 크기);
- row-gap: (row 사이 공간 크기);
- gap: 10px; ▷ column과 row 사이에 10px의 공간을 줘라.
- grid-template-rows: (각 row의 크기와 개수);

### grid template areas

```css
.grid {
  display: grid;
  grid-template-columns: auto 200px;
  grid-template-rows: 100px repeat(2, 200px) 100px;
  grid-template-areas:
    'header header header header'
    'content content content nav'
    'content content content nav'
    'footer footer footer footer';
}

.header {
  background-color: #2ecc71;
  grid-area: header;
}

.content {
  background-color: #3498db;
  grid-area: content;
}

.nav {
  background-color: #8e44ad;
  grid-area: nav;
}

.footer {
  background-color: #f39c12;
  grid-area: footer;
}
```

- grid-template-columns와 grid-template-rows에서 repeat([개수], [크기])으로 더 쉽게 할 수 있다. auto를 사용하면 최대한 크게 만들어준다.

- grid-template-areas

- grid-area
  - grid-area에 있는 이름과 grid-template-areas에 있는 이름이 같아야 한다.
    -class 이름은 상관없다.

```css
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.grid {
  display: grid;
  gap: 5px;
  height: 50vh;

  grid-template:
    'header header header header' 1fr
    'content content content nav' 2fr
    'footer footer footer footer' 1fr / 1fr 1fr 1fr 1fr;
}

.header {
  background-color: #2ecc71;
  grid-area: header;
}
.content {
  background-color: #3498db;
  grid-area: content;
}
.nav {
  background-color: #8e44ad;
  grid-area: nav;
}
.footer {
  background-color: #f39c12;
  grid-area: footer;
}
```

fr-fraction(부분)
fraction은 grid에서 사용 가능한 공간을 뜻한다.
fr값 비율로 공간을 나눈다.

● grid-template:
"(이름)" (row높이)
"(이름)" (row높이)
"(이름)" (row높이)/ (각 column의 넓이);

grid-templete 에서는 repeat이 적용되지 않는다.

### row and column

```css
.grid {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: repeat(4, 100px);
}

.header {
  background-color: #2ecc71;
  grid-column-start: 1;
  grid-column-end: 5;
}

.content {
  background-color: #3498db;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 4;
}

.nav {
  background-color: #8e44ad;
  grid-row-start: 2;
  grid-row-end: 4;
}

.footer {
  background-color: #f39c12;
  grid-column-start: 1;
  grid-column-end: 5;
}
```

<img src="https://images.velog.io/images/hrj0903/post/8d0f2be4-f8c4-4bec-b345-c20b313ffeac/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-11-14%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2012.28.46.png" width="400px">

- grid-column-start, grid-column-end
  -> column이 아닌 줄(line)의 시작과 끝을 정한다.
- grid-row-start, grid-row-end

### shortcut

```css
.grid {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: repeat(4, 100px);
}

.header {
  background-color: #2ecc71;
  grid-column: span 4;
}

.content {
  background-color: #3498db;
  grid-column: 1 / -2;
  grid-row: span 2;
}

.nav {
  background-color: #8e44ad;
  grid-row: span 2;
}

.footer {
  background-color: #f39c12;
  grid-column: span 4;
}
```

- grid-column: (start) / (end);
- grid-row: (start) / (end);

- -1, -2, -3, ··· -> 끝에서부터 line 세기
- (start) / span (cell 수) -> 시작점과 끝점을 적는걸 대신한다.

### line naming

잘 안씀

```css
.grid {
  display: grid;
  gap: 10px;
  grid-template-columns: [first-line] 100px [second-line] 100px [third-line] 100px [fourth-line] 100px [fifth-line];
  grid-template-rows: repeat(4, [sexy-line] 100px);
}

.header {
  background-color: #2ecc71;
  grid-column: span 4;
}

.content {
  background-color: #3498db;
  grid-column: first-line / fourth-line;
  grid-row: sexy-line 2 / sexy-line 4;
}

.nav {
  background-color: #8e44ad;
  grid-row: span 2;
}

.footer {
  background-color: #f39c12;
  grid-column: span 4;
}
```

### place items

```css
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.grid {
  display: grid;
  gap: 5px;
  height: 50vh;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  place-items: stretch center;
}

.header {
  background-color: #2ecc71;
}

.content {
  background-color: #3498db;
}

.nav {
  background-color: #8e44ad;
}

.footer {
  background-color: #f39c12;
}
```

- place-items: align-items justify-items;

stretch : grid를 늘려서 grid를 채우게 한다.
start : item을 cell 시작에 배치한다.
center : item을 cell 중앙에 배치한다.
end : item을 cell 끝에 배치한다.

### place content

```css
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.grid {
  background: grey;
  color: white;
  display: grid;
  gap: 5px;
  height: 250vh;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: repeat(4, 100px);
  place-content: end center;
}

.header {
  background-color: #2ecc71;
}

.content {
  background-color: #3498db;
}

.nav {
  background-color: #8e44ad;
}

.footer {
  background-color: #f39c12;
}
```

- justify-content : start; /_(그리드가 놓이는 위치를 뜻하며 기본은 start)_/ 수평적으로 grid를 움직임
- align-content는 수직적으로 grid를 움직이는 것
- 컨테이너의 height가 그리드를 담을 만큼 충분해야한다.(높이 지정)
- Place-items는 grid 안에 있는 아이템이 이동하는 것이며, place-content는 grid가 이동하는 것이다.

### auto columns and rows

- place-self: align-self justify-self;
  ▷ child에만 적용돠는 property이다.

- grid-auto-rows: (크기);
  ▷ 만들어놓은 row보다 더 많은 content가 있으면, 자동으로 row를 만들어라.

- grid-auto-flow: (방향); (기본값: row)
  ▷ flex-direction과 비슷하다.
  ▷ row가 끝날 때 새로운 row를 만들지, 새로운 column을 만들지 결정한다.

- grid-auto-columns: (크기);
  ▷ grid-auto-flow: column;일때 작동한다.

### minmax

```css
.grid {
  color: white;
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(5, minmax(100px, 1fr));
  grid-template-rows: repeat(4, 100px);
  grid-auto-columns: 100px;
}
```

- Grid-template-columns: repeat(10, minmax(100px, 1fr)); //최대 1fr로 하되 최소 100px너비

### auto-fill, auto-fit

```css
.grid:first-child {
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
}

.grid:last-child {
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
}
```

- Grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); //창 너비가 늘어나면 빈 column들로 row를 채움
- Grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); // 창 너비가 늘어나면 element를 늘려서 row에 맞게 해줌

### min-content, max-content

```css
.grid {
  color: white;
  display: grid;
  gap: 5px;
  grid-template-columns: min-content max-content;
  grid-auto-rows: 100px;
  margin-bottom: 30px;
}
```

- max-content
  ▷ content의 크기만큼 cell의 크기를 늘린다.

- min-content
  ▷ content의 크기를 최대한 줄여 cell의 크기를 줄인다.

※ 어떻게 content가 보여야 하는지 디자인하는 것이다.

```css
.grid {
  color: white;
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(20px, max-content));
  grid-auto-rows: 100px;
  margin-bottom: 30px;
}
```

※ repeat(), minmax와 결합하여 반응형 디자인을 만들 수 있다.
