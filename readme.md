# 노드 개발환경설정

npm, yarn과 같은 패키지매니저활용해 개발에 필요한 모듈 설치

1. package.json 생성 : 이프로젝트(패키지)는 npm이 관리하고있는 패키지임을 알려줌
   `npm init -y`

- 항상 package-lock.json(살제 로컬환경에 설치된 모듈들의 버전)에 모듈의 버전에 맞춘후 커밋해줘야 함께작업시 버전문제가없다.
- npm

2. Formatting: Prettier로 코딩스타일통일하기, Linting 코드에러잡아주기
   [설치방법](https://dubaiyu.tistory.com/187)

3. typescript
   `npm install --save-dev typescript`
   `//@ts-check`

4. JSDOC
   설정한 형식에 맞지않거나 빠진타입을 체크해줌

```

/**
 * @typedef Post
 * @property {string} id
 * @property {string} title
 * @property {string} content
 */

/** @type {Post[]} */
const posts = [
  {
    id: '1',
    title: 'my_first_post',
    content: 'hello, world!',
  },
  {
    id: '2',
    title: 'second_post',
  },
]
```

# 프레임워크 없이 간단한 RESTful API server 만들기

- 노드 작동원리 파악
- 로컬파일을 데이터베이스로사용(제이슨)
- 인증 로직은 아직 없음
- restful api
