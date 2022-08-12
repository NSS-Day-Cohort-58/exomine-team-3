import { getGovernors, setColony } from "./database.js"

export const Governors = () => {
    let governors = getGovernors()
    let html = ""
    html += `<fieldset class="govBox">`
    html += `<label>Who are you?</label>`
    html += `<select name="governor">`
    for (let governor of governors) {
        html += `<option name="governor" value="${governor.colonyId}">${governor.name}</option>`

    }
    html += `</select>`
    html += `</fieldset>`
    return html
}



