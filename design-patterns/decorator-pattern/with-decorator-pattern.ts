interface Coffee {
    cost(): number;
    description(): string;
}

// Concrete Component
class SimpleCoffee implements Coffee {
    cost(): number {
        return 5;
    }
    description(): string {
        return "Simple Coffee";
    }
}

// Decorator
class CoffeeDecorator implements Coffee {
    protected decoratedCoffee: Coffee;

    constructor(coffee: Coffee) {
        this.decoratedCoffee = coffee;
    }
    cost(): number {
        return this.decoratedCoffee.cost();
    }
    description(): string {
        return this.decoratedCoffee.description();
    }
}

// Concrete Decorators
class MilkDecorator extends CoffeeDecorator {
    cost(): number {
        return super.cost() + 2;
    }
    description(): string {
        return super.description() + ", Milk";
    }
}

class SugarDecorator extends CoffeeDecorator {
    cost(): number {
        return super.cost() + 1;
    }
    description(): string {
        return super.description() + ", Sugar";
    }
}

const simpleCoffee = new SimpleCoffee();
const milkCoffee = new MilkDecorator(simpleCoffee);
const sugarCoffee = new SugarDecorator(simpleCoffee);
const sugarMilkCoffee = new SugarDecorator(milkCoffee);

console.log(simpleCoffee.cost());
console.log(simpleCoffee.description());
console.log(milkCoffee.cost());
console.log(milkCoffee.description());
console.log(sugarCoffee.cost());
console.log(sugarCoffee.description());
console.log(sugarMilkCoffee.cost());
console.log(sugarMilkCoffee.description());
