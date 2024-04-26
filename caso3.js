import {main_4 as case_4} from "./case4.js"
import {whileErrorNumber} from "./app.js"

const main_3 = function(salary){

    alert("---Case 3---")
    alert(`The currently salary is: ${salary}`)

    const wifiKey = "01110010_01101001_01110111_01101001"
    let result = ""
    const arrayWifi = wifiKey.split("_")
    arrayWifi.forEach(function(code) {
        let decimal = parseInt(code,2)
        let character = String.fromCharCode(decimal)
        result += character
    })
    alert("Now, you need to use the wifi called 'ElPassEs' because there is not wifi at the airport\nThen I am going to decifrate the password for you")
    alert(`The wifi password is:\n ${result}`)

    let minutsWifi = Number(prompt("Enter the number of the minutes that you spend using wifi"))
    minutsWifi = whileErrorNumber(minutsWifi)

    while(minutsWifi > 60){
        alert("You made a mistake, you only spent 1 hour at the airport, then you can't spend more than 60 minuts using wifi")
        minutsWifi = Number(prompt("Insert a valid minutes"))
        minutsWifi = whileErrorNumber(minutsWifi)
    }

    const totalMinuts = minutsWifi * 833

    salary -= totalMinuts

    case_4(salary)
}
export{main_3}