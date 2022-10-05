// function primeNumber(num){
//     let count = 0;
//     for(let i = 2; i< num; i++){
//         if(num % i ==0){
//          count ++;
//          break;
//         }
//     }
//     if(count == 0){
//         console.log('prime', num);
//     }
//     else{
//         console.log('is not prime', num);
//     }
// }

// let number =  primeNumber(10);






function isPrime(num) {
  
    for(let i = 2; i< num; i++){
        if(num % i == 0){
         return false;
     }
   }
   return true;
}
var a = [3, 23,29, 43, 50 ]
var prime = [];
for (let i = 0; i < a.length; i++) {
if (isPrime(a[i])) {
  prime.push(a[i])
}
}

console.log(prime);