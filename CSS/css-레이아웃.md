## 목차

1. [Positioning](#positioning)
2. [Display](#display)
3. [Box Model](#box-model)
4. [Flexbox](#flexbox)

# Positioning

> - static(default)
> - fixed

    - 스크롤 해도 제자리에 위치
    - top, left, right, bottom 중 하나만 수정해도 서로 다른 레이어에 위치하게되어 원래 위치 무시. 가장 위에 위치.

> - relative

    - 처음 생성된 위치를 기준점으로, top bottom left right으로 위치를 조금씩 수정

> - absolute

    - 가장 가까운 relative 부모를 기준으로 이동, 없으면 body로 이동

# Display

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

# Box Model

## margin, padding, border

> - margin: box border의 바깥쪽

> - padding: box border의 안쪽

> - border: box의 경계

> 주의: collapsing margin: 어떤 두 개 이상 블록 요소의 상하 마진이 겹칠 때 어느 한 쪽의 값만 적용

> - box-sizing: border-box;

    	- css에게 "내가 padding을 줘도 신경쓰지마. 내 box 사이즈를 늘리지 말아줘"라고 말하는 격이다.
    	- css는 200픽셀의 박스에 50픽셀의 패딩을 주면, css는 기존 박스의 가로를 유지하기 위해 50만큼 박스를 늘림.

# Flexbox

> - 자식 element에 적지 말기

    - 자식 element를 움직이려면 부모 element를 flex container로 만들어야 함.

> - justify-content

    - main axis에서 움직임

> - align-items

    - cross axis에서 움직임

> - flex-direction

    - row(default), column

> - flex-wrap

    - nowrap(default), wrap
    - width를 초기 사이즈로만 여기고 같은 줄에 있게 하기 위해 width를 바꿀 수 있음.
