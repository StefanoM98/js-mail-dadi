// CREIAMO L'ARREY DI EMAIL CHE POSSONO ACCEDERE AL SERIVIZIO
const emails = ["stefano@gmail.com", "filippo@gmail.com", "alessio@gmail.com", "antonio@gmail.com", "john@gmail.com", "angelo@gmail.com"]
emails.push("olga@gmail.com")

// CHIEDIAMO AL CLIENTE UNA MAIL E VERIFICHIAMO TRAMITE UN ARREY SE QUESTA MAIL PUO ACCEDERE AL SERVIZIO
const userEmail = prompt("Ciao, inserisci la tua mail per accedere al servizio.")


// ORA CONTROLLIAMO CHE LA MAIL CHE INSERISCE IL CLIENTE SIA UGUALE AD UNA DELLE EMAIL CHE POSSONO ACCEDERE AL SERVIZIO

let puoiEntrare = false;

for (let i = 0; i < emails.length; i++) {
    const correctEmail = emails[i]
    // console.log(correctEmail);
    if (correctEmail.toLowerCase() === userEmail.toLowerCase()) {
        puoiEntrare = true;
    }
}

if (puoiEntrare === true) {
    console.log("Ottimo, puoi accedere al servizio");
} else {
    console.log("Ci dispiace, ma la tua mail non è inserita nel database e non puoi accedere al servizio. Se vuoi sapere come accedere al servizio, visita la pagina: voglio-accedere-anche-io-al-servizio.com");
}
