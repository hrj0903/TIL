position: fixed;

1. 고정된 위치의 요소는 뷰포트 또는 브라우저 창 자체에 대해 표시.
   페이지를 스크롤해도 항상 같은 위치에 유지.

2. 페이지의 다른 요소의 흐름에 영향을 미치지 않습니다.
   즉, 특정 공간을 차지하지 않습니다.(예: position: absolute)

3. 다른 컨테이너 내부에 정의되어 있는 경우(relative/absolute가 있거나 없는 div),
   여전히 해당 컨테이너가 아닌 브라우저를 기준으로 배치.(position: absolute와 다름)

position: sticky;

1. 고정 위치가 있는 요소는 사용자의 스크롤 위치를 기준으로 배치.
   특정 오프셋 이상으로 스크롤되기 전까지는 position: relative로, 넘으면 position:fixed로 바뀜, 뒤로 스크롤하면 이전(relative) 위치로 돌아갑니다.

2. 페이지의 다른 요소의 흐름에 영향.
   즉, 페이지의 특정 공간을 차지합니다(예: position: relative).

3. 일부 컨테이너 내부에 정의된 경우 해당 컨테이너를 기준으로 배치.
   컨테이너에 오버플로(스크롤)가 있으면 스크롤 오프셋에 따라 position:fixed로 바뀝니다.

출처: https://stackoverflow.com/questions/19501919/difference-between-positionsticky-and-positionfixed
