const EventEmitter = require("node:events")

class PizzaShop extends EventEmitter{
    constructor(){
        super()
        this.orderNumber=0;
    }
    order(category,toppings){
        this.orderNumber++;
        this.emit("order",category,toppings)
    }
    displayOrderNumber(){
        console.log(`Current Order Number is ${this.orderNumber}`)
    }
}

module.exports= PizzaShop;