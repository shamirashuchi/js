function paperRequirements(num1, num2, num3){
    let firstBookPage  = 100 * num1;
    let secondBookPage = 200 * num2;
    let thirdBookPage = 300 * num3;
    
    let totalPage = firstBookPage + secondBookPage + thirdBookPage;
    return totalPage;

}

let paperreq = paperRequirements(4, 5, 7);
console.log('total page requir:', paperreq);