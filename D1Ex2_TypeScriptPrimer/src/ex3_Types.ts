type Age = number | string;

function admitAge (age: Age): string {
  return `I am ${age}, alright?!`;
}

let myAge: Age = 50;
let yourAge: Age = 'One Hundred';
console.log("1. Type as Union ")
console.log(admitAge(yourAge)); // 'I am One Hundred, alright?!'
console.log("--------------------")

type PartyZone = "pizza hut" | "waterpark" | "bowling alley" | "abandoned warehouse";

function goToParty (place: PartyZone): string {
  return `lets go to the ${place}`;
}


//goToParty("chuck e. cheese"); This will cause error
console.log("2. Type as enum ")
console.log(goToParty("pizza hut")); // 'I am One Hundred, alright?!'
console.log("--------------------");



interface Kicker {
  kick(speed: number): number;
  punch(power:number):number;
}

interface Puncher {
  punch2(power: number): number;
}


/*
class KP implements Kicker, Puncher{
  
}
*/
// assign intersection type definition to alias KickPuncher
type KickPuncher = Kicker & Puncher;

function attack (warrior: KickPuncher) {
  warrior.kick(102);
  warrior.punch(412);
  //warrior.judoChop(); // Property 'judoChop' does not exist on type 'KickPuncher'
}
console.log("3. Type as Intersection")
console.log(">>Refer Code<<")
console.log("--------------------")
