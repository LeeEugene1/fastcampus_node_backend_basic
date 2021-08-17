//@ts-check

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
// 내가만든 route가져오기
const { routes } = require('./api')



// const idRegEx = /^\/posts\/([a-zA-Z0-9-_]+)$/

const server = http.createServer((req, res) => {
  async function main(){
    const route = routes.find()
  }
//   if (req.url === '/posts' && req.method === 'GET') {
//     // res.end('LIST')
//     const result = {
//       posts: posts.map((post) => ({
//         id: post.id,
//         title: post.title,
//       })),
//       totalCount: posts.length,
//     }
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'application/json; encoding=utf-8')
//     res.end(JSON.stringify(result))
//     // console.log(result)
//   } else if (idRegEx.test(req.url)) {
//     //게시글보기(개별)
//     const ex = idRegEx.exec(req.url)
//     const id = ex[1]
//     const post = posts.find((p) => p.id === id)
//     if (post) {
//       res.statusCode = 200
//       res.setHeader('content-type', 'application/json; charset=utf-8')
//       res.end(JSON.stringify(post))
//     } else {
//       res.statusCode = 400
//       res.end('post not found')
//     }
//     // console.log(`postid : ${ex[1]}`)
//     // console.log(idRegEx.exec(req.url))
//     //[ '/posts/444', index: 0, input: '/posts/444', groups: undefined ]
//     //만약 정규식중 알고싶은값만 ()를 넣으면, 예를들어 posts/뒤에오는애들
//     // [ '/posts/444', '444', index: 0, input: '/posts/444', groups: undefined ]    res.end('Some Content of the post')
//   } else if (req.url === '/posts' && req.method === 'POST') {
//     //게시글입력
//     //테스트(포스트만들기):http POST localhost:4000/posts title=foo content=bar --print=HB
//     req.on('data', (data) => {
//       const body = JSON.parse(data)
//       posts.push({
//         id: body.title.toLowerCase().replace(' ', '_'),
//         title: body.title,
//         content: body.conent,
//       })
//     })
//     res.statusCode = 200
//     res.end('Create post')
//   } else {
//     res.statusCode = 404
//     res.end('NOT FOUND!!!!!')
//   }

//   // console.log(req.url)
//   res.statusCode = 200
//   res.end('hi')
// })

const PORT = 8080

server.listen(PORT, () => {
  console.log(`the server is listening at port: ${PORT}`)
})
