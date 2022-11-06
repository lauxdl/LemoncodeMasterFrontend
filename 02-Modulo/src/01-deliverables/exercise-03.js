console.log("************** DELIVERABLE 03 *********************");

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
//const copy = clone(original);
//console.log(original === copy);
console.log(clone(original));

/**
 * #### Merge
 * Implementa una función `merge` que, dados dos objetos de entrada `source` y `target`, devuelva un nuevo objeto con todas las propiedades de `target` 
 * y de `source`, y en caso de propiedades con el mismo nombre, `source` sobreescribe a `target`. */

//Object.assign

const merge = (source, target) => Object.assign(target,source);
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

console.log(merge(a, b));  // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}