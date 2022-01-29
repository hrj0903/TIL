CSS를 사용할 때 @charset "utf-8"을 많이 보셨을 것입니다.

이 선언은 html 문서 내의 <style></style>태그 내에는 적용이 되지 않습니다.

유니코드 문자열(비 아스키코드)이 있을 때 utf-8로 명시적으로 선언해주어 utf-8 인코딩 셋을 지정합니다.

```css
[data-set="dragon"]::before
{
    content: ' ↗';
    display:block;
    width:10px;
}
```

예를 들어 위와 같은 유니코드 문자열이 있을 경우에 Windows-1252로 인코딩이 읽히기도 합니다.

html 문서 내에 <link rel='stylesheet' charset='utf-8'>와 같이 작성하는 것은 obsolete(사용하지 않는 상태로 됨) 되었습니다.

 

작성 규칙은 다음과 같습니다.
```
@charset "UTF-8";       /* 유효 */
@charset 'iso-8859-15'; /* 유효하지않음, double quotation만이 유효합니다.("") */
@charset  "UTF-8";      /* 유효하지않음, 스페이스가 두번 들어감 */
 @charset "UTF-8";      /* 유효하지않음, 앞에 스페이스가 들어감 */
@charset UTF-8;         /* 유효하지않음, quotation이 없어서 css string으로 인식되지 않음 */

```

출처: https://frontdev.tistory.com/entry/CSS-charset-utf-8-을-쓰는-이유 [Front End Develop]