console.log("************** DELIVERABLE 01 *********************");

/*### 1. Array operations */
const arrayList = ["uno", "dos", "tres", "cuatro"];
/*#### Head
 * Implementa una función `head` (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento.
 * Utiliza destructuring.
*/
// Destructuring arrays
// const [first] = arrayList;
// console.log(first);

const head = ([first]) => first; 
console.log(head(arrayList)); 

/**
 * ### Tail
 * Implementa una función `tail` (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. 
 * Utiliza rest operator.
 */

// const [first, ...values] = arrayList;
// console.log(values);

 const tail = ([ , ...values] ) => values; 
 console.log(tail(arrayList));

 /**
  * #### Init
  * Implementa una función `init` (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. 
  * Utiliza los métodos que ofrece Array.prototype.
  */
 //console.log(arrayList.slice(0,-1));
 
 const init = ( [...values] ) => values.slice(0,-1); 
 console.log(init(arrayList));

/**
 * #### Last
 * Implementa una función `last` (inmutable), tal que, dado un array como entrada devuelva el último elemento.
 */


const last = ([...values]) => values[values.length -1] 
console.log(last(arrayList));