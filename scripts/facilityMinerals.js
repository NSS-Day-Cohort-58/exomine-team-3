import { getFacilityMinerals, setMineral } from './database.js';
import { getMinerals } from "./database.js"

const facilityMinerals = getFacilityMinerals()
const minerals = getMinerals()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "mineral") {
            setMineral(parseInt(event.target.value))
        }
    }
)


export const facilityMineralList = () => {
    let html = '<ul>'

    for (let mineral of minerals) {
        for (let facilityMin of facilityMinerals) {
            if (facilityMin.id === mineral.id) {
                html += `<li> <input type="radio" name="mineral" value = ${mineral.id}/> ${facilityMin.quantity} tons of ${mineral.name}</li>`
            }
        }
    }
    html += '</ul>'
    return FMineralList(array)
}


const FMineralList = (array) => {
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
    html += `</ul >`
    return html
}


// export const facilityMineralList = (facilityId) => {
//     let array = []
//     for (let each of facilityMinerals) {
//         if (facilityId === each.facilityId) {
//             array.push(each)
//         }
//     } return FMineralList(array)
// }


// const FMineralList = (array) => {
//     let arrayOfMinerals = []
//     for (let each of array) {
//         for (let mineral of minerals) {
//             if (each.mineralId === mineral.id) {
//                 arrayOfMinerals.push(`${each.quantity} tons of ${mineral.name}`)
//             }
//         }
//     } return htmlForFacilityMinerals(arrayOfMinerals)
// }

// const htmlForFacilityMinerals = (array) => {
//     let html = `<ul>`
//     for (let item of array) {
//         html += `<li> <input type="radio" name="mineral" /> ${item}</li>`
//     }
//     html += `</ul>`
//     return html
// }



