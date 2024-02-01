import { DriveStrategy } from "./drive.strategy";

export class OffroadStrategy implements DriveStrategy {
    drive(): void {
        console.log('Driving aggressively')
    }
}