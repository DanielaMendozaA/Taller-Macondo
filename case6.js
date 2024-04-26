import {chooseColor} from "./app.js"

const main_6 = function(salary){
    alert("---Case 6---")
    alert(`The old salary is: ${salary}`)
    
    let totalDays 
    let dead
    alert("¡¡¡Great, you already arrive to the Hotel, you are going to spend a very wonderful vacation!!!")
    alert("DAY 1")
    let day1 = chooseColor(salary)
    salary = day1[2]
    
    if(day1[0] === false && day1[1] === false){
        totalDays = 1
        dead = "¡¡¡Oh no, sorry, Hildebrando died!!!"

    }else if(day1[0] === true && day1[1] === false){
        totalDays = 1
        dead = "¡¡¡GREAT, Hildebrando lives!!!"
        
    }else if(day1[0] === true && day1[1] === true){
        alert("DAY 2")
        let day2 = chooseColor(salary)
        salary = day2[2]
        
        if(day2[0] === false && day2[1] === false){
            totalDays = 2
            dead = "¡¡¡Oh no, sorry, Hildebrando died!!!"
            
        }else if (day2[0] === true && day2[1] === false){
            totalDays = 2
            dead = "¡¡¡GREAT, Hildebrando lives!!!"
            
        }else if(day2[0] === true && day2[1] === true){
            alert("DAY 3")
            let day3 = chooseColor(salary)
            salary = day3[2]
            
            if(day3[0] === false && day3[1] === false){
                totalDays = 3
                dead = "¡¡¡Oh no, sorry, Hildebrando died!!!"
         
            }else if(day3[0] === true && day3[1] === false){
                totalDays = 3
                dead = "¡¡¡GREAT, Hildebrando lives!!!"
                
            }else if(day3[0] === true && day3[1] === true){
                alert("DAY 4")
                let day4 = chooseColor(salary)
                salary = day4[2]
                
                if(day4[0] === false && day4[1] === false){
                    totalDays = 4
                    dead = "¡¡¡Oh no, sorry, Hildebrando died!!!"
                    
                }else if(day4[0] === true && day4[1] === false){
                    totalDays = 4
                    dead = "¡¡¡GREAT, Hildebrando lives!!!"
                    
                }else if(day4[0] === true && day4[1] === true){
                    totalDays = 4
                    dead = "¡¡¡GREAT, Hildebrando lives!!!"
                    
                }
            }
            
        }
        
        
    }else{
        console.log(salary)
    }
    
    const initialSalary = 2500000
    let spentMoney
    
    if(salary < initialSalary){
        spentMoney = initialSalary - salary
        alert(`¡¡¡Hildebrando spent!!!: ${spentMoney}`)
    }else{
        spentMoney = salary - initialSalary
        alert(`¡¡¡Hildebrando WON!!!: ${spentMoney}`)
    }
    
    alert(`Total days in Macondo: ${totalDays} \n ${dead}`);
    
}

export{main_6}