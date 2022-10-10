'use strict';

// Scrivi un programma che stampi in console i numeri da 1 a 100, 
// x ma che per i multipli di 3 stampi “Fizz” al posto del numero 
// x e per i multipli di 5 stampi “Buzz”. 
// x Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// Consigli del giorno:
// Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
// x BONUS 1: Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
// BONUS 2: Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.

let riga = document.querySelector('div.row');


// CREO CICLO FOR PER STAMPARE IN CONSOLE I MULTIPLI DI 3 E 5 - 3 - 5

for(let i = 1; i <= 100; i++){

   if (((i % 3) == 0) && ((i % 5) == 0)){
    console.log('fizzbuzz');
    let myBox = document.createElement('div'); 
    myBox.className = "boxes col-2 rounded-pill mybox-fizzbuzz";
    myBox.append('fizzbuzz');
    riga.append(myBox);
    

   } else if((i % 5) == 0){
    console.log('buzz');
    let myBox = document.createElement('div'); 
    myBox.className = "boxes col-2 rounded-pill mybox-buzz"
    myBox.append('buzz');
    riga.append(myBox);

   } else if((i % 3) == 0){
    console.log('fizz');
    let myBox = document.createElement('div'); 
    myBox.className = "boxes col-2 rounded-pill  mybox-fizz"
    myBox.append('fizz');
    riga.append(myBox);


   } else{
    console.log(i);
    let myBox = document.createElement('div'); 
    myBox.className = "boxes col-2 rounded-pill mybox-number"
    myBox.append('Box ' + i);
    riga.append(myBox);

   }


}


