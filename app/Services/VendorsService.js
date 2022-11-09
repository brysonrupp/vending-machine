import { appState } from "../AppState.js"

class VendorsService {

    addMoney() {
        appState.money += .25
        console.log("Money", money)
    }


    // not working atm
    subMoney() {
        if (appState.money > appState.price)
            appState.money - appState.price
    }

}

export const vendorsService = new VendorsService