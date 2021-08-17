//@ts-check

//then과 catch의 위치주의. resolve 완료 문구출력여부,
//단 value는 undefined
new Promise((resolve, reject) => {
  console.log('inside Promise')
  reject(new Error('first reject'))
  resolve('first resolve') //만약 resolve가 reject보다 먼저라면 resolve만하고끝남
})
  .catch((error) => {
    console.log(error)
  })
  .then((resolve1) => {
    console.log(resolve1)
  })

// Promise.reject(new Error('fail')).then(
//   () => {},
//   function (error) {
//     console.error(error)
//   }
// )
