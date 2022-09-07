import { Value } from "./Models/Value.js";
import { Vender } from "./Models/vender.js";
import { EventEmitter } from "./Utils/EventEmitter.js";
import { isValidProp } from "./Utils/isValidProp.js";
import { loadState } from "./Utils/Store.js";

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState("values", Value);
  /** @type {import('./Models/Vender').Vender[]} */
  venders = [
    new Vender(
      "sushi",
      5,
      "this is some yummy sushi",
      "https://cdn.britannica.com/52/128652-050-14AD19CA/Maki-zushi.jpg",
      0
    ),
    new Vender(
      "jeffe",
      5,
      "ole el jeffe",
      "https://media-cdn.tripadvisor.com/media/photo-s/17/c4/68/18/20190525-213625-largejpg.jpg",
      0
    ),
  ];
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop);
    return target[prop];
  },
  set(target, prop, value) {
    isValidProp(target, prop);
    target[prop] = value;
    target.emit(prop, value);
    return true;
  },
});
