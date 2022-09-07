import { appState } from "../AppState.js";
import { Vender } from "../Models/vender.js";
import { vendersService } from "../Services/venderServices.js";

function _drawVending() {
  let venders = appState.venders;
  let template = "";
  venders.forEach((v) => (template += v.Template));
  document.getElementById("venderItems").innerHTML = template;
}

function _drawCart() {
  let cartItem = appState.venders;
  let template = "";
  cartItem.forEach((c) => {
    if (c.quantity > 0) {
      template += c.cartTemplate;
    }
  });
  document.getElementById("cart").innerHTML = template;
}

function _drawTotal() {
  let cart = appState.venders;
  let total = 0;
  cart.forEach((c) => {
    total += c.cost * c.quantity;
    document.getElementById("cartTotal").innerText = total;
  });
}

function _update() {
  _drawCart();
  _drawTotal();
  _drawVending();
}

export class VendersController {
  // place calls you want to run on load in the controller constructor
  constructor() {
    _update();
  }
  buyItems() {
    vendersService.buyItems();
    _update();

    console.log("controller buy");
  }

  deleteItem(name) {
    vendersService.deleteItem(name);
    _update();
  }
  getVender(name) {
    vendersService.getVender(name);
    _update();
  }
}
