function CoffeeMachine(power, capacity) {
	let waterAmount = 0;
    let WATER_HEAT_CAPACITY = 4200;
    let runTime = false;
	
    function getTimeToBoil() {
		return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }
	
    this.setWaterAmount = function(amount) {
		if (amount < 0) {
			throw new Error("Value has to be positive");
		}
		if (amount > capacity) {
			throw new Error("You can't put more water, than " + capacity);
		}
		waterAmount = amount;
	};
	
    function onReady() {
        console.log('Coffee is ready');
    }
    
	this.run = function() {
        setTimeout(()=>{
            runTime = false;
            onReady()
        }, getTimeToBoil());
        runTime = true;
    };
    
    this.isRunning = function() {
        return runTime;
    }

    this.setOnReady = function(func) {
        onReady = func;
        console.log('Coffee is ready');
    }
}

let coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(100);

console.log('Before: ' + coffeeMachine.isRunning()); // Before: false

coffeeMachine.run();

console.log('In progress: ' + coffeeMachine.isRunning()); // In progress: true

coffeeMachine.setOnReady(function() {
	console.log('After: ' + coffeeMachine.isRunning()); // After: false
});