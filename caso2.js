import {main_3 as case_3} from "./caso3.js"

const main_2 = function(salary){

    alert("---Case 2---")
    alert(`Your currently salary is: ${salary}`)
    alert("Now, you have arrived to the airport, but your carry-on suitcase does not meet the established measurements")
    alert("But I am going to help you so that everything goes well")

    const arraySuit = []
    const arrayreduction = []

    const suitcasePerm = {
        higth : 55,
        long : 40,
        broad : 20
    }

    const suitcaseCarry = {}

    Object.assign(suitcaseCarry,suitcasePerm)
    suitcaseCarry.higth = 60
    
    arraySuit.push(suitcasePerm,suitcaseCarry)
    console.log(arraySuit);


    const reductionHigh = arraySuit[0].higth / arraySuit[1].higth
    const reductionLong =  arraySuit[0].long / arraySuit[1].long
    const reductionBroad = arraySuit[0].broad / arraySuit[1].broad 

    arrayreduction.push(reductionHigh,reductionLong,reductionBroad)

    let minimum = Math.min(...arrayreduction)

    const newMeasure = {}
    Object.assign(newMeasure,suitcaseCarry)

    for(let measure in newMeasure){
        newMeasure[measure] = newMeasure[measure] * minimum
        newMeasure[measure] = Math.floor(newMeasure[measure])
    }
    console.log(newMeasure);

    alert(`You need to adjust the following measurements to your carry-on suitcase: \n${JSON.stringify(newMeasure)}`)


    case_3(salary)
}

export{main_2}