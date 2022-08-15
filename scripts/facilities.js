import { getFacilities, setFacility, getCurrentTransientState} from './database.js';

let transientState = getCurrentTransientState()
export const Facilities = () => {

    let facilities = getFacilities()
    let html = ""
    html += `<fieldset class="facBox">`
    html += `<label>Which Facility?</label>`
    html += `<select name="facility">`
    for (let facility of facilities) {
        if (facility.active === true){
        if (transientState.selectedFacility === facility.id) {
            html += `<option name="facility" selected value="${facility.id}">${facility.name}</option>`
        } else { html += `<option name="facility"  value="${facility.id}">${facility.name}</option>` }
    }}
    html += `</select>`
    html += `</fieldset>`
    return html
}


