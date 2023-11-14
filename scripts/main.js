// let myHeading = document.querySelector("h1")
// myHeading.textContent = "Hello world"

// 변수 선언
let myVariable
// 값 할당
myVariable = "hello"

console.log(myVariable)

let myVariable2 = "world"

console.log(myVariable2)

var a = 1
let b = 2
const c = 3

console.log(a, b, c)

a = 10
b = 20
// c = 30
// const로 만들어진 변수는 재할당 불가능
console.log(a, b, c)

var a
// let b
// const c
// let, const로 선언된 변수는 재선언 불가능


let stringVar = "hello"
let numberBar = 10
let boolVar = true
let arrayVar = []
let objectVar = {}
console.log(stringVar, numberBar, boolVar, arrayVar, objectVar)

arrayVar.push("hello")
console.log(arrayVar)

// objectVar['name'] = 'kim'
objectVar.name = "kim"
objectVar.location = "Seoul"
console.log(objectVar)

// my_dict = Dict()
let myObj = new Object()

// 연산자
let myVarA = 10
let myVarB = "10"

console.log(myVarA == myVarB)
console.log(myVarA === myVarB)

// let iceCream = "chocolate"
// if (iceCream === "chocolate") {
//     alert("choco")
// } else {
//     alert("no choco")
// }


// 반복문
let i = 0
while (i < 5) {
    console.log(i)
    // python => i += 1
    i++
}

// for 반복문
console.log("for1")
for (let i=0; i<5; i++) {
    console.log(i)
}
// for(데이터선언, 데이터기준점, 데이터증가)

// for 반복문(인덱스접근)
console.log("for2")
let myArray = [1,2,3,4,5]
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i])
}

// for in은 인덱스 반복처리
console.log("for in")
// for item in myArray:
for (let item in myArray) {
    console.log(item)
    // console.log(myArray[item])
}

// for of가 자주 사용
console.log("for of")
for (let item of myArray) {
    console.log(item)
}

// for each는 반복처리를 하고 싶은 배열을 먼저 적어준다.
console.log("for each")
myArray.forEach(function(item, index, array){
    console.log(item, index, array)
})

// 함수
// def multi():

function multifly1(num1, num2) {
    let result = num1 * num2
    return result
}
multifly1(3, 8)
console.log(multifly1(3, 8))


// 함수표현식
let multifly2 = function (num1, num2) {
    let result = num1 * num2
    return result
}
console.log(multifly2(3, 8))


// 화살표함수
let multifly3 = (num1, num2) => {
    let result = num1 * num2
    return result
}
console.log(multifly3(5, 6))


// 화살표 함수 생략1
// {}안에 코드가 return하는 문장 하나만 있는 경우
// => {}, return을 생략 가능

let multifly4 = (num1, num2) => num1 * num2
console.log(multifly4(20, 20))


// 화살표 함수 생략2
// ()안에 매개변수가 하나만 있다면 ()를 생략 가능
let multifly5 = num1 => num1 * 2
console.log(multifly5(100))



// 이벤트 (**중요**)

// onclick 이벤트
// document.querySelector("h1").onclick = function () {
//     alert("hihi")
// }

// 이벤트 리스너
let myH1 = document.querySelector("h1")
// addEventListener(무슨 일이 일어났을 때, 무슨 행동을 할지)
myH1.addEventListener("click", function (e){
    // alert("hihi")
    console.log(e)
})

let myInput = document.querySelector("input")
myInput.addEventListener("keydown", function(e){
    console.log(e)
})

let myImage = document.querySelector("img")
console.log(myImage)

myImage.addEventListener("click", function (){
    let src = myImage.getAttribute("src") 
    // getAttibute: 속성을 가져오는 메소드, => img src="images/firefox-icon.png"
    if (src === "images/firefox-icon.png"){
        myImage.setAttribute("src", "images/cat1.jpg")
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png")
    }
})


// 비동기처리
console.log("hi")
// setTimeout(실행시킬 함수, 시간)
setTimeout(function(){console.log("hello Tina")}, 1000)
console.log("bye")


// Json데이터를 받아올 수 있는 하나의 사이트
const URL = "https://jsonplaceholder.typicode.com/todos/1"

// Json이 제대로 작동하지 않는것을 볼 수 있다.
// let response = fetch(URL)
// console.log(response)

// result = response.json()
// console.log(result)


// 아래 코드에서는 제대로 작동한다. (첫번째방법)
// fetch 지정한 URL요청으로 들어가서 요청한 정보를 가지고 오는 함수
fetch(URL)
    .then(response => response.json()) 
    // =>가 등장, 앞에 인자를 넣는공간 뒤에는 코드를 실행하는 공간
    // .then((response) => {return response.json()})
    .then(json => console.log(json))

    // JavaScript는 외부에 있는 데이터를 가지고올 때 비동기적으로 처리하나, then이라는 함수로 순서를 강제로 부여해줌.
    

// python스럽게 바꿔준 두번째 방법
async function fetchAndPrint(){
    let res = await fetch(URL)
    let result = await res.json()
    // fetchAndPrint함수를 동기적으로 처리: async, await 키워드 붙이기(코드가 다 끝날때까지 기다려)
    console.log(result)
}

fetchAndPrint()



// # 이벤트 리스너 실습
// let li1 = document.querySelector("li#first")
// let li2 = document.querySelector("li#second")

// 특정기준에 만족하는 모든 요소
let liElements = document.querySelectorAll("li")

console.log(liElements)



// for (let li of liElements) {
//     console.log(li)
// }

// forEach는 map과 비슷한 역할
liElements.forEach(function(li){
    console.log(li)
    li.style.color = "red"
    li.style.backgroundColor = "pink"
})

liElements.forEach(function(li){
    li.addEventListener("click", function(e){
        // console.log(e.target)
        // console.log(e.target.textContent)

        if (e.target.textContent === "technologists") {
            e.target.style.color = "yellow"
        } else if (e.target.textContent === "thinkers") {
            e.target.style.color = "blue"
        } else {
            e.target.style.color = "purple"
        }

    })
})