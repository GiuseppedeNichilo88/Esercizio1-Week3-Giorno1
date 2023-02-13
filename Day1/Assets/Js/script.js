/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
var area = (l1, l2) => l1 * l2
console.log(area(2, 5));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var crazySum = (n1, n2) => {
    if (n1 === n2) {
        return (n1 + n2) * 3;

    } return n1 + n2;
}

console.log(crazySum(3, 3));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
var crazyDiff = (numero) => {
    if (numero > 19) {
        return Math.abs(numero - 19) * 3;
    } return Math.abs(numero - 19)
}
console.log(crazyDiff(6));
console.log(crazyDiff(20));
console.log(crazyDiff(-20));


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
var boundary = (n) => {
    if ((20 < n) && (20 <= 100)) {
        return true;
    }
    if (n === 400) {
        return true;
    }
    return false;
}
console.log(boundary(10));
console.log(boundary(21));
console.log(boundary(100));
console.log(boundary(400));
console.log(boundary(500));


/* SCRIVI QUI LA TUA RISPOSTA */



/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
var epify = (target) => {
    if (!target.startsWith('EPICODE')) {
        return `EPICODE + ${target}`;

    }
    return target;
}
console.log(epify('Javascript'));
console.log(epify('EPICODE PHP'));

/* SCRIVI QUI LA TUA RISPOSTA */




/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)

*/

var check3and7 = (num) => {
    if (num < 0) {
        return false;
    }
    if (num % 3 === 0) {
        return true;
    } if (num % 7 === 0) {
        return true;
    }
}

console.log(check3and7(3));
console.log(check3and7(3));
console.log(check3and7(4));
console.log(check3and7(-4));

/* SCRIVI QUI LA TUA RISPOSTA */



/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
var reverseString = (target) => {
    var splitString = target.split("");
    var reverseArray = splitString.reverse();
    var parola = reverseArray.join("");
    return parola;
}

console.log(reverseString('test'));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

var upperFirst = (str) => {
    str = str.split(" ");
    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    return str.join(" ");
}
console.log(upperFirst('ciao mi chiamo gabriele'));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var cutString = (target) => {
    return target.slice(1, target.length-1);
}
console.log(cutString('ciao'));

   
    
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var giveMeRandom = (n) => {
    let array = [];
    for (let index = 0; index < n; index++) {
        array[index] = (Math.floor(Math.random() * 11));
    } return array;

}

console.log(giveMeRandom(5));
console.log(giveMeRandom(1));
console.log(giveMeRandom(100));