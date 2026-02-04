const PizzaShop = require("./pizza-shop")
const DrinkMachine=require("./drink-machine")

const pizzashop = new PizzaShop()
const drink = new DrinkMachine()

pizzashop.on("order",(size,toppings)=>{
    console.log(`Order Received Baking ${size} pizza with the ${toppings} `)
    drink.serveDrink(size);
})

pizzashop.order("large","mushrooms")
pizzashop.displayOrderNumber()
pizzashop.order("small","mutton")
pizzashop.displayOrderNumber()