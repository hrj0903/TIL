# scss

- css preprocessor로 scss, sass가 있음.
- preprocessor로는 stylus랑 less가 있음.
- sass는 다른 syntax를 가지고 있어서 scss가 등장.
- scss는 sass를 위한 공식적인 syntax로 릴리즈됨.
- scss를 compile해서 일반 css처럼 만듬.
- css를 프로그래밍 언어처럼 만듬.
- scss는 compile 하거나 build하는 단계가 필요.
- 업계 표준이 되어 가고 있음.

### variables

파일명: \_로 작성된 scss 파일들은 css로 변하지 않았으면 하는 것들.
변수명: 앞에 $표시 작성.

### nesting

```scss
@import '_variables';

h2 {
  color: $bg;
}

.box {
  margin-top: 20px;
  &:hover {
    background-color: green;
  }
  h2 {
    color: blue;
    &:hover {
      color: red;
    }
  }
  button {
    color: red;
  }
}
```

### mixins

scss functionality를 재사용할 수 있게 해줌.
if-else같이 상황에 따라 다르게 코딩을 하고 싶을 때 사용.

\_mixins 파일

```scss
@mixin link($color) {
  text-decoration: none;
  display: block;
  color: $color;
}
```

styles 파일

```scss
@import '_variables';
@import '_mixins';

a {
  margin-bottom: 10px;
  &:nth-child(odd) {
    @include link(red);
  }
  &:nth-child(even) {
    @include link(blue);
  }
}
```

### extends

같은 코드를 중복하고 싶지 않을 때 사용.(코드를 재사용하고 싶을때)

%를 씀.

extends 파일

```scss
%button {
  font-family: inherit;
  border-radius: 7px;
  font-size: 12px;
  text-transform: uppercase;
  padding: 5px 10px;
  background-color: peru;
  color: white;
  font-weight: 500;
}
```

styles 파일

```scss
@import '_buttons';

a {
  @extend %button;
  text-decoration: none;
}

button {
  @extend %button;
  border: none;
}
```

### responsive mixins

responsive mixins 파일

```scss
$minIphone: 500px;
$maxIphone: 690px;
$minTablet: $minIphone + 1;
$maxTablet: 1120px;

@mixin responsive($device) {
  @if $device == 'iphone' {
    @media screen and (min-width: $minIphone) and (max-width: $maxIphone) {
      @content;
    }
  } @else if $device == 'tablet' {
    @media screen and (min-width: $minTablet) and (max-width: $maxTablet) {
      @content;
    }
  } @else if $device == 'iphone-l' {
    @media screen and (max-width: $minIphone) and (max-width: $maxIphone) and (orientation: landscape) {
      @content;
    }
  } @else if $device == 'ipad-l' {
    @media screen and (min-width: $minTablet) and (max-width: $maxTablet) and (orientation: landscape) {
      @content;
    }
  }
}
```

styles 파일

```scss
@import '_mixins';
h1 {
  color: red;
  @include responsive('iphone') {
    color: yellow;
  }
  @include responsive('iphone-l') {
    font-size: 60px;
  }
  @include responsive('tablet') {
    color: green;
  }
}
```
