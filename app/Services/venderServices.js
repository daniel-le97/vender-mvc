import { appState } from "../AppState.js";
import { Vender } from "../Models/vender.js";

class VendersService {
  getVender(name) {
    
    let vender = appState.venders.find((v) => v.name == name);
    console.log(vender);
    vender.quantity++;
  }
  deleteItem(name) {
    let item = appState.venders.find((i) => i.name == name);
    console.log(item);
    item.quantity--;
  }
  buyItems() {
    appState.venders.forEach((v) => {
      v.quantity = 0;
    });
    console.log("hello");
  }
}

// NOTE export services as const so they are now un-changeable
export const vendersService = new VendersService();
