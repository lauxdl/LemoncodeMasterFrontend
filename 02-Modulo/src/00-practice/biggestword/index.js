function biggestWord(phrase) {

  let palabras = phrase.split(" ");
  let bigword = '';

  for (let i of palabras) {
    if (bigword.length < i.length){
      bigword = i;
    }
  }

return bigword;

}

console.log(biggestWord("Esta frase puede contener muchas palabras"));
console.log(biggestWord("Ejercicios básicos de JavaScript"));
