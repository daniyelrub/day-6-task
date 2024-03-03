

class UberCalculator {
    constructor(baseFare, costPerKm, costPerMinute) {
        this.baseFare = baseFare;
        this.costPerKm = costPerKm;
        this.costPerMinute = costPerMinute;
    }

    calculatePrice(distance, time) {
        const distanceCost = this.costPerKm * distance;
        const timeCost = this.costPerMinute * time;
        const totalCost = this.baseFare + distanceCost + timeCost;
        return totalCost;
    }
}

// Example usage:
const uberCalculator = new UberCalculator(5, 2, 1); // Base fare: $5, Cost per km: $2, Cost per minute: $1
const distance = 10; // Distance in kilometers
const time = 20; // Time in minutes
const totalPrice = uberCalculator.calculatePrice(distance, time);
console.log("Total price:", totalPrice);
