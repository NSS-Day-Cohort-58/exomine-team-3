import { getGovernors, setGovernor } from "./database.js"

let governors = getGovernors()

// document.addEventListener("change", (event) => {
//     if (event.target.name === 'governor') {
//         setGovernor(parseInt(event.target.value))
//     }


// })
export const Governors = () => {
    let html = ""
    html += `<fieldset class="govBox">
    <label>Who are you?</label>
    <select name="governor">
    <option value="0">Please select a governor</option>`
    let listItems = governors.map(governor => {
        return `<option value = "${governor.id}"> ${governor.name}</option>`
    })
    html+= listItems.join("")
    html += `</select>
    </fieldset>`
    return html
}



