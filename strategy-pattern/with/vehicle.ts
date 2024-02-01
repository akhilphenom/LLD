import { DriveStrategy } from "./drive-strategy/drive.strategy";

export class Vehicle {
    private driveObject: DriveStrategy;
    constructor(
        driveObject: DriveStrategy
    ) {
        this.driveObject = driveObject
    }
    drive() {
        this.driveObject.drive();
    }
}