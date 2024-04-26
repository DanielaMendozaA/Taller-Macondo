import {main_2 as case_2} from "./caso2.js"
import {validateNum} from "./app.js"
import {confirmar} from "./app.js"

const main = function(salary){
    alert(`---Case 1---`)
    alert("¡¡¡Welcome Hildebrando, I am going to be your tourist guide in your vacation, I hope you have great time!!!")
    alert(`Now, you just received your payment and the currently salary is: ${salary}`)

    let buyingDorado

    do{
        buyingDorado = Number(prompt("Enter the opcion that you want to but\n1.Soda with almojabna \n2.Subway with soda\n3.Don't buy anything"));
        const sodaAlmojabana = 15000
        const subwaySoda = 23000
        switch(buyingDorado){
            case 1:
                confirmar(salary,main)
                alert("You will dislike it because you have been at the stand for a long time.")
                salary -= sodaAlmojabana;
                break
            case 2:
                confirmar(salary,main)
                alert("You will be full and well")
                salary -= subwaySoda;
                break
            case 3:
                confirmar(salary,main)
                alert("You need to eat something in Medellin")
                break
            default:
                alert("Invalid number")
                break
        } 
    }while(!validateNum(buyingDorado));

        case_2(salary)
    }

export {main}




// buyingSometing()




