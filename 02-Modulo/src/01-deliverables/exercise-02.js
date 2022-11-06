console.log("************** DELIVERABLE 02 *********************");

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