class DrinkMachine{
    serveDrink(category){
        if(category==="Non-Veg"){
            console.log("Serving Complementary Drink")
        }
        else{
            console.log("Serving Ice Cream")
        }
    }
}

module.exports = DrinkMachine;