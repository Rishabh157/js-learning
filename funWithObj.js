
let userProfile = {
    name: "Sanjeev",
    nickName: "Kanha",
    lastName: "Gour",
    age: 18,
    collage: "MEdicapse institute",
    push: function (age) {                       // method      // parameter (varibale)
        let year = 2022 - age
        console.log(year)
    }
}



// in js is everything is object and we can access these object key and method with the help of ( . ) oprator
// when we create a function in an object. we have call it's method

// let arr = [2,51]

// arr.push(45)
// console.log(arr)

// userProfile.push(18)             // argument   or value 














// Destructuring -> ES6


// let name = userProfile.name
// let age = userProfile.age

// let { name, age , ...all} = userProfile               // ... => spread oprator

// let msg = `my name is ${name} and my age is ${age}`
// // console.log(msg)
// console.log(all)


// --------------------------------------

















// template string -> ES6 " ", ' ' , ` ` ,

// let name = userProfile.name
// let age = userProfile.age
// let msg = `my name is ${name} and my age is ${age}`

