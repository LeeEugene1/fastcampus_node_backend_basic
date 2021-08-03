//@ts-check

/**
 * 글(post) API
 *
 * 전체보기:GET /posts
 * 특정글보기:GET /posts/:id
 * 글쓰기:POST /posts
 */
const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/posts' && req.method === 'GET') {
    res.statusCode = 200
    res.end('LIST')
  } else if (req.url === '/posts/:id') {
    res.statusCode = 200
    res.end('Some Content of the post')
  } else if (req.url === '/posts' && req.method === 'POST') {
    res.statusCode = 200
    res.end('Create post')
  } else {
    res.statusCode = 404
    res.end('NOT FOUND!!!!!')
  }

  console.log(req.url)
  res.statusCode = 200
  res.end('hi')
})

const PORT = 4000

server.listen(PORT, () => {
  console.log(`the server is listening at port: ${PORT}`)
})
