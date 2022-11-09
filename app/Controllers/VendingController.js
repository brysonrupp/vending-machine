import { appState } from "../AppState.js"
import { vendorsService } from "../Services/VendorsService.js"
import { setHTML, setText } from "../Utils/Writer.js"




// function _drawSnacks() {
//     let snack = appState.Snacks
//     let template = ''
//     snack.forEach(s => {
//         template += `<h2>${s.name}</h2>
//         <h4>price: ${s.price}</h4>`
//     })
//     setHTML('Snacks.list', template)
// }

function _drawSnacks() {
    let found = appState.snacks
    let template = ''
    found.forEach(f => template += f.ListTemplate)
    setHTML('snacks', template)
}

// Make a draw function for total coins.

function _drawMoney() {
    console.log(appState.money)
    let money = appState.money
    setText('money', appState.money)
}







export class VendorsController {

    constructor() {
        appState.on('money', _drawMoney)
        _drawMoney()

        _drawSnacks()
        // Make an appState.on that watches when drawMoney line 43
    }

    // Go to services, and make the functionality of addMoney. Use Micks reference on line 29 of the Gotcha services.
    addMoney() {
        vendorsService.addMoney()
    }

    subMoney() {
        vendorsService.subMoney()
    }

}