function buy(amount){
    if(amount >= 80000){
        console.log('buy mac');
    }
    else if(amount >= 60000){
        console.log('gamming laptop');
    }
    else if(amount >= 40000){
        console.log('lenovo yoga');
    }
    else if(amount >= 20000){
     console.log('old laptop')
    }
    else{
        console.log('mobile phone');
    }
}

let elctorics = buy(6000); 