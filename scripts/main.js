import { Exomine } from "./Exomine.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = Exomine()
}

renderAllHTML()


document.addEventListener(
    "stateChanged",
    customEvent => {
        renderAllHTML()
    }
)
