import { Governors } from "./governors.js"
import { Facilities } from "./facilities.js"
import { cartBox } from "./cart.js"
import { facilityMineralList } from "./facilityMinerals.js"
import { colonyMineralList } from "./colonyMinerals.js"
import { getCurrentTransientState } from "./database.js"

export const Exomine = () => {
    let transientState = getCurrentTransientState()
    return `
        <header class="header">
            <h1 class="title">Solar System Mining Marketplace</h1>
        </header>
        <article class="topBox">
            <section class="choicesBox">
                <div>
                    <h2>Choose Governor</h2>
                    ${Governors()}
                </div>
                <div>
                    <h2>Choose Facility</h2>
                    ${Facilities()}
                </div>
            </section>
            <section class="colonyInventoryBox">
                <h2>Colony Mineral Inventory</h2>
                ${colonyMineralList(transientState.selectedColony)}
            </section>
        </article>
        <article class="bottomBox">
            <section class="facilityMineralBox">
                <h2>Facility Minerals for Sale</h2>
                ${facilityMineralList(transientState.selectedFacility)}
            </section>
            <section class="cartBox">
                <h2 id="cart-title">Space Cart</h2>
                ${cartBox()}
                
                <button class="button-85" role="button">Purchase Mineral</button>
            </section>
        </article>
    `
}
