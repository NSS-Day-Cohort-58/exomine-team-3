import { getColonyMinerals } from "./database.js"
import { getMinerals } from "./database.js"

const colonyMinerals = getColonyMinerals()
const minerals = getMinerals()

const colonyMineralList = (colonyId) => {
    let array = []
    for (let each of colonyMinerals) {
        if (colonyId === each.colonyId) {
            array.push(each)
        }
    } return array
}

let list = colonyMineralList(colonyId)

const MineralList = (array) => {
    let arrayOfMinerals = []
    for (let each of array) {
        for (let mineral of minerals) {
            if (each.mineralId === mineral.id) {
                arrayOfMinerals.push(mineral.name)
            }
        }
    } return arrayOfMinerals
}

let newList = MineralList(list)

const htmlForMinerals = (array) => {
    let html = `<ul>`
    for (let item of array) {
        html += `<li>${item}</li>`
    }
    html += `</ul>`
    return html
}

export const CMfinalList = htmlForMinerals(newList)