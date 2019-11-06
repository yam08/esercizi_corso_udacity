const num = 220;
var età = 40;

console.log("1. Calcolo la frequenza cardiaca massima");
console.log("Il modo più semplice per farlo è sostraendo la tua età a 220. Il risultato è un battito massimo previsto per età al minuto.");

/*Calcolo della freq cardiaca teorica*/
var fre_card_teorica = num - età;

console.log(`Questa è la tua frequenza cardiaca teorica:\n\n${fre_card_teorica} bpm`);
console.log("\n2. Determinare la frequenza cardiaca a riposo.");
console.log("Prendi il polso prima di alzarti dal letto la mattina. Fallo per diversi giorni consecutivi per ottenere letture coerenti.");
/*Freq cardiaca di riposo*/
var freq_a_riposo = 60;
console.log(`Questa è la mia fequenza cardiaca di riposo:\n\n${freq_a_riposo} bpm`);


console.log("\n3. Calcola la la riserva della tua frequenza cardiaca");
console.log("Ad esempio, se hai 40 anni, sottrai quel numero da 220; la tua frequenza massima è 180. Successivamente, sottrai la tua frequenza di riposo o 80 in questo esempio. La tua frequenza cardiaca è di 100 battiti al minuto. Questa riserva di frequenza cardiaca rappresenta i battiti cardiaci del cuscino disponibili per l'esercizio.");
/*Calcolo della frequenza cardiaca di riposo*/
var fre_card_teorica_di_riserva = fre_card_teorica - freq_a_riposo;

console.log(`Questa è la riserva della mia frequenza cardiaca:\n\n${fre_card_teorica_di_riserva} bpm`);
