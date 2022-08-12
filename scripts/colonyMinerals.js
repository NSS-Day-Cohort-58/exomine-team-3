import { getColonyMinerals, setColonyId } from "./database.js"
import { getMinerals } from "./database.js"


/* 
===================
* INVOKE FUNCTIONS
===================
*/

const colonyMinerals = getColonyMinerals()
const minerals = getMinerals()

let colonyId = null
document.addEventListener("change", (event) => {
    if (event.target.name === "governor") {
        setColonyId(parseInt(event.target.value))
    }
})

/* 
======================
* Colony Mineral List 
======================
*/
const colonyMineralList = (colonyId) => {
    let array = []
    for (let each of colonyMinerals) {
        if (colonyId === each.colonyId) {
            array.push(each)
        }
    } return array
}

let list = colonyMineralList(colonyId)


/* 
===============
* Mineral List 
===============
*/
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


/* 
====================
* HTML for Minerals 
====================
*/
const htmlForMinerals = (array) => {
    let html = `<ul>`
    for (let item of array) {
        html += `<li>${item}</li>`
    }
    html += `</ul>`
    return html
}

export const CMfinalList = htmlForMinerals(newList)