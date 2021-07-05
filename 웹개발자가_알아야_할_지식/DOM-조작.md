# DOM MANIPULATION

- What is the DOM?

  - 웹페이지의 내용을 트리와 같은 표현으로, html 문서에서 배열되는 방식에 따라 서로 다른 관계를 갖는 “노드" 트리입니다.

- How do you target the nodes you want to work with?

  - element.querySelector(selector)
  - element.querySelectorAll(selectors)

- How do you create an element in the DOM?

  - document.createElement(selector)

- How do you add an element to the DOM?

  - parentNode.appendChild(childNode)
  - parentNode.insertBefore(newNode,referenceNode)

- How do you remove an element from the DOM?

  - parentNode.removeChild(child)

- How can you alter an element in the DOM?

  - element에 대한 reference가 있는 경우, 해당 reference를 사용하여 요소의 고유한 속성을 변경할 수 있다. ex) const div = document.createElement(“div”);
  - Adding inline: ex) div.style.backgroundColor = “blue”;
  - Editing Attributes ex) div.setAttribute(“id”, “theDiv”);
  - Working with classes ex) div.classList.toggle(“new”);
  - Adding text content ex) div.textContent = “hello world“;
  - Adding HTML content ex) div.innerHTML = `<p>`hi`</p>`

- When adding text to a DOM element, should you use textContent or innerHTML? Why?

  - Use textContent
  - Because innerHTML을 잘못 사용할 경우 보안 위험을 초래할 수 있으므로 드물게 사용해야 한다.

- Where should you include your Javascript tag in your HTML file when working with DOM nodes?

  - body의 맨 밑에 놔두어야 한다.
  - 왜냐하면 그래야 DOM 노드가 구문 분석되고 생성된후 실행해야 자바스크립트 코드 전부가 작동되기 때문이다.

- How do “events” and “listeners” work?

  - 이벤트는 마우스 클릭 또는 키누르기와 같이 웹 페이지에서 발생하는 작업이며 javascript를 사용하여 웹페이지가 이러한 이벤트를 listen하고 반응하도록 할 수 있다.

- What are three ways to use events in your code?

  - 1. html요소에 직접 functions attributes을 첨부
    - <button onclick = “alert(“hi”)>Click Me</button>
  - 2. javascript의 DOM 개체에 “on*event*”속성을 설정
    - Btn.onclick = () => alert(“hi”);
  - 3. javascript의 노드에 이벤트 리스너를 연결
    - btn.addEventListener(“click”, () => {alert(“hi”);});

- Why are event listeners the preferred way to handle events?

  - 관심사 분리를 유지하고, 필요한 경우 여러 이벤트 리스너도 허용

- What are the benefits of using named functions in your listeners?

  - 코드를 상당히 정리할 수 있으며 function이 이 기능이 여러 장소에서 수행하고자 하는 것이라면 매우 좋은 방법이기 때문이다.

- How do you attach listeners to groups of nodes?

  - querySelectorAll(“selector”)

- What is the difference between the return values of querySelector and querySelectorAll?

  - querySelector은 해당되는 selector의 첫번째만 가져오고 querySelectorAll은 해당되는 selector를 모두 가져온다.

- What does a “nodelist” contain?

  - selector에 일치되는 모든 reference가 포함되어 있음.

- Explain the difference between “capture” and “bubbling”.
  - capture와 bubbling은 html DOM API에서 이벤트가 다른 요소 내부의 요소에서 발생하고 그 두 요소가 해당 이벤트에 등록
  - bubbling은 가장 안쪽의 element가 캡쳐되고 다음 외부 element 요소로 전파
  - capture은 가장 바깥쪽 요소에 의해 캡쳐되고 다음 내부 요소로 전파.
