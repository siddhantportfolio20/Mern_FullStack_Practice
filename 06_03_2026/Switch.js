let a = 4

switch(a){
    case 3:
        console.log("3")
        break
    case 4:
        console.log("4")
        break
    case 5:
        console.log("5")
        break
    default:
        console.log("invalid")
        break
}

// for case grouping :- 

let B = 4

switch(B){
    case 3:
        console.log("3")
        break
    case 4:
        
    case 5:
        console.log("4 in case 5")
        console.log("5")
        break
    default:
        console.log("invalid")
        break
}



let week = "tue"

switch(week){
    case "mon":
        console.log("Monday")
        break
    case "tue":
        console.log("Tuesday")
        break
    case "wed":
        console.log("wednesday")
        break
    case "thurs":
        console.log("Thursday")
        break
    case "fri":
        console.log("Friday")
        break
    case "sat":
        console.log("Saturday")
        break
    case "sun":
        console.log("Sunday")
        break
    default:
        console.log("Invalid input")
}