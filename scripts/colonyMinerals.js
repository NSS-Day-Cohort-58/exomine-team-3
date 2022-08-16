import { getColonyMinerals, getGovernors, setGovernor } from "./database.js"
import { getMinerals } from "./database.js"

document.addEventListener("change", (event) => {
    if (event.target.name === 'governor') {
        setGovernor(parseInt(event.target.value))
    }
})

export const colonyMineralList = (colonyId) => {
    const colonyMinerals = getColonyMinerals()
    let array = []
    for (let each of colonyMinerals) {
        if (colonyId === each.colonyId) {
            array.push(each)
        }
    }
    return MineralList(array)

}

const MineralList = (array) => {
    const minerals = getMinerals()
    let arrayOfMinerals = []
    for (let each of array) {
        for (let mineral of minerals) {
            if (each.mineralId === mineral.id) {
                let mineralObject = {
                    quantity: each.quantity,
                    mineralName: mineral.name,
                    mineralId: mineral.id
                }
                arrayOfMinerals.push(mineralObject)
            }
        }
    }
    return htmlForMinerals(arrayOfMinerals)
}


const htmlForMinerals = (array) => {
    let html = `<ul>`
    for (let item of array) {
        html += `<li id="${item.mineralId}">${item.quantity} tons of ${item.mineralName}</li>`
    }
    html += `</ul>`
    return html
}

