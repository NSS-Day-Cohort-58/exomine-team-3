import { getFacilityMinerals } from './database.js';
import { getMinerals } from "./database.js"


export const facilityMineralList = (facilityId) => {
    const facilityMinerals = getFacilityMinerals()
    let array = []
    for (let each of facilityMinerals) {
        if (facilityId === each.facilityId) {
            array.push(each)
        }
    }
    return FMineralList(array)
}


const FMineralList = (array) => {
    const minerals = getMinerals()
    let arrayOfMinerals = []
    for (let each of array) {
        for (let mineral of minerals) {
            if (each.mineralId === mineral.id) {
                let emptyObject = {
                    quantity: each.quantity,
                    mineralName: mineral.name,
                    mineralId: mineral.id
                }
                arrayOfMinerals.push(emptyObject)
            }
        }
    }
    return htmlForFacilityMinerals(arrayOfMinerals)
}

const htmlForFacilityMinerals = (array) => {
    let html = `<ul>`
    for (let item of array) {
        html += `<li>
        <input type="radio" name="mineralRadio" value=${item.mineralId}/>${item.quantity} of ${item.mineralName}
        </li > `
    }
    html += `</ul > `
    return html
}


