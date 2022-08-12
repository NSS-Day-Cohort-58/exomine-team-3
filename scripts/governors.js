
import { getGovernors, setGovernor } from "./database.js"
import { getGovernors } from "./database.js"
import { getCurrentTransientState } from "./database.js"


let governors = getGovernors()

// document.addEventListener("change", (event) => {
//     if (event.target.name === 'governor') {
//         setGovernor(parseInt(event.target.value))
//     }


// })
export const Governors = () => {
    let transientState = getCurrentTransientState()
    let governors = getGovernors()
    let html = ""
    html += `<fieldset class="govBox">`
    html += `<label>Who are you?</label>`
    html += `<select name="governor">`
    for (let governor of governors) {
        if (transientState.selectedGovernor === governor.id) {
            html += `<option name="governor" selected value="${governor.colonyId}">${governor.name}</option>`
        } else { html += `<option name="governor"  value="${governor.colonyId}">${governor.name}</option>` }

    }
    html += `</select>`
    html += `</fieldset>`

    return html
}




