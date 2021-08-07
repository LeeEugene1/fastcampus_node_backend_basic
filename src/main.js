//@ts-check

/**
 * 글(post) API
 *
 * 전체보기:GET /posts
 * 특정글보기:GET /posts/:id
 * 글쓰기:POST /posts
 */

// http모듈을가져와서 서버만들기
const http = require('http')

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
    content: '',
  },
]

const idRegEx = /^\/posts\/([a-zA-Z0-9-_]+)$/

const server = http.createServer((req, res) => {
  if (req.url === '/posts' && req.method === 'GET') {
    // res.end('LIST')
    const result = {
      posts: posts.map((post) => ({
        id: post.id,
        title: post.title,
      })),
      totalCount: posts.length,
    }
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json; encoding=utf-8')
    res.end(JSON.stringify(result))
    // console.log(result)
  } else if (idRegEx.test(req.url)) {
    //게시글보기(개별)
    const ex = idRegEx.exec(req.url)
    const id = ex[1]
    const post = posts.find((p) => p.id === id)
    if (post) {
      res.statusCode = 200
      res.setHeader('content-type', 'application/json; charset=utf-8')
      res.end(JSON.stringify(post))
    } else {
      res.statusCode = 400
      res.end('post not found')
    }
    // console.log(`postid : ${ex[1]}`)
    // console.log(idRegEx.exec(req.url))
    //[ '/posts/444', index: 0, input: '/posts/444', groups: undefined ]
    //만약 정규식중 알고싶은값만 ()를 넣으면, 예를들어 posts/뒤에오는애들
    // [ '/posts/444', '444', index: 0, input: '/posts/444', groups: undefined ]    res.end('Some Content of the post')
  } else if (req.url === '/posts' && req.method === 'POST') {
    //게시글입력
    //테스트(포스트만들기):http POST localhost:4000/posts title=foo content=bar --print=HB
    req.on('data', (data) => {
      const body = JSON.parse(data)
      posts.push({
        id: body.title.toLowerCase().replace(' ', '_'),
        title: body.title,
        content: body.conent,
      })
    })
    res.statusCode = 200
    res.end('Create post')
  } else {
    res.statusCode = 404
    res.end('NOT FOUND!!!!!')
  }

  // console.log(req.url)
  res.statusCode = 200
  res.end('hi')
})

const PORT = 4000

server.listen(PORT, () => {
  console.log(`the server is listening at port: ${PORT}`)
})
