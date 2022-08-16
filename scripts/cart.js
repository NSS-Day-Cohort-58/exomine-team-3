import { getCurrentTransientState } from "./database.js"
import { getMinerals } from "./database.js"
import { getFacilities } from "./database.js"


export const buildCartItem = () => {
    let transientState = getCurrentTransientState()
    let minerals = getMinerals()
    let facilities = getFacilities()

    if (transientState.selectedMineral > 0) {
        const foundMineral = minerals.find(
            (mineral) => {
                return mineral.id === transientState.selectedMineral
            }
        )

        const foundFacility = facilities.find(
            (facility) => {
                return facility.id === transientState.selectedFacility
            }
        )

        return `<li>
     1 ton of ${foundMineral.name} from ${foundFacility.name}
    </li>`

    } else {
        return `<li></li>`
    }
}