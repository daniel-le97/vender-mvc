import { VendersController } from "./Controllers/venderController.js";

class App {
  vendersController = new VendersController();
}

window["app"] = new App();
