function interest(Principle, rate, time){
    return Principle * (rate / 100) * time;
}
let sud = interest(4000, 7, 2);
console.log(sud);