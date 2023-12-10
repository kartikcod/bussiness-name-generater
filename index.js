// let random = Math.random()
// let a = prompt("enter first number");
// let b = prompt("enter second number");
// let c = prompt("enter opretion");
// let obj = {
//     "+": "-",
//     "*": "+",
//     "-": "/",
//     "/": "**"
// }
// console.log(random)
// if(random>0.1){
//     console.log(`the result is ${a}${c}${b}`);
//     alert(`the result is ${a}${c}${b}`);
// }


// else{
//     c=obj[c];
//     alert(`the result is ${eval(`$(a)$(c)$(b)`)}`);
// }











let random = Math.random()
let a= prompt("enter first number");
let b= prompt("enter second number");
let c=prompt("operater of")

let obj={
    "+":"-",
    "*":"+",
    "/":"-",
    "-":"**"
}
console.log(random)
if(random>2){
    console.log(`the result of ${a}${c}${b}`)
    alert(`the result of ${a}${c}${b}`)
}
else{
    c=obj[c];
    console.log(`the result of ${a}${c}${b}`)

}









