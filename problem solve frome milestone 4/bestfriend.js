function bestFriend(name){
    let best = name[0];
   for(let i = 0; i < name.length; i++){
       let friendName = name[i];
       if(friendName.length > best.length)
       {
           best = friendName;
       }
   }
   return best;
     
}

let name = ['mihir roy', 'antor sarker', 'forhad hasan tusher', 'salaheen', 'tanvir anjumm', 'gazi ashiq' ];
let bestfriendName = bestFriend(name);
console.log('best Friend name:', bestfriendName);