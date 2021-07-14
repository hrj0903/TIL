# Git and Github

## Git 의 필요성

- 코드가 긴 경우에는 파일의 히스토리를 알고 있어야 한다. 처음에 뭘 작성했는지, 나중에 뭘 추가했는지, 변경 내역 등을 알고 있어야 하는데 이럴 때 git을 사용하면 것이 도움이 된다.

- 내가 원하는 파일의 변경된 내용을 확인 할 수 있다.

- git은 programming에서 주로 사용되는 도구다.

- text 파일에서만 사용 할 수 있는 것이 아니라, excel, image, song 등등 다른 파일 형식에도 사용 할 수 있다.(git 시스템은 파일을 binary format(0101010 같은 것)으로 인식하기 때문)

- git은 어떤 파일이든 수정된 내역을 알 수 있다.

- code에 주로 사용되는 도구이지만, 다른 형식의 파일도 변경 내역을 추적하는데 사용할 수 있다. ⇒ 한마디로, git은 파일을 계속 추적(Tracking)하는 것이다.

- git은 파일의 변경내역을 게속해서 추적해주는 version control system

## Github의 필요성

- 코딩 작업을 열심히 해놨는데, 컴퓨터를 잃어버리고 파일도 날아가고 변경한 기록도 사라지는 경우를 대비해서 github을 사용한다.

- github에는 기본적으로 변경내역을 업로드 한다.

- git은 계속 추적하면서 변경내역을 관리해주고, github에는 그 변경내역을 업로드한다.

- github은 파일 내역과 파일들을 올려주는 공간

## repository and commit

- repository는 자신의 코드가 살고 있는 곳

  - 코드의 변경내역과 히스토리를 갖고 있는 폴더
  - repository 이름은 소문자 여야하며 공백이 없어야합니다.
    - 예)kakao-talk
  - 개인 저장소를 만드는 것은 권장하지 않습니다.
  - 공개 (오픈 소스) 추천

- commit은 기본적으로 시점(pointing time)
  - 예) "이제 이 파일의 버전을 저장하고 싶어" 라고 말하는 시점
  - 커밋이 255개가 있다면, 프로젝트를 255개의 버전으로 저장했다는 의미

## Github desktop

- 초보자가 Github를 사용하는 가장 좋은 방법
- 문서 또는 데스크탑 바탕화면에 저장소를 만드는 걸 추천(쉽게 찾기 하기 위해서)
- Github desktop을 이용해서 github에 commit 하는 방법
  - vsc에서 코드를 작성/수정한다.
  - 코드를 저장한다.
  - github desktop에서 파일을 commit 한다(commit 제목 작성 꼭 해줄 것)
  - github desktop에서 파일을 push 한다.
  - github를 새로고침해 확인해준다.
- .DS_Store는 맥os나 윈도우에서 만든 보이지 않는 임시파일이다.
- .gitignore는 무시하고 싶은 파일 이름을 기록하는 파일이다.

## Main branch 와 다른 branch

브랜치의 중심은 main branch

Git을 사용하면 main 브랜치와 함께 커밋에서 다른 프로젝트를 시작할 수 있습니다.

대부분의 사람들은 main 브랜치에 안정적인 코드를 가지고 있으며 실험을 하거나 새로운 기능을 만들고 싶을 때 다른 브랜치를 엽니다.

분기를 만들고 병합 할 수 있습니다.

변경 사항을 적용하지 않으면 이 모든 것이 작동하지 않습니다.

## Github 정적 페이지 만들기

특별한 이름을 가진 특별한 브랜치가 있다면, GitHub는 무료로 정적 호스팅을 제공합니다

-> "gh-pages" -정적 호스팅 : 정적 웹 사이트를 무료로 업로드 할 수 있으며 GitHub에서 무료로 URL을 제공합니다.

-정적 웹 사이트 : html, css 및 js (프런트 엔드 포함) 만있는 웹 사이트-백엔드에서는 작동하지 않습니다.

private repository인 경우 공개 웹 사이트를 가질 수 없습니다.

gh-pages 브랜치를 게시 한 후 저장소로 이동하여 환경> 배포보기에서 github-pages를 확인합니다.

URL : username.github.io/theNameOfYourRepository

### 페이지 업데이트 하기!

1. main branch로 이동
2. main branch에서 변경사항을 commit하고 push
3. gh-pages branch로 가서 update from main 클릭하고 push.

## git workflow

- 때때로 당신은 다른 개발자나 팀 동료가 수행한 업데이트를 놓치지 않도록 main을 가져오고 분기에 main을 병합하려고 합니다.
  당신의 feature이 끝나면 git push 및 해당 pull 요청을 수행하여 pull 요청을 만듭니다.

  의견을 추가하면 사람들이 파일 변경 사항을 검토하고 몇 가지 변경 사항을 원하면 다시 git add, git commit 마지막으로 변경 사항을 적용한 다음 pull 요청을 병합할 수 있습니다. 팀.
  이제 새로운 메인이 있으므로 팀의 다른 모든 사람들도 git pull을 수행해야 합니다.

  (every once in a while you want to pull main and merge main into your branch to make sure you're not missing out on any updates that other developers or team mates have done.

  once you're done with your feature you make a pull request by doing git push and that pull request.

  You'll add coments and people will review your file changes and if they want you make a few changes then you can do again git add, git commit finally make your changes and then you can merge pull request and once that's done then everybody else on the team.

  there's now a new main so everybody else on the team should do git pull as well.)

- Q: 뭔가를 커밋한 후와 PR을 만들기 전에 매번 병합을 수행하는 것이 좋습니까?
  - A: 팀의 워크플로에 따라 다릅니다. 일반적으로 변경 사항이 안정적이고 프로덕션 준비가 된 경우에만 변경 사항을 병합합니다. 기능을 개발하는 한 개발 프로세스가 완료되고 모든 것이 테스트될 때까지 별도의 분기에 보관합니다. 마스터 브랜치에 항상 PR을 할 필요는 없습니다. 사용 가능한 모든 지점에 PR을 할 수 있습니다.
