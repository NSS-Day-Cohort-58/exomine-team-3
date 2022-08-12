import { getFacilityMinerals } from "./database.js"
import { getMinerals } from "./database.js"

const facilityMinerals = getFacilityMinerals()
const minerals = getMinerals()

const facilityMineralList = (facilityId) => {
    let array = []
    for (let each of facilityMinerals) {
        if (facilityId === each.facilityId) {
            array.push(each)
        }
    } return array
}

let FMlist = facilityMineralList(facilityId)

const FMineralList = (array) => {
    let arrayOfMinerals = []
    for (let each of array) {
        for (let mineral of minerals) {
            if (each.mineralId === mineral.id) {
                arrayOfMinerals.push(`${each.quantity} tons of ${mineral.name}`)
            }
        }
    } return arrayOfMinerals
}

let FMnewList = FMineralList(FMlist)

const htmlForFacilityMinerals = (array) => {
    let html = `<ul>`
    for (let item of array) {
        html += `<li>${item}</li>`
    }
    html += `</ul>`
    return html
}

export const finalFMList = htmlForFacilityMinerals(FMnewList)