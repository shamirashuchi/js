// let arr = ["Banana", "Orange", "Apple", "Mango",'mihr', 'roy', 'ashiq'];
// arr.splice(4, 1, "saleheen", 'antor', 'tusher');
// console.log(arr);

function arrayNumber(num){
    let arr = [];
    for(let i = 0; i< num.length; i++){
        if(num[i] >=80){
          arr.push(num[i]);
        }

    }
    return arr;
}

let number = [10, 20, 50, 90, 80, 100, 120, 30, 3, 4, 150, 200];
let result = arrayNumber(number);
console.log(result);