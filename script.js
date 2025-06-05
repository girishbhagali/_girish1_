/*console.log("task 1");

setTimeout(()=>{
    console.log("task 2")
}, 5000);
console.log("task 3")

const prompt = require('prompt-sync')();
const name = prompt("What is your name? ");
console.log("Hello, " + name + "!");
*/
function sq(x){
    let ans = 0;
    ans = x*x;
    return ans;
}
console.log("This answer is: "+sq(2));