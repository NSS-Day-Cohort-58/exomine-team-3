import { getFacilityMinerals } from './database.js';
import { getMinerals } from "./database.js"

const facilityMinerals = getFacilityMinerals()
const minerals = getMinerals()



export const facilityMineralList = (facilityId) => {
    let array = []
    for (let each of facilityMinerals) {
        if (facilityId === each.facilityId) {
            array.push(each)
        }
    } 
    return FMineralList(array)
}


const FMineralList = (array) => {
    let arrayOfMinerals = []
    for (let each of array) {
        for (let mineral of minerals) {
            if (each.mineralId === mineral.id) {
                arrayOfMinerals.push(`${each.quantity} tons of ${mineral.name}`)
            }
        }
    } 
    return htmlForFacilityMinerals(arrayOfMinerals)
}

const htmlForFacilityMinerals = (array) => {
    let html = `<ul>`
    for (let item of array) {
        html += `<li>${item}</li>`
    }
    html += `</ul>`
    return html
}



