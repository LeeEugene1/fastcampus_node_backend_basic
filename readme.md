# 노드 개발환경설정

npm, yarn과 같은 패키지매니저활용해 개발에 필요한 모듈 설치

1. package.json 생성 : 이프로젝트(패키지)는 npm이 관리하고있는 패키지임을 알려줌
   `npm init -y`

- 항상 package-lock.json(살제 로컬환경에 설치된 모듈들의 버전)에 모듈의 버전에 맞춘후 커밋해줘야 함께작업시 버전문제가없다.
- npm

2. Formatting: Prettier로 코딩스타일통일하기
   [설치방법](https://dubaiyu.tistory.com/187)

3. Linting 에러잡아주기

4. [.vscode] - settings.json
   vscode에게 prettier를 통해 포맷팅을 해라
