import {main as case_1} from "./case1.js"

export const validateNum = function(number){
    const regex = /^[1-3]$/
    return regex.test(number)
}

export const validateNumberInt = function(number){
    let numRegex = /^[0-9][0-9]*$/;
    return numRegex.test(number)
}

export const whileErrorNumber = function (number){
    while(!validateNumberInt(number) || number === 0){
        alert("You should enter a number")
        number = Number(prompt("Insert a valid number"))
    }
    return number
} 

export const confirmar = function(salary,main){
    let confirmar = confirm("Are you sure")
    if(!confirmar){
        main(salary)
    }

}

export const changeI = function(word){

    const vocal = ["a","e","i","o","u"]
    const arrayWord = word.split("")
    let newarray = []
    arrayWord.forEach(char =>
        {
            if(vocal.includes(char)){
                newarray.push("i")
            }
            else{
                newarray.push(char)
            }
            
    })
    const strWord = newarray.join(" ")
    return strWord
}


const validateNumChoos = function(number){
    const regex = /^[1-4]$/
    return regex.test(number)
}

export const chooseColor = function(salary){
    let helLife = true
    let vacacionDays = true
    let color
    do{
        color = Number(prompt("Enter the number corresponding to the color of clothing\n1.Yellow\n2.Green\n3.Red\n4.Blue"))
        switch(color){
            case 1:
                alert("Yellow")
                alert("You are going to swimming pool, the water smells bad")
                let intopool = confirm("Do you want to get into the pool")
                if(intopool){
                    alert("too much chlorine")
                    helLife = false
                    vacacionDays = false
                    return [helLife,vacacionDays,salary]
                }else{
                    alert("Good choice")
                }
                break

            case 2:
                alert("Green")
                alert("hike and water for the road")
                let wholeHike = confirm("Do you want to do the whole hike?")
                if(wholeHike){
                    alert("Good, you are going to take beautiful picturs")
                }else{
                    alert("Ohh sorry, you are lost")
                }
                break

            case 3:
                alert("Red")
                alert("Beach activities")
                let beachActivities
                do{
                    beachActivities = Number(prompt("Choose the activity that you want to do\n1.Volleyball\n2.Swim in the sea\n3.Drink cocktails"))
                    switch(beachActivities){
                        case 1:
                            alert("You had a grate time")
                            break
                        case 2:
                            alert("You rode a jet ski, great!")
                            break
                        case 3:
                            alert("You got sick, return immediately")
                            vacacionDays = false
                            return[helLife,vacacionDays,salary]
                        default:
                            alert("Invalid number")
                    }
                }while(!validateNum(beachActivities))
                break

            case 4:
                alert("Blue")
                alert("Hotel activities")
                let hotelActivities
                do{
                    hotelActivities = Number(prompt("Choose the activity that you want to do\n1.Bingo\n2.Dance\n3.Casino and betting"))
                    switch(hotelActivities){
                        case 1:
                            alert("You won money")
                            let money = Number(prompt("How much did you win?"))
                            whileErrorNumber(money)
                            alert(`The old salary is: ${salary}`)
                            salary += money
                            alert(`The new salary is: ${salary}`)
                            return [helLife,vacacionDays,salary]
                        case 2:
                            alert("You had a grate time")
                            break
                        case 3:
                            alert("You lost your money")
                            salary = 150000
                            alert(`The new salary is: ${salary}`)
                            vacacionDays = false
                            return [helLife,vacacionDays,salary]
                        default:
                            alert("Invalid number")
                    }
                }while(!validateNum(hotelActivities))
                break

            default:
                alert("Invalid number")
        }

    }while(!validateNumChoos(color))

    return [helLife,vacacionDays,salary]
}

let salary = 2500000

case_1 (salary)