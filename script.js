console.log('Hello!');
console.log("Ta deg ei bolle!");

// Datatyper som vi kan lagre i variabler

const myBool = true; 
const myNumber = 666; 
const myStr = "the number of the BEAST!";
const myExpl = " is the ";
const myUndEfined = undefined;
const myVoid = null;

let myChaos = Math.random();
let chaosMe = myChaos < 0.5;
const myListOfNumberOfTheBeast = [616, 666];


if(chaosMe) {
  console.log(myListOfNumberOfTheBeast[0]+myExpl+myStr);
} else{ 
  console.log(myListOfNumberOfTheBeast[1]+myExpl+myStr);
}
console.log(myListOfNumberOfTheBeast);
console.log(myListOfNumberOfTheBeast[1]);
console.log(myChaos);

//objekter
const laura = {
  navn: "Laura",
  alder: "27",
  høgd: 171, 
}
console.log(laura);
console.log(laura.alder);
console.log(laura.navn);

let nummerA = 10;
let nummerB = 32;
console.log(nummerA+nummerB);

const erStor = 1024;
const erStørre = 8094;
const erEndaStørre = erStor < erStørre;
console.log(erEndaStørre);

const hhh = erStor > erStørre;
console.log(hhh);
// løkker
let teljar = 0;
while(teljar <= 19){
  console.log(teljar)
  teljar = teljar +1
}
console.log("---")
do{
  console.log(teljar)
  teljar = teljar + 1
} while (teljar < 23)
console.log("---")
for (  ; teljar < 28 ; teljar++){
  console.log(teljar)
}

//const rot = [ "spade", " maske", "dildo", "bøtte", "lingerine"]
//rot.sort
//for (let a = 0; a = rot.length; a++){
//  console.log(rot[a])
//}
//console.log(rot.length)

function heisann(navn) {
  console.log("Halla "+ navn)
}

heisann(laura.navn)

function dobbel(nummer){
  return nummer*2;
}

console.log("Laura er " + dobbel(laura.alder))