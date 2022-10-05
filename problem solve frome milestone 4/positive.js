function positiveNumber(value){
    let posnumber = [ ];
    for(let i = 0; i < value.length; i++ ){
       if(value[i] <= 0){
        break;
       }
       else{
          posnumber.push(value[i]);
       }

    }
    return posnumber;
}

let number = [10, 20,  30, 40,  5, 6, -10, 8,];
let positive = positiveNumber(number);
console.log('positive value:', positive);