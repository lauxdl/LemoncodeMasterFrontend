/**
 *
- Matrícula de Honor = 10
- Sobresaliente = entre 9 y 10
- Notable = entre 7 y 9
- Bien = entre 6 y 7
- Suficiente = entre 5 y 6
- Insuficiente = entre 4 y 5
- Muy deficiente = por debajo de 4

 */

const eso2o = {
    David: 8.25,
    Maria: 9.5,
    Jose: 6.75,
    Juan: 5.5,
    Blanca: 7.75,
    Carmen: 8,
  };

  function printAverage(classResults) {

    let nota,media, suma = 0;
    const total =  Object.getOwnPropertyNames(classResults).length;
   
    for (const key in classResults) {
       //console.log(`${key}: ${classResults[key]}`);
       suma += classResults[key];
       //console.log(suma)
    }
    
    media =  suma/total;
    switch (true) {
        case media >= 10:
            nota = 'Matrícula de Honor: ' + media;
            break;
         case (media < 10 && media >= 9):
            nota = 'Sobresaliente: ' + media;
            break;
        case (media < 9) && (media >= 7):
            nota = 'Notable: ' + media;
            break;
        case (media < 7 && media >6):
            nota = 'Bien: ' + media;
            break;
        case (media <= 6 && media >=5):
            nota = 'Suficiente: ' + media;
            break;
        case (media < 5 && media >=4):
            nota = 'Insuficiente: ' + media;
            break;
        case (media < 4):
            nota = 'Muy deficiente: ' + media;
            break;
    
        default:
            break;
    }
    return nota;
  }


console.log('Resultado ' + printAverage(eso2o));