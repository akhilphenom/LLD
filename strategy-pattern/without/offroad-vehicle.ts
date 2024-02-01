import { Vehicle } from "./vehicle";

class OffroadVehicle extends Vehicle {
    drive(): void {
        console.log('Driving aggressively')
    }
}