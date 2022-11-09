import { Snack } from "./Models/Snack.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

  money = 0

  snacks = [
    new Snack(
      "snickers",
      1
    ),

    new Snack(
      "kitkat",
      1.25
    ),

    new Snack(
      "100grand",
      1.50
    ),

    new Snack(
      "peanuts",
      1.75
    ),

    new Snack(
      "jerky",
      2
    )
  ]
}






export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
