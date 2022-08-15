import { purchaseMineral } from "./database.js"
import { getCurrentTransientState } from "./database.js"
import { getMinerals } from "./database.js"
import { getFacilities, getOrders} from "./database.js"
let transientState = getCurrentTransientState()
let newOrder = purchaseMineral()
let minerals = getMinerals()
let facilities = getFacilities()



const buildCartItem = (order) => {

    const foundMineral = minerals.find((mineral)=>
    {
        return mineral.id === order.mineralId
    })

    const foundFacility = facilities.find((facility)=> {
        return facility.id === order.facilityId
    })
    let mineralName = foundMineral.name
    let facilityName = foundFacility.name
    return `<li>
    ${mineralName} is in ${facilityName}
</li>`
}

export const Orders = () => {
    const orders = getOrders()

    let html = '<ul>'
    const listItems = orders.map(buildCartItem(orders))
    html += listItems.join("")
    html+= "</ul>"
    return html
}