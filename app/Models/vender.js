export class Vender {
  constructor(name, cost, desc, image, quantity) {
    this.name = name;
    this.cost = cost;
    this.desc = desc;
    this.image = image;
    this.quantity = quantity;
  }
  get cartTemplate() {
    return `
      <div class="col-4">
      <i class="mdi mdi-delete fs-4" 
      onclick="app.vendersController.deleteItem('${this.name}')"
      >${this.name}</i>
      </div>
      <div class="col-4">${this.quantity}</div>
      <div class="col-4">$<span>${this.cost * this.quantity}</span></div>
    `;
  }

  get Template() {
    return `
    <div class="card m-2 elevation-1" style="width: 18rem;">
  <img class="card-img-top" id="imageContainer" src="${this.image}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${this.name}</h5>
    <p class="card-text">${this.desc}</p>
    <a href="#" class="btn btn-primary" onclick="app.vendersController.getVender('${this.name}')">${this.cost}$</a>
  </div>
</div>
    `;
  }
}
