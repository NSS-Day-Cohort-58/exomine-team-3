const database = {
    transientState: {},
    governors: [
        {
            id: 1,
            name: "Matt Martino",
            active: true,
            colonyId: 1
        }, {
            id: 2,
            name: "Ameena Mashaikh",
            active: true,
            colonyId: 2
        }, {
            id: 3,
            name: "James Scott",
            active: true,
            colonyId: 3
        }, {
            id: 4,
            name: "Grace Parce",
            active: true,
            colonyId: 4
        }, {
            id: 5,
            name: "Devin Kent",
            active: true,
            colonyId: 5
        }, {
            id: 6,
            name: "Steve Brownlee",
            active: true,
            colonyId: 6
        }, {
            id: 7,
            name: "Carol Martino",
            active: false,
            colonyId: 1
        }, {
            id: 8,
            name: "Leslie Knope",
            active: false,
            colonyId: 2
        }, {
            id: 9,
            name: "Ron Swanson",
            active: false,
            colonyId: 4
        }, {
            id: 10,
            name: "Lil Sebastian",
            active: false,
            colonyId: 7
        }],

    colonies: [{
        id: 1,
        name: "Uranus",
    }, {
        id: 2,
        name: "Saturn",
    }, {
        id: 3,
        name: "Jupiter",
    }, {
        id: 4,
        name: "Mars",
    }, {
        id: 5,
        name: "Europa",
    }, {
        id: 6,
        name: "Pluto",
    }, {
        id: 7,
        name: "Io",
    }],

    facilities: [{
        id: 1,
        active: true,
        name: "Exxon Global",
    }, {
        id: 2,
        active: true,
        name: "Marxist Rock Collections",
    }, {
        id: 3,
        active: true,
        name: "Urist industry",
    }, {
        id: 4,
        active: true,
        name: "Handsome Terrier",
    }, {
        id: 5,
        active: true,
        name: "UBA-12",
    }, {
        id: 6,
        active: true,
        name: "Underwater Excursion",
    }, {
        id: 7,
        active: true,
        name: "Toho Deconstruction",
    }, {
        id: 8,
        active: true,
        name: "Ghibli Ventures Inc.",
    }, {
        id: 9,
        active: true,
        name: "Moon-Rocks-r-US",
    }, {
        id: 10,
        active: true,
        name: "Rocks n' Pebbles",
    }, {
        id: 11,
        active: true,
        name: "Bay 12",
    }, {
        id: 12,
        active: true,
        name: "Truck-Fil-A",
    }],

    minerals: [
        {
            id: 1,
            name: "Puddingstone",
        }, {
            id: 2,
            name: "Magnetite",
        }, {
            id: 3,
            name: "Lignite",
        }, {
            id: 4,
            name: "Hornblende",
        }, {
            id: 5,
            name: "Cryolite",
        }, {
            id: 6,
            name: "Brimstone",
        }, {
            id: 7,
            name: "Adamantine",
        }, {
            id: 8,
            name: "Andesite",
        }, {
            id: 9,
            name: "Mica",
        }, {
            id: 10,
            name: "Microcline",
        }, {
            id: 11,
            name: "Obsidian",
        }, {
            id: 12,
            name: "Sylvite",
        }],

    facilityMinerals: [
        {
            id: 1,
            facilityId: 1,
            mineralId: 12,
            quantity: 712,
        }, {
            id: 2,
            facilityId: 2,
            mineralId: 11,
            quantity: 534,
        }, {
            id: 3,
            facilityId: 3,
            mineralId: 10,
            quantity: 491,
        }, {
            id: 4,
            facilityId: 4,
            mineralId: 9,
            quantity: 122,
        }, {
            id: 5,
            facilityId: 5,
            mineralId: 8,
            quantity: 892,
        }, {
            id: 6,
            facilityId: 6,
            mineralId: 7,
            quantity: 538,
        }, {
            id: 7,
            facilityId: 7,
            mineralId: 6,
            quantity: 131,
        }, {
            id: 8,
            facilityId: 8,
            mineralId: 5,
            quantity: 2435,
        }, {
            id: 9,
            facilityId: 9,
            mineralId: 4,
            quantity: 1372,
        }, {
            id: 10,
            facilityId: 10,
            mineralId: 3,
            quantity: 365,
        }, {
            id: 11,
            facilityId: 11,
            mineralId: 2,
            quantity: 1092,
        }, {
            id: 12,
            facilityId: 12,
            mineralId: 1,
            quantity: 2346,
        },
    ],

    colonyMinerals: [{
        id: 1,
        colonyId: 1,
        mineralId: 12,
        quantity: 164,
    }, {
        id: 2,
        colonyId: 2,
        mineralId: 11,
        quantity: 83,
    }, {
        id: 3,
        colonyId: 3,
        mineralId: 10,
        quantity: 23,
    }, {
        id: 4,
        colonyId: 4,
        mineralId: 10,
        quantity: 99,
    }, {
        id: 5,
        colonyId: 5,
        mineralId: 9,
        quantity: 72,
    }, {
        id: 6,
        colonyId: 6,
        mineralId: 8,
        quantity: 18,
    }, {
        id: 7,
        colonyId: 7,
        mineralId: 7,
        quantity: 777,
    }, {
        id: 8,
        colonyId: 1,
        mineralId: 6,
        quantity: 68,
    }, {
        id: 9,
        colonyId: 5,
        mineralId: 5,
        quantity: 54,
    }, {
        id: 10,
        colonyId: 3,
        mineralId: 4,
        quantity: 23,
    }, {
        id: 11,
        colonyId: 7,
        mineralId: 3,
        quantity: 23,
    }, {
        id: 12,
        colonyId: 5,
        mineralId: 2,
        quantity: 11,
    }, {
        id: 13,
        colonyId: 1,
        mineralId: 1,
        quantity: 10,
    }],

}

/* 
===================
* GETTER FUNCTIONS
===================
*/

export const getColonies = () => {
    return database.colonies.map(colony => ({ ...colony }))
}

export const getGovernors = () => {
    return database.governors.map(governor => ({ ...governor }))
}

export const getMinerals = () => {
    return database.minerals.map(mineral => ({ ...mineral }))
}

export const getColonyMinerals = () => {
    return database.colonyMinerals.map(mineral => ({ ...mineral }))
}

export const getFacilityMinerals = () => {
    return database.facilityMinerals.map(mineral => ({ ...mineral }))
}

export const getFacilities = () => {
    return database.facilities.map(facility => ({ ...facility }))
}
export const getCurrentTransientState = () => {
    return database.transientState
}




/* 
===================
* SETTER FUNCTIONS
===================
*/
export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setColony = (colonyId) => {
    database.transientState.selectedColony = colonyId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}


export const setGovernor = (governorId) => {
    database.transientState.selectedGovernor = governorId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setMineral = (mineralId) => {
    database.transientState.selectedMineral = mineralId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}


/* 
===============================
* STATE CHANGE - RE-RENDER HTML
===============================
*/
export const purchaseMineral = () => {
    let colonyMinerals = getColonyMinerals()
    let facilityMinerals = getFacilityMinerals()
    const FMorder = {}

    FMorder.facilityId = database.transientState.selectedFacility
    FMorder.mineralId = database.transientState.selectedMineral

    const foundFM = facilityMinerals.find(
        (facilityMineral) => {
            return FMorder.facilityId === facilityMineral.facilityId && FMorder.mineralId === facilityMineral.mineralId
        }
    )

    if (foundFM.quantity >= 1) {
        foundFM.quantity--
        const CMorder = {}
    
        const lastIndex = database.colonyMinerals.length - 1
        CMorder.id = database.colonyMinerals[lastIndex].id + 1
    
        CMorder.colonyId = database.transientState.selectedColony
        CMorder.mineralId = database.transientState.selectedMineral
    
    
        const foundCM = colonyMinerals.find(
            (colonyMineral) => {
                return CMorder.colonyId === colonyMineral.colonyId && CMorder.mineralId === colonyMineral.mineralId
            }
        )
    
        if (foundCM !== undefined) {
            foundCM.quantity++
        } else {
            CMorder.quantity = 1
            colonyMinerals.push(CMorder)
        }
    
        setFacilityMinerals(facilityMinerals)
        setColonyMinerals(colonyMinerals)
    } else {
        foundFM.quantity = 0
    }
}

const setColonyMinerals = (CMplaceholder) => {
    database.colonyMinerals = CMplaceholder
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
const setFacilityMinerals = (FMplaceholder) => {
    database.facilityMinerals = FMplaceholder
    document.dispatchEvent(new CustomEvent("stateChanged"))
}



/* 
====================
* EVENT LISTENERS
====================
*/

document.addEventListener("change", (event) => {
    if (event.target.name === "mineralRadio") {
        setMineral(parseInt(event.target.value))
    }
})

document.addEventListener("change", (event) => {
    if (event.target.name === "facility") {
        setFacility(parseInt(event.target.value))
    }
})

document.addEventListener("change", (event) => {
    if (event.target.name === "governor") {
        setColony(parseInt(event.target.value))
    }
})

document.addEventListener("change", (event) => {
    if (event.target.name === "governor") {
        setGovernor(parseInt(event.target.value))
    }
})



