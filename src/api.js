//@ts-check

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

/**
 * @typedef APIResponse
 * @property {number} statusCode
 * @property {*} body
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
 * @property {()=> Promise<APIResponse>} callback
 */

/** @type {Route[]} */
const routes = [
  {
    url: /^\/posts$/, //'posts' -> regExe로 고쳐야함
    method: 'GET',
    callback: async () => ({
      statusCode: 200,
      body: {},
    }),
  },
  {
    url: /^\/posts\/[a-zA-Z0-9-_]+$/, //'posts/:id' -> regExe
    method: 'GET',
    callback: async () => ({
      statusCode: 200,
      body: {},
    }),
  },
  {
    url: /^\/posts$/, //'posts' -> regExe
    method: 'POST',
    callback: async () => ({
      statusCode: 200,
      body: {},
    }),
  },
]

// 이 파일은 모듈이고 모듈에서 route를 내보냄
module.exports = {
  routes,
}
