console.log('You can ignore single and double quotes like this:\\\'\\\' \\" \\"')

console.log(Boolean(alert('5'))) //false
console.log(true>false)  //true тому що true це 1 , а false це 0 , а 1>0
console.log(true>5)  //false 1<5
console.log(true<'5') //true 5 в string зводиться до числа і 1<5
console.log(true>null) //true null=0 , 1>0

alert('Please enter your data')
let userName = prompt("Enter your name", 'Name')
alert(`Your first name:${userName}`)
let userSurname = prompt("Enter your surname",'Surname')
alert (`Your full name: ${userName} ${userSurname}`)
let age = prompt("How old are you",'Age')
alert (`Your full name is: ${userName} ${userSurname}, your age is: ${age}`)
alert('Are you admin ?')
alert (`Your full name is ${userName} ${userSurname}, your age is ${age}, admin status: true`)
