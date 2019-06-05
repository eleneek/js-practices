function CoffeeMachine(power, capacity) {
	let machinePower = power;
    this.getPower = function() {
        return machinePower;
    }
	this.setWaterAmount = function(amount) {
		if (amount < 0) {
			throw new Error("Value has to be positive.");
		}
		if (amount > capacity) {
			throw new Error("You can't put more water, than " + capacity);
		}
		waterAmount = amount;
	};
    
	this.getWaterAmount = function() {
		return waterAmount;
	};
}

const coffeeMachine = new CoffeeMachine(200, 500);
coffeeMachine.setWaterAmount(200);
console.log(coffeeMachine.getPower());
