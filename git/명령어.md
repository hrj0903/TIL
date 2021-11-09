### 명령어

- 커밋 이력 보기

  > git log

- stage 영역에 추가

  > git add (파일명)
  > git add . - 현재 폴더에 있는 모든 파일

- git 커밋하기

  > git commit -m "(메시지)"

- 메시지 변경없이 커밋하고 싶을때

  > 깜박하고 추가안한것을 추가하고 마지막 커밋의 이름으로 커밋 하고 싶을때 사용.
  > git commit --amend --no-edit

- 커밋된 디렉토리를 지우고 싶을때

  > `-r` 옵션은 디렉토리 삭제할때 사용.
  > 캐시되면 지울수 없으므로 `--cached` 사용.
  > git rm -r images/ --cached

- 포크된 프로젝트 클론하기

  > git clone (url) (저장할 폴더 이름)

- 원격 저장소 추가

  > git remote add (이름설정) (url)

- 원격저장소 연결 삭제:

  > git remote remove origin-name

- github에 올리기

  > git push origin main

- branch 생성

  > git branch 브랜치명

- branch 삭제

  > git branch -d

- branch 병합

  > git merge 브랜치명

- 과거 커밋으로 가기

  > HEAD를 그 커밋으로 옮긴 상태
  > git checkout (커밋 별명)

- main 브랜치로 돌아오기

  > git checkout main

- 과거 커밋에서 그 파일들을 유지하면서 새 브랜치를 만들고 싶으면:

  > git checkout -b 브랜치명

- 과거 커밋으로 가서 동시에 branch를 생성하려면:

  > git checkout 커밋별명 -b 브랜치명

- 현재 커밋 삭제(하드 리셋)
- HEAD: 파일이 있는 위치 / 파일이 있는 시점
- 대부분의 경우 하드 리셋 이나 복합 리셋을 사용.

  > 하드 리셋은 커밋이랑 작업한 파일 변경 사항을 삭제
  > git reset --hard HEAD^
  > --hard :삭제하다
  > HEAD^ : 헤드로부터 한 커밋 이전
  > HEAD^^ : 헤드로부터 두 커밋
  > HEAD^^^ : 헤드로부터 세 커밋

- 복합 리셋

  > 커밋만 삭제하고 변경사항들을 unstage로 옮기는거.
  > 아직 완룐되지 않은 파일을 커밋했을 경우 복합리셋으로 사용하는게 좋음 .
  > 변경한 파일의 내용은 그대로 둠.
  > git reset HEAD^

- 소프트 리셋

  > 이전 커밋에서 변경한 내역을 stage 영역에 옮김.
  > unstage 영역에 작업중인 파일이 있을 때 섞이지 않고 싶을 때 사용.
  > git reset HEAD^ --soft

- 강제로 푸시하기
  > 삭제된 깃이 깃허브에 올라가 있어서 없앨때 사용.
  > git push origin main --force

### 내 깃허브 저장소의 최종상태와 컴퓨터의 최종 상태가 다를경우

1. git pull origin main -> conflict 발생 -> conflict 해결 -> merge된거 git add . -> commit 하기 -> git push origin main

2. 컴퓨터에서만 실수로 커밋을 했다면 github의 코드를 병합할 필요가 없음.
   대부분의 경우에는 git push origin main --force로 그냥 해결. 왜냐하면 사람들은 새로 고친 코드를 받기 원하기 때문. 1번째 껄로 할 경우 코드가 병합되서 중복된 커밋이 생김.
