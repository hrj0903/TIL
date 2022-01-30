# css hack

css hack(가운데 정렬 하는 방법.)

- 레시피 같이 어디든 쓸 수 있다. 이상하지만 작동한다.
- 상위 박스 : justify-content: center; -중앙으로 몰림
- 내부 박스 범위 : width: 33%; -왼쪽으로 몰려서 범위 벌어짐, 왼쪽 위치할 박스는 왼쪽에 붙어서 정렬됨
- 중앙에 위치할 박스 : display: flex; justify-content: center; -중앙에 위치할 박스만 중앙에 위치함
- 오른쪽에 정렬할 박스 : _display_: flex; _justify-content_: flex-end; _align-items_: center; -오른쪽에 붙어서 정렬됨

> 예제

```css
.status-bar {
  display: flex;
  justify-content: center;
}

.status-bar__column {
  width: 33%;
}

.status-bar__column:first-child span {
  margin-right: 5px;
}

.status-bar__column:nth-child(2) {
  display: flex;
  justify-content: center;
}

.status-bar__column:last-child {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
```
