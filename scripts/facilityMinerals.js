import { setFacility } from "./database.js"

document.addEventListener("change", (event) => {
    if (event.target.name === "facility") {
        setFacility(parseInt(event.target.id))
    }
})

// Write a function to iterate thought the facilityMineral array
//to match the facilityId pulled from the clickevent.
// -do a nested for loop to pull the name for mineralId
//output the html representation of minerals and quantities.
//sumthing like - ${Value} tons of ${nameofmineral}

