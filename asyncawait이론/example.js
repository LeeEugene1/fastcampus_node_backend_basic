// function hello() {
//   setTimeout(() => {
//     console.log('hi')
//   }, 0)
// }
// function bye() {
//   console.log('bye')
// }

// async function main() {
//   await hello()
//   console.log('inside main')
// }

// main().then(() => {
//   bye()
// })
function hello() {
  setTimeout(() => {
    console.log('hello')
  }, 3000)
}

function hi() {
  setTimeout(() => {
    console.log('hi')
  }, 3000)
}
async function main() {
  await hi()
  console.log('main')
}

main().then(() => {
  hello()
})
