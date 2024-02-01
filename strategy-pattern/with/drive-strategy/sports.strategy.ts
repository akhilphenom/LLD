import { DriveStrategy } from "./drive.strategy";

export class SportsStrategy implements DriveStrategy{
    drive(): void {
        console.log('Driving fast')
    }
}