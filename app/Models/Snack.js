export class Snack {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    get ListTemplate() {
        return `<h3 class="col-1 p-2 btn btn-primary selectable" title="${this.name}">${this.name}-<span>${this.price}</span></h3>`
    }
}