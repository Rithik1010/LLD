interface Coffee {
    cost(): number;
    description(): string;
}

export class SimpleCoffee implements Coffee {
    cost(): number {
        return 5;
    }
    description(): string {
        return "Simple Coffee ";
    }
}

export class MilkCoffee implements Coffee {
    cost(): number {
        return 7;
    }
    description(): string {
        return "Simple Coffee + Milk";
    }
}

export class SugarCofee implements Coffee {
    cost(): number {
        return 6;
    }
    description(): string {
        return "Simple Coffee + Sugar";
    }
}

const simpleCoffee = new SimpleCoffee();
console.log(simpleCoffee.cost());
console.log(simpleCoffee.description());

const milkCoffee = new MilkCoffee();
console.log(milkCoffee.cost());
console.log(milkCoffee.description());

const sugarCoffee = new SugarCofee();
console.log(sugarCoffee.cost());
console.log(sugarCoffee.description());
