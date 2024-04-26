import {main_6 as case_6} from "./case6.js"
import {validateNum} from "./app.js"

const main_5 = function(salary){
    
    alert("---Case 5---")
    alert("Now, You need to play a game with the taxi driver to define if you will pay for the service")
    alert("¡¡¡¡Welcome to the game of rock paper or scissors!!!!")
    alert(`The currently salary is: ${salary} \nRemember if you lost, you have to pay to the taxy driver $300.000`)

    let numAlHildebrando
    let numeAlTaxi

    do{
        let choose
        do{
            choose = Number(prompt("Hildebrando, please enter the opcion that you want to choose\n1.rock\n2.Paper\n3.Scissors"))
            switch(choose){
                case 1:
                    numAlHildebrando = "rock"
                    break
                case 2:
                    numAlHildebrando = "paper"
                    break
                case 3:
                    numAlHildebrando = "scissors"
                    break
                default:
                    alert("Invalid number")
            }
        }while(!validateNum(choose))

        numeAlTaxi = Math.floor(Math.random() * 3) + 1

     
        if(numeAlTaxi === 1){
            numeAlTaxi = "rock"
        }else if(numeAlTaxi === 2){
            numeAlTaxi = "paper"
        }else{
            numeAlTaxi = "scissors"
        }

        if((numAlHildebrando === "rock" && numeAlTaxi === "paper") || (numAlHildebrando === "scissors" && numeAlTaxi === "rock") || (numAlHildebrando === "paper" && numeAlTaxi === "scissors")){
            alert(`The taxi driver won\nHildebrando got ${numAlHildebrando}\nTaxi driver got ${numeAlTaxi}`)
            salary -= 300000
        }else{
            alert(`Hildebrando won\nHildebrando got ${numAlHildebrando}\nTaxi driver got ${numeAlTaxi}`)

        }

        alert(salary)

    }while(numAlHildebrando === numeAlTaxi)

    case_6(salary)
}

export{main_5}