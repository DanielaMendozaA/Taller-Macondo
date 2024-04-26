import {main_5 as case_5} from "./case5.js"
import {changeI} from "./app.js"

const main_4 = function (salary){

    alert("---Case 4---")
    alert(`The currently salary is: ${salary}`)
    alert("Now, you are going to take a taxi to go to the hotel, but here everybody speaks other language, then I am going to translate for you")
    alert("First, you need to tell to the taxi driver: \n'Taxi me puedes llevar al hotel mariposas amarillas' \nNext, I'm going to translate this phrase for you.")

    const word = "Taxi me puede llevar al hotel mariposas amarillas"
    const strWord = changeI(word)

    alert(strWord)

    while(confirm("Do you want to translate something else for the taxi driver?")){
        let newTranslate = prompt("Enter the phrase you want to translate")
        newTranslate = newTranslate.toLowerCase().trim()
        let newChange = changeI(newTranslate)
        alert(newChange)
    }

    case_5(salary)
}

export{main_4}
