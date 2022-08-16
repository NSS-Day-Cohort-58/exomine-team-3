import { getFacilityMinerals } from './database.js';
import { getMinerals,getCurrentTransientState } from "./database.js"

let transientState = getCurrentTransientState()
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
        if (item.mineralId === transientState.selectedMineral) {
            html += `<li>
            <input type="radio" name="mineralRadio" checked value=${item.mineralId}/>${item.quantity} of ${item.mineralName}
            </li > `
            } else { html += ` <input type="radio" name="mineralRadio" value=${item.mineralId}/>${item.quantity} of ${item.mineralName}` }
    
        
        

    }
    html += `</ul > `
    return html
}


