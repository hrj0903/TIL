> 이미지 리터칭 효과

|속성명|속성값|설명|
|------|---|---|
|filter|blur|요소의 흐림 효과를 조절|
||brightness|요소의 밝기를 조절|
||contrast|요소의 명도 대비를 조절|
||grayscale|요소의 흑백을 조절|
||hue-rotate|요소의 색상 단계를 조절|
||invert|요소의 색상 반전 단계를 조절|
||saturate|요소의 채도를 조절|
||sepia|요소의 갈색 톤 단계를 조절|

```css
// 값 이 커질 수록 blur 효과 가 커짐 

div img:nth-of-type(2) { 
    filter: blur(3px); 
} 

/ * 1 보다 작아 지면 어두워 지고 커지면 밝아짐 * / 

div img:nth-of-type(2) { 
    filter: brightnes(0.5); 
} 

/ * 100 % 에서 작아 지면 명암 대비 효과 감소 , 커지면 증가 * / 
div img : nth - of - type ( 4 ) { filter : contrast ( 150 % ) ; } 

/ * 100 % 에 가까울 수록 흑백 으로 전환 * / 
div img : nth - of - type ( 5 ) { filter : grayscale ( 100 % ) ; } 

/ * Odeg 는 원래 이미지 색상 . 0 ~ 360deg 까지 색상 변경 가능 * / 
div img : nth - of - type ( 6 ) { filter : hue - rotate ( 180deg ) ; } 

/ * 100 % 에 가까울 수록 색 이 반대로 변환 됨 * / 
div img : nth - of - type ( 7 ) { filter : invert ( 100 % ) ; } 

/ * 0 에 가까울 수록 채도 가 낮아짐 * / 
div img : nth - of - type ( 8 ) { filter : saturate ( 0.5 ) ; } 

/ * 100 % 에 가까울 수록 갈색 톤 으로 변경됨 * / 
div img : nth - of - type ( 9 ) { filter : sepia ( 100 % ) ; }

```