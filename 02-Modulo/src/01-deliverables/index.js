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

/**### 2. Concat */

/**
 * Implementa una función `concat` (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. 
 * Utiliza rest / spread operators.
*/

const array1 = ["hey","ho", "let's go", "yay"];
const array2 = ["hello", "world"];

const concat = (a, b) => [...a, ...b]; 
console.log(concat(array1,array2));

/**
 * #### Opcional
 * Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2). 
 * */

 const concatOpcional = (...arr) => arr.concat(...arr); 
 console.log(concatOpcional(array1,array2,arrayList));

/**### 3. Clone Merge */
/** 
 * #### Clone
 * Implementa una función `clone` que, a partir de un objeto de entrada `source` devuelva un nuevo objeto con las propiedades de `source`:
 */

const original = {
    name: "Laura",
    surname : "Díaz",
    country: {
        id: 1,
        name: "Spain",
        iso3: "SPA",
    }
};

function clone(source) {
    const newSource = {...source};
    return newSource;
}

console.log(clone(original));