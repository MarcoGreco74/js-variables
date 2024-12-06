// 1. Dichiarazione di variabili
// Crea una variabile chiamata name e assegnale il tuo nome.
// Stampa il valore di nome nella console.
let nome = "Marco";
console.log(nome);

// 2. Tipi primitivi
// Crea tre variabili chiamate number, text e bool e assegna rispettivamente
// un numero, una stringa e un valore booleano.
// Stampa tutti i valori nella console.
let number = 5;
let text = "Mia stringa";
let bool = true;
console.log(number);
console.log(text);
console.log(bool);

// 3. Sostituisci null nelle righe sottostanti utilizzando operazioni con le stringhe
// e le variabili sopra in modo da stampare correttamente 
// in console la stringa con il nome completo
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // NON MODIFICARE QUESTA RIGA
const firstName = 'Jane'; // NON MODIFICARE QUESTA RIGA
const lastName = 'Smith'; // NON MODIFICARE QUESTA RIGA

const index_J = alphabet.indexOf('J');
const index_n = alphabet.indexOf('N');
const index_e = alphabet.indexOf('E');
const name = alphabet.charAt(index_J)+(alphabet.charAt(0)+alphabet.charAt(index_n)+alphabet.charAt(index_e)).toLowerCase();
const surname =  alphabet.slice(alphabet.indexOf('S'),alphabet.indexOf('T'))+(alphabet.substring(alphabet.indexOf('M'),1)+alphabet.substring(alphabet.indexOf('I'),1)+alphabet.slice(alphabet.indexOf('T'), alphabet.indexOf('U'))+alphabet.slice(alphabet.indexOf('H'), alphabet.indexOf('I'))).toLowerCase(); 
const fullName = `${name} ${surname}`;
console.log(fullName); // Output: "Jane Smith"

// 4. Imposta questa variabile utilizzando una proprietà
// sulla variabile alphabet per ottenere la sua lunghezza
const numberOfLettersInAlphabet = alphabet.length;
console.log(numberOfLettersInAlphabet); // Output: 26