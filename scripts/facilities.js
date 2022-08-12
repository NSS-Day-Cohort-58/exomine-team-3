import { getFacilities, setFacility } from './database.js';

export const Facilities = () => {

    let facilities = getFacilities()
    let html = ""
    html += `<fieldset class="facBox">`
    html += `<label>Which Facility?</label>`
    html += `<select>`
    for (let facility of facilities) {
        html += `<option name="facility" value="${facility.id}">${facility.name}</option>`

    }
    html += `</select>`
    html += `</fieldset>`
    return html
}


