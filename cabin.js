const PizzaShop = require("./pizza-shop");
const DrinkMachine = require("./drink-machine");
const prompt = require("prompt-sync")();

const pizzashop = new PizzaShop();
const drink = new DrinkMachine();

pizzashop.on("order", (category, topping) => {
  console.log(
    `Order Received: Baking ${category} pizza with ${topping}`
  );
  drink.serveDrink(category);
});

let continueOrder = true;

while (continueOrder) {
  console.log(`
Welcome to Pizza Shop
1. Veg Pizzas
2. Non-Veg Pizzas
0. Exit
`);

  const categoryChoice = Number(prompt("Enter category: "));

  if (categoryChoice === 0) {
    continueOrder = false;
    break;
  }

  let category;
  let topping;

  switch (categoryChoice) {
    case 1:
      category = "Veg";
      console.log(`1. Mushroom
2. Cheese
3. Corn
4. Spicy`);
      switch (Number(prompt("Select topping: "))) {
        case 1: topping = "Mushroom"; break;
        case 2: topping = "Cheese"; break;
        case 3: topping = "Corn"; break;
        case 4: topping = "Spicy"; break;
        default:
          console.log("Invalid topping");
          continue;
      }
      break;

    case 2:
      category = "Non-Veg";
      console.log(`1. Chicken
2. Pepperoni
3. Sausage`);
      switch (Number(prompt("Select topping: "))) {
        case 1: topping = "Chicken"; break;
        case 2: topping = "Pepperoni"; break;
        case 3: topping = "Sausage"; break;
        default:
          console.log("Invalid topping");
          continue;
      }
      break;

    default:
      console.log("Invalid category");
      continue;
  }

  pizzashop.order(category, topping);
  pizzashop.displayOrderNumber();
}

console.log("Thank you! Visit again !!");
