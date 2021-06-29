# INTRODUCTION TO GIT

- What kind of program is Git?
  - 분산형 버전 관리 시스템
- What are the differences between Git and a text editor in terms of what they save and their record keeping?
  - git에 저장하면 파일과 폴더의 차이점이 기록되고 각 저장의 기록을 유지합니다.
- Does Git work at a local or remote level?
  - git은 로컬 컴퓨터에서 관리하는 버전 관리 시스템
- Does GitHub work at a local or remote level?
  - Github는 git repository를 관리 할수 있는 원격 저장소( 클라우드 기반 호스팅 서비스.)
- Why is Git useful for an individual developer?
  - 이전에 수행한 모든 항목을 볼 수 있고 변경 전후를 볼 수 있고 변경사항에 대한 내용을 적을 수 있다.
- Why are Git and GitHub useful for a team of developers?
  - 같은 파일을 여러명이 동시에 작업할 수 있다.
  - 누가 변경했고 언제 변경했고 변경한 이유에 대해서 추적할수 있다.
  - 각자 파일을 변경하고 변경사항을 병합할 수 있다.

## GIT BASICS

- What is the Git command used to get a full copy of an existing Git repository from GitHub?
  - git clone git@github.com:USER-NAME/REPOSITORY-NAME.git
  - git clone https://github.com/user-name/repository-name.git
- What is the Git command used to check the status of your files?
  - git status
- What is the Git command used to track files with Git?
  - git add <파일>
- What is the Git command used to remove tracked files with Git?
  - git reset <파일>
- What is the Git command used to commit files?
  - git commit -m “<커밋 내용>”
- What is the Git command used to view your commit history?
  - git log
- What is the Git command used to upload projects onto GitHub?
  - git push origin main
- Explain the two-stage system that Git uses to save files.

  - git add: 현재 working directory에 있는 모든 또는 일부 변경 내용을 staging area으로 이동
  - git commit: working directory에 있는 변경 내용은 고려하지 않고, staging area에 넘어온 변경 내용을 repository(local repo)로이동

  - staging area 장점
  - 스테이징은 하나의 큰 변경 사항을 여러 커밋으로 분할 하는데 도움을 준다.
  - 스테이징은 변경 검토에 도움이 된다.
  - 스테이징은 병합에 충돌이 있을 때 도움이 된다.
  - 스테이징은 여분의 로컬 파일을 계속 유지하는데 도움이 된다.
  - 스테이징은 작은 변화를 몰래 잠입하는데 도움이 된다.
  - 출처: https://stackoverflow.com/questions/49228209/whats-the-use-of-the-staging-area-in-git

- Explain what origin is in git push origin main.
  - 프로젝트가 복제된 원격 저장소의 단축 이름
- Explain what main is in git push origin main.
  - git을 push 하고 싶은 원격저장소 브랜치이름이 main

## PROJECT: PRACTICING GIT BASICS

- How do you create a new repository on GitHub?
  - 깃허브 계정에 들어가서 new repository를 클릭하고 저장소 이름을 지정하고 create repository버튼을 클릭한다.
- How do you copy a repository onto your local machine?
  - git clone <SSH>
- What is the default name of your remote connection?
  - origin
- How do you check the status of your current repository?
  - git status
- How do you add files to the staging area in git?
  - git add <파일>
- How do you commit the files to the staging area and add a descriptive message?
  - git commit -m “<커밋내용>”
- How do you push your changes to your repository on GitHub?
  - git push origin main
- How do you look at the history of your previous commits?
  - git log
