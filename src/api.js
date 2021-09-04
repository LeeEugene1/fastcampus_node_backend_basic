//@ts-check

/**
 * @typedef Post
 * @property {string} id
 * @property {string} title
 * @property {string} content
 */

// /** @type {Post[]} */
// const posts = [
//   { id: '1', title: 'my first post', content: 'hi' },
//   { id: '2', title: 'my second post', content: 'bye' },
// ]

/**
 * @typedef APIResponse
 * @property {number} statusCode
 * @property {string | object} body
 */

// /**
//  * @tyoedef Route
//  * @property {string} url
//  * @property {string} method
//  * @property {(valuse:Object)=> string} callback
//  */

/**
 * @typedef Route
 * @property {RegExp} url
 * @property {'GET' | 'POST'} method
 * @property {(maches: string[], body: object | undefined)=> Promise<APIResponse>} callback
 */

const fs = require('fs')
const DB_JSON_FILENAME = 'database.json' //db파일위치 절대경로

/** @returns {Promise<Post[]>} */
async function getPosts() {
  const json = await fs.promises.readFile(DB_JSON_FILENAME, 'utf-8')
  return JSON.parse(json).posts
}

/** @param {Post[]} posts */
async function savePosts(posts) {
  const content = {
    posts,
  }
  await fs.promises.writeFile(
    DB_JSON_FILENAME,
    JSON.stringify(content),
    'utf-8'
  )
}

/** @type {Route[]} */
const routes = [
  {
    url: /^\/posts$/, //'posts' -> regExe로 고쳐야함
    method: 'GET',
    callback: async () => ({
      statusCode: 200,
      // body: posts,
      body: await getPosts(),
    }),
  },

  {
    url: /^\/posts\/([a-zA-Z0-9-_]+)$/, //'posts/:id' -> regExe
    method: 'GET',
    callback: async (maches) => {
      console.log(maches)
      const postId = maches[1]
      if (!postId) {
        return {
          statusCode: 404,
          body: 'Not found3',
        }
      }

      // const post = posts.find((_post) => _post.id === postId)
      const posts = await getPosts()
      const post = posts.find((_post) => _post.id === postId)

      if (!post) {
        return {
          statusCode: 404,
          body: 'Not found',
        }
      }

      return {
        statusCode: 200,
        body: post,
      }
    },
  },

  {
    url: /^\/posts$/, //'posts' -> regExe
    method: 'POST',
    callback: async (_, body) => {
      if (!body) {
        return {
          statusCode: 400,
          body: 'no body',
        }
      }

      /** @type {string} */
      const title = body.title
      const newPost = {
        id: title.replace(/\s/g, '_'),
        title,
        content: body.content,
      }
      const posts = await getPosts()
      posts.push(newPost)

      // 업데이트된 포스트를 저장
      savePosts(posts)

      return {
        statusCode: 200,
        body: newPost,
      }
    },
  },
]

// 이 파일은 모듈이고 모듈에서 route를 내보냄
module.exports = {
  routes,
}
