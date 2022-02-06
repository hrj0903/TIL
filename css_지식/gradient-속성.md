> gradient 속성을 이용하면 한쪽은 짙게 하고 다른 쪽으로 갈수록 차츰 엷어지는 그레이디언트로 지정 가능

|속성명|속성값|설명|
|------|---|---|
|gradient|linear-gradient|직선 모양의 그레이디언트를 적용|
||radial-gradient|타원 모양의 그레이디언트를 적용|

```css
div:nth-of-type(1) { 
background: linear-gradient(to bottom, blue, red); /* 아래쪽 방향으로 */ 
} 
div:nth-of-type(2) { 
background: linear-gradient(to top, blue, red); /* 위쪽 방향으로 */ 
} 
div:nth-of-type(3) { 
background: linear-gradient(to right, blue, red); /* 오른쪽 방향으로 */ 
} 
div:nth-of-type(4) { 
background: linear-gradient(to left, blue, red); /* 왼쪽 방향으로 */ 
} 
div:nth-of-type(5) { 
background: linear-gradient(45deg, blue, red); /* 45도 방향 */ 
}
```