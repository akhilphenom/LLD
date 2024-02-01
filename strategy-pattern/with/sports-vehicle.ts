import { SportsStrategy } from "./drive-strategy/sports.strategy";
import { Vehicle } from "./vehicle";

export class SportsVehicle extends Vehicle {
    constructor() {
        super(new SportsStrategy());
    }
}