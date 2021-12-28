> npx create-react-app my-app --template typescript

또는 이미 진행해 놓은 프로젝트에 타입스크립트를 설치하고 싶으면

> npm install --save typescript @types/node @types/react @types/react-dom @types/jest

js 파일들을 tsx로 바꾸고
타입스크립트로 변환해서 적용이 안되는 패키지들은 마우스를 위에 올려놓으면 @types/로 시작하는 걸 볼 수 있음.
definitely typed 커뮤니티를 이용해서 해결할 수 있음.
어떤 라이브러리나 패키지를 사용하고 싶은데 definitely typed이 없다면 https://github.com/DefinitelyTyped/DefinitelyTyped에 코드를 추가해서 만들면 됨.

typescript를 사용하는 이유는 코드가 실행되기 '전'에 오류를 확인하기 위해서.

# typing the props

typescript에게 react component를 설명
어떻게 type하는가.

component를 type 한다는건 component에게 type을 준다는 뜻.
component에게 type을 준다는건 typescript에게 뭐가 뭔지 설명해 주는 거.

typescript에게 설명하게 되면 prop에 오타를 냈을 때 protection(보호)를 받게 됨.

```tsx
import styled from "styled-components";

// interface는 object가 어떤식으로 보일 지 설명해주는 거.
// typescript에게 bgcolor는 string이 되어야 한다고 설명.
interface CircleProps {
  bgColor: string;
}

//typescript에게 props -> styled-component 전달방법을 설명
const Container = styled.div<CircleProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
`;

function Circle({ bgColor }: CircleProps) {
  //컴포넌트가 props를 받지 않기 때문에
  //styled-component에게도 보내야 함.
  return <Container bgColor={bgColor} />;
}

export default Circle;
```

optional props

App.tsx

```js
import Circle from "./Circle";

function App() {
  return (
    <div>
      <Circle borderColor="yellow" bgColor="teal" />
      <Circle text="i'm here" bgColor="tomato" />
    </div>
  );
}

export default App;
```

Circle.tsx

```tsx
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

//typescript에게 props -> styled-component 전달방법을 설명
const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
  border: 1px solid ${(props) => props.borderColor};
`;

// interface는 object가 어떤식으로 보일 지 설명해주는 거.
// typescript에게 bgcolor는 string이 되어야 한다고 설명.
// 객체형태로 주는게 좋음.
interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  //typescript가 봤을때 container도 div이기 때문에
  //typescript에게 bgColor에 대해 설명해줘야함.
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
}

export default Circle;
```

# state

```tsx
//<>로 설정하거나, 초기값을 설정해 놓으면 타입스크립트가 초기값의 타입으로 판단함.
const [value, setValue] = useState<number | string>(1);
// <>설정 안하고 초기값도 설정안하면 타입스크립트는 에러를 뜸.
const [amount, setAmount] = useState();
```

# form

```tsx
import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  // react.formevent 이런것은 구글링을 통해서 아는거.  Reactjs 내에서의 타입 시스템
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    //reactjs typescript 사람들은 currentTarget 사용을 택함.
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="username"
        />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default App;
```

# themes

다크모드 라이트모드 할 수있게 해줌.
타입스크립트와 styled-component를 연결시키려면

1.npm install @types/styled-components

2.선언파일을 만들어야함.(d.ts가 선언파일)
theme을 사용할 거니까 파일을 확장할 필요성이 있음.

styled.d.ts 파일은 이전에 설치해 놓은 파일을 override(덮어쓰기)할 거임.

```ts
// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    // 여기서부터 내가 만들고 싶은 변수와 타입 설정.
    textColor: string;
    bgColor: string;
    btnColor: string;
  }
}
```

우리 theme에 사용할 타입들을 포함시키고 싶으니까 만드는 거임.

3.theme.ts 만들기.
여기서 테마를 만듬.
이때 이 테마는 styled.d.ts 파일 속 속성들하고 같아야함.

```ts
import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  bgColor: "white",
  textColor: "black",
  btnColor: "tomato",
};

export const darkTheme: DefaultTheme = {
  bgColor: "black",
  textColor: "white",
  btnColor: "teal",
};
```

index.tsx

```tsx
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { lightTheme } from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

App.tsx

```tsx
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <Container>
      <H1>protected</H1>
    </Container>
  );
}

export default App;
```
