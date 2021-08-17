// // 1초뒤에 랜덤값 1초뒤에 랜덤값 1초뒤에 랜덤값..
// setTimeout(() => {
//   const value = Math.random()
//   console.log(value)
//   setTimeout(() => {
//     const value2 = Math.random()
//     console.log(value2)
//     setTimeout(() => {
//       const value3 = Math.random()
//       console.log(value3)
//       console.log(value2)//상호참조가일어남
//     }, 1000)
//   }, 1000)
// }, 1000)

function myPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.random())
    }, 1000)
  })
}

myPromise()
  .then((resolved) => {
    console.log(resolved)
    return myPromise()
  })
  .then((resolved2) => {
    console.log(resolved2)
    return myPromise()
  })
  .then((resolved3) => {
    console.log(resolved3)
    return myPromise()
  })

// new Promise((resolve, reject) => {
//   console.log('before')
//   setTimeout(() => {
//     resolve(Math.random())
//     console.log('after')
//   }, 1000)
// })
//   .then((value) => {
//     console.log('value1')
//     console.log(value)
//   })
//   .then(() => {
//     console.log('value2')
//   })
//   .then(() => {
//     console.log('value3')
//   })
