console.log("************** DELIVERABLE 05 *********************");

/**### 5. Slot Machine
 * El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda. 
 * Cada máquina tragaperras (instancia) tendrá un **contador de monedas** que automáticamente se irá incrementando conforme vayamos jugando.
 * Cuando se llame al **método play** el número de monedas se debe incrementar de forma automática y debe generar **tres booleanos aleatorios** que representarán 
 * el estado de las 3 ruletas. El usuario habrá ganado en caso de que los tres booleanos sean `true`, y por tanto deberá mostrarse por consola el mensaje: */

//"Congratulations!!!. You won <número de monedas> coins!!";
// y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina.
// En caso contrario deberá mostrar otro mensaje:
// "Good luck next time!!".


class SlothMachine {

    constructor(){
        this.reelSpin1 = false;
        this.reelSpin2 = false;
        this.reelSpin3 = false;
        this.coins = 0;
        this.result = false;
    }

    showMoney(){
        console.log("Credits: " + this.coins);
    }

    play(){
        this.coins += 1;
        this.reelSpin1 = Boolean(Math.round(Math.random()));
        this.reelSpin2 = Boolean(Math.round(Math.random()));
        this.reelSpin3 = Boolean(Math.round(Math.random()));
        this.result = this.reelSpin1 && this.reelSpin2 && this.reelSpin3; 
        console.log(this.reelSpin1 + ' ' + this.reelSpin2  + ' ' + this.reelSpin3);
        if (this.result){
            console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
        } else {
            console.log("Good luck next time!!");
        }
        //console.log(`Resultado de tirada: ${this.result}`);
    }
}

const machine1 = new SlothMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
//machine1.showMoney();
