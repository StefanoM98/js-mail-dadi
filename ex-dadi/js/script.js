// CREIAMO IL NUMERO CASUALE PER IL COMPUTER
const rndNumberComputer = Math.floor (Math.random() * (6 - 1 + 1)) + 1;
console.log(rndNumberComputer);

// CREIAMO IL NUMERO CASUALE PER LO SFIDANTE
const rndNumberUser = Math.floor (Math.random() * (6 - 1 + 1)) + 1;
console.log(rndNumberUser)

if (rndNumberComputer >= rndNumberUser) {
    console.log ("RIPROVA, SARAI PIU' FORTUNATO")
} else if (rndNumberComputer < rndNumberUser) {
    console.log("COMPLIMENTI, hai vinto un nuovo pc");
}