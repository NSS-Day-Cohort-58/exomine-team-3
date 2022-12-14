
import { getGovernors } from "./database.js"
import { getCurrentTransientState } from "./database.js"


export const Governors = () => {
    let transientState = getCurrentTransientState()
    let governors = getGovernors()
    let html = ""
    html += `<fieldset class="govBox">`
    html += `<label>Who are you?</label>`
    html += `<select name="governor">`
    html+= `<option value="0">Please select a governor</option>`
    for (let governor of governors) {
        if (governor.active === true) {
        if (transientState.selectedGovernor === governor.id) {
            html += `<option name="governor" selected value="${governor.colonyId}">${governor.name}</option>`
        } else { html += `<option name="governor"  value="${governor.colonyId}">${governor.name}</option>` }

    }}
    html += `</select>`
    html += `</fieldset>`

    return html
}



