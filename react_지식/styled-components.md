> npm i styled-components

```js
import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Btn = styled.button`
  // as prop은 button styled component인 Btn을 사용할 건데
  // html 부분을 바꿔서 a태그를 전달.
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

const Link = styled(Btn)``;

const Box = styled.div`
//props를 통해 컴포넌트 설정 방법.
  background-color: ${({ bgColor }) => bgColor}};
  width: 100px;
  height: 100px;
`;

// 컴포넌트 확장 방법.
const Circle = styled(Box)`
  border-radius: 50%;
`;

//attrs를 쓰면 모든 Input 컴포넌트에 속성 추가.
const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: tomato;
`;

function App() {
  //props는 컴포넌트에 데이터를 보내는 방법.
  return (
    <Father as="header">
      <Box bgColor="teal" />
      <Circle bgColor="tomato" />
      <Btn>Logi In</Btn>
      <Btn as="a" href="/">
        Logi In
      </Btn>
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default App;
```

### animation

```js
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    border-radius: 100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotateAnimation} 1s linear infinite;
  span {
    font-size: 36px;
    &:hover {
      font-size: 40px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <span>😄</span>
      </Box>
    </Wrapper>
  );
}

export default App;
```

태그명에 의존하고 싶지 않는 경우

```js
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    border-radius: 100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotateAnimation} 1s linear infinite;
  ${Emoji} {
    &:hover {
      font-size: 98px;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>😄</Emoji>
      </Box>
      <Emoji>🔥</Emoji>
    </Wrapper>
  );
}

export default App;
```

# themes

모든 색깔을 하나의 object안에 넣어놓은 것.

Index.js

```js
import { ThemeProvider } from "styled-components";

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};

const lightTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

App.js

```js
import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello</Title>
    </Wrapper>
  );
}

export default App;
```
