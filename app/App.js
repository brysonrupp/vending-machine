import { ValuesController } from "./Controllers/ValuesController.js";
import { VendorsController } from "./Controllers/VendingController.js";

class App {
  // valuesController = new ValuesController();
  vendingController = new VendorsController();
}

window["app"] = new App();
