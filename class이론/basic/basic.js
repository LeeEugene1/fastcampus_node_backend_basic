//@ts-check

//실무에서는 사용자나 물건같이 동일한 종류의 객체를 여러번 생성해야하는 경우가 잦다
//이때 생성자함수 new function혹은 모던자바스크립트에서 도입된
//클래스class 함수 사용하면 객체지행프로그래밍에서 사용되는 다양한 기능을 자바스크립트에서도 사용할 수 있다.

//[1]
//생성자 함수(constructor function)와 일반함수에 기술적인 차이는 없습니다.
//다만 생성자함수는
//1. 함수 첫글자는 대문자
//2 'new'연산자를 붙여 실행
function Test(name) {
  // this = {}인 셈
  this.name = name
  this.isAdmin = false

  //return this가 암묵적으로 반환 즉 this = {name:'toto', isAdmin=false}
}

let m1 = new Test('toto')
console.log(m1.name)

// new.taget과 생성자함수

//[2]
//클래스는 자바스크립트에서 함수의 한 종류
class User {
  constructor(name) {
    this.name = name
  } //new에 의해 자동호출, 객체 초기화

  //   sayHi() {
  //     console.log(`hi ${this.name}`)
  //   }

  //getter setter 을 통해 user.name을 조작할 수 있다.
  get name() {
    return this._name
  }
  set name(value) {
    if (value.length < 4) {
      console.log('이름이 짧다')
      return
    }
    this._name = value
    console.log(value)
  }
}

let user = new User('john')
// user.sayHi()
let user2 = new User('')
