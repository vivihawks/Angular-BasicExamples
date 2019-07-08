function admitAge(age) {
    return `I am ${age}, alright?!`;
}
let myAge = 50;
let yourAge = 'One Hundred';
console.log("1. Type as Union ");
console.log(admitAge(yourAge)); // 'I am One Hundred, alright?!'
console.log("--------------------");
function goToParty(place) {
    return `lets go to the ${place}`;
}
//goToParty("chuck e. cheese"); This will cause error
console.log("2. Type as enum ");
console.log(goToParty("pizza hut")); // 'I am One Hundred, alright?!'
console.log("--------------------");
function attack(warrior) {
    warrior.kick(102);
    warrior.punch(412);
    //warrior.judoChop(); // Property 'judoChop' does not exist on type 'KickPuncher'
}
console.log("3. Type as Intersection");
console.log(">>Refer Code<<");
console.log("--------------------");
//# sourceMappingURL=ex3_Types.js.map