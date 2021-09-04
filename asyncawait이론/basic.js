// 코드깔끔

//@ts-check
/**
 * @param {number} duration
 */
function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout((duration) => {
      resolve(undefined)
    }, duration)
  })
}

// async 은 다른 async function 내에서 기다릴수 있다
async function main() {
  try {
    console.log('hi')
    await sleep(3000)
    console.log('bye')
  } catch (error) {
    console.log('error', error)
  }
}
main().then(() => {
  main()
})
