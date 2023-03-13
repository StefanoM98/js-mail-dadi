// CREIAMO IL NUMERO CASUALE PER IL COMPUTER
const rndNumberComputer = Math.floor (Math.random() * (6 - 1 + 1)) + 1;
console.log(rndNumberComputer);

// CREIAMO IL NUMERO CASUALE PER LO SFIDANTE
const rndNumberUser = Math.floor (Math.random() * (6 - 1 + 1)) + 1;
console.log(rndNumberUser)

alert ("Benvenuto nella booleanautomachine, subito chiuso questo messaggio di avviso avrai la possibilità di vincere un nuovo pc.....ti starai chiedendo il funzionamento del gioco giusto? Perfetto la risposta è......PURA FORTUNA. Saranno estratti due numeri da 1 a 6, uno per te e uno per il computer, se il numero del computer sarà piu altro del tuo allora avrai perso. Nel caso il tuo numero sarà più alto di quello del pc allora avrai vinto. Se invece dovessero uscire due numeri uguali ricorda che il banco, in questo caso in computer, vince sempre. Facci sapere se hai vinto oppure no. Buona Fortuna gamer.")

let message = ""
if (rndNumberComputer >= rndNumberUser) {
    message = "RIPROVA, SARAI PIU' FORTUNATO";
} else if (rndNumberComputer < rndNumberUser) {
    message = "COMPLIMENTI, hai vinto un nuovo pc";
}
console.log (message)

document.getElementById("pc-number").innerHTML = `Il numero del computer è ${rndNumberComputer}`
document.getElementById("your-number").innerHTML = `Il tuo numero è ${rndNumberUser}`
document.getElementById("result").innerHTML = message

