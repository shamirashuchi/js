// for(let i = 412; i<= 456; i++){
//     if(i %2 ==0){
//         console.log(i);
//     }
// }

// for(let i = 581; i<= 623; i++){
//     if(i %2 !=0){
//         console.log(i);
//     }
// }
// for(let i = 30; i<= 86; i++){
//     if(i == 44){
//         break;
//     }
//     console.log(i);
// }

let price = [40, 50, 600, 150, 200, 250, 300];
for(let i =0; i< price.length; i++){
    if(price[i] > 200){
        break;
    }
    console.log(price[i]);
}