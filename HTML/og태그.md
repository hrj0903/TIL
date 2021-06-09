# OG(오픈 그래프)태그

## OG태그란?

> 콘텐츠의 요약내용이 SNS에 게시되는데 최적화된 데이터를 가지고 갈 수 있도록 설정하는 것이다.

## OG태그 사용법

> 이미지의 경우 최소한 600 x 315 픽셀은 되어야 하며, 1200 x 630 픽셀 크기를 권장
> og:image:width와 og:image:height 를 사용하는 것은 이미지의 크기를 웹 크롤러에게 알려주어서, 이미지를 비동기적으로 다운로드하고 처리할 필요 없이 즉시 보여줄 수 있도록 합니다.

기본적으로 웹에 설정해줘야하는 og 메타태그

```html
<meta property="og:type" content="website" />
<meta property="og:url" content="https://example.com/page.html" />
<meta property="og:title" content="Content Title" />
<meta property="og:image" content="https://example.com/image.jpg" />
<meta property="og:description" content="Description Here" />
<meta property="og:site_name" content="Site Name" />
<meta property="og:locale" content="en_US" />
<!-- 다음의 태그는 필수는 아니지만, 포함하는 것을 추천함 -->

<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
```

Naver 블로그, 카카오톡 미리보기 설정

```html
<meta property="og:title" content="콘텐츠 제목" />
<meta property="og:url" content="웹페이지 URL" />
<meta property="og:type" content="웹페이지 타입(blog, website 등)" />
<meta property="og:image" content="표시되는 이미지" />
<meta property="og:title" content="웹사이트 이름" />
<meta property="og:description" content="웹페이지 설명" />
```

트위터 미리보기 설정

```html
<meta name="twitter:card" content="트위터 카드 타입(요약정보, 사진, 비디오)" />
<meta name="twitter:title" content="콘텐츠 제목" />
<meta name="twitter:site" content="@site_account" />
<meta name="twitter:creator" content="@individual_account" />
<meta name="twitter:url" content="https://example.com/page.html" />
<meta
  name="twitter:description"
  content="웹페이지에 대한 설명. 200자 미만이어야 함."
/>
<meta name="twitter:image" content="https://example.com/image.jpg" />
```

모바일 앱 미리보기 설정
모바일 앱이 존재하는 경우 앱으로 연결 시 노출

<--iOS-->

```html
<meta property="al:ios:url" content=" ios 앱 URL" />
<meta property="al:ios:app_store_id" content="ios 앱스토어 ID" />
<meta property="al:ios:app_name" content="ios 앱 이름" />
```

<--Android-->

```html
<meta property="al:android:url" content="안드로이드 앱 URL" />
<meta property="al:android:app_name" content="안드로이드 앱 이름" />
<meta property="al:android:package" content="안드로이드 패키지 이름" />
<meta property="al:web:url" content="안드로이드 앱 URL" />
```

출처

https://velog.io/@byeol4001/Meta-Tag-OG%EC%98%A4%ED%94%88%EA%B7%B8%EB%9E%98%ED%94%84-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0

https://www.next-t.co.kr/blog/%EA%B2%80%EC%83%89%EC%97%94%EC%A7%84%EC%B5%9C%EC%A0%81%ED%99%94-SEO-%ED%85%8C%ED%81%AC%EB%8B%88%EC%BB%ACSEO-%EC%98%A4%ED%94%88%EA%B7%B8%EB%9E%98%ED%94%84-OpenGraph-metaogtag-%ED%8A%B8%EC%9C%84%ED%84%B0%EC%B9%B4%EB%93%9C-TwitterCards

https://github.com/kesuskim/Front-End-Checklist
