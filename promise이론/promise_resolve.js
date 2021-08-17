// resolve는 딱 한번만
new Promise((resolve, reject) => {
  console.log('Inside promise')
  resolve('First resolve + must need then to show this')
})
  .then((value) => {
    console.log('Inside first then')
    // resolve('second resolve')
    console.log('value', value) //First resolve
  })
  .then((value2) => {
    console.log('Inside second then')
    console.log('value2', value2) //undefined
    // resolve('third resolve')
  })
  .then((value3) => {
    console.log('Inside third then')
    console.log('value3', value3) //undefined
  })
