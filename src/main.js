//@ts-check

// npm run server

/**
 * 글(post) API
 *
 * 전체보기:GET /posts
 * 특정글보기:GET /posts/:id
 * 글쓰기:POST /posts
 */

// 모듈을가져올땐 require이용
// http 모듈로 서버만들기
const http = require('http')
const { mainModule } = require('process')
// 내가만든 모듈에서 route가져오기
const { routes, posts } = require('./api')

const server = http.createServer((req, res) => {
  async function main() {
    // 일치하는 라우트찾기
    const route = routes.find(
      (_route) =>
        req.url &&
        req.method &&
        _route.url.test(req.url) &&
        _route.method === req.method
    )

    //route가 없을때
    if (!req.url || !route) {
      res.statusCode = 404
      res.end('Not found1')
      return
    }

    const regexResult = route.url.exec(req.url)

    if (!regexResult) {
      res.statusCode = 404
      res.end('Not found2')
      return
    }

    //post처리
    /** @type {Object.<string, *> | undefined} */
    const regBody =
      //header가 json의 조건을 만족해야(&&) 프로미스가 실행되고 아니면(||) undefined
      (req.headers['content-type'] === 'application/json' &&
        (await new Promise((resolve, reject) => {
          req.setEncoding('utf-8')
          req.on('data', (data) => {
            try {
              resolve(JSON.parse(data))
            } catch {
              reject(new Error('파싱이 실패했음'))
            }
          })
        }))) ||
      undefined

    // console.log(redBody) http POST localhost:8080/posts a=1 ==> {"a":"1"}

    // route가 있을때
    const result = await route.callback(regexResult, regBody)
    res.statusCode = result.statusCode
    // res.end(result.body)

    //body가 {}일때랑 string일때 대응
    if (typeof result.body === 'string') {
      res.end(result.body)
    } else {
      res.setHeader('Content-type', 'application/json; charset=utf-8')
      res.end(JSON.stringify(result.body))
    }
  }

  main()
})

const PORT = 8080

server.listen(PORT, () => {
  console.log(`the server is listening at port: ${PORT}`)
})
