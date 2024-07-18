type mode = "car" | "auto" | "bike";

export class TravelContext {
    getTravelTime(mode: mode, distance: number): number {
        let time = 0;
        switch (mode) {
            case "car":
                const carSpeed = 100;
                time = distance / carSpeed;
                break;
            case "auto":
                const autoSpeed = 50;
                time = distance / autoSpeed;
                break;
            case "bike":
                const bikeSpeed = 25;
                time = distance / bikeSpeed;
                break;
            default:
                throw new Error("Mode of travel is not acceptable.");
        }
        return time;
    }
}

const travelContext = new TravelContext();

const carTravelTime = travelContext.getTravelTime("car", 500);
const autoTravelTime = travelContext.getTravelTime("auto", 500);
const bikeTravelTime = travelContext.getTravelTime("bike", 500);

console.log(carTravelTime);
console.log(autoTravelTime);
console.log(bikeTravelTime);
