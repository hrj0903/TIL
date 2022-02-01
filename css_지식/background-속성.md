|속성명|속성 값|설명
|---|---|---|
|background-image|url(이미지 경로)|배경 이미지 삽입
|background-repeat|repeat, repeat-x, repeat-y, no-repeat|배경 이미지 반복
|background-position|가로축, 세로축|배경 이미지의 위치 지정
|background-size|contain, cover|배경 이미지의 크기 지정
|background-attachment|fixed|배경 이미지가 움직이지 않게 고정

```css
// 배경 이미지 가로축 중앙 세로축 중앙에 배치
section{
   background-position: center center;
}

// 배경 이미지 px로 배치
section{
    background-position: 20px 60px;
}

// 배경 이미지 백분율로 배치 
section{
    background-position: 100% 50%;
}

```

```css
// 이미지의 비율을 유지하면서 영역 안을 전체 이미지로 가득 채움.(배경 이미지가 안짤리는 대신 여백이 있을 수 있음)
section{
    background-size: contain;
}

// 실무에서는 배경 이미지가 조금 잘리더라도 영역을 가득 채워서 배치하는 cover를 더 많이 사용.
section{
    background-size: cover;
}
```

```css
// 배경 이미지가 물리적으로 어떤 태그에 종속되어 있든지 상관없이 무조건 웹 브라우저를 기준으로 고정
section{
	background-attachment: fixed;
}
```