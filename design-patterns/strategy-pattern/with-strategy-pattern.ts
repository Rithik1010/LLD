interface TravelStrategy {
    getTravelTime(distance: number): number;
    // Interfaces are used to specify the method signature rather than implementing it
    // The purpose of using interfaces is only to use its attributes and methods publicly.
}

class CarStrategy implements TravelStrategy {
    private speed: number;
    constructor(speed: number = 100) {
        this.speed = speed;
    }
    getTravelTime(distance: number): number {
        return distance / this.speed;
    }
}

class AutoStrategy implements TravelStrategy {
    private speed: number;
    constructor(speed: number = 75) {
        this.speed = speed;
    }
    getTravelTime(distance: number): number {
        return distance / this.speed;
    }
}

class BikeStrategy implements TravelStrategy {
    private speed: number;
    constructor(speed: number = 50) {
        this.speed = speed;
    }
    getTravelTime(distance: number): number {
        return distance / this.speed;
    }
}

export class TravelContext {
    strategy!: TravelStrategy; // Composition

    setStrategy(strategy: TravelStrategy) {
        this.strategy = strategy;
    }

    getTravelTime(distance: number) {
        return this.strategy.getTravelTime(distance);
    }
}

const travelContext = new TravelContext();
const carStrategy = new CarStrategy();
const autoStrategy = new AutoStrategy();
const bikeStrategy = new BikeStrategy();

travelContext.setStrategy(carStrategy);
console.log(travelContext.getTravelTime(300));

travelContext.setStrategy(autoStrategy);
console.log(travelContext.getTravelTime(300));

travelContext.setStrategy(bikeStrategy);
console.log(travelContext.getTravelTime(300));
