import { getColonyMinerals, getGovernors, setGovernor} from "./database.js"
import { getMinerals } from "./database.js"

const colonyMinerals = getColonyMinerals()
const minerals = getMinerals()
const governors = getGovernors()

let colonyId = null
for (let governor of governors) {
    colonyId = governor.colonyId
}


document.addEventListener("change", (event) => {
    if (event.target.name === 'governor') {
        setGovernor(parseInt(event.target.value))
    }
})

export const colonyMineralList = (colonyId) => {
    let array = []
    for (let each of colonyMinerals) {
        if (colonyId === each.colonyId) {
            array.push(each)
        }
    } 
    return MineralList(array)

}

const MineralList = (array) => {
    let arrayOfMinerals = []
    for (let each of array) {
        for (let mineral of minerals) {
            if (each.mineralId === mineral.id) {
                arrayOfMinerals.push(`${each.quantity} tons of ${mineral.name}`)
            }
        }
    } 
    return htmlForMinerals(arrayOfMinerals)
}


const htmlForMinerals = (array) => {
    let html = `<ul>`
    for (let item of array) {
        html += `<li>${item}</li>`
    }
    html += `</ul>`
    return html
}
