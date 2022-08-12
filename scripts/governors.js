import { getGovernors,setColony } from "./database.js"

export const Governors = () => {
    let governors = getGovernors()
    let html = ""
    html += `<fieldset class="govBox">`
    html += `<label>Who are you?</label>`
    html += `<select>`
    for (let governor of governors) {
        html += `<option name="governor">${governor.name}</option>`

    }
    html += `</select>`
    html += `</fieldset>`
    return html
}

document.addEventListener("change", (event) => {
    if (event.target.name === "governor") {
        setColony(parseInt(event.target.id))
    }
})

