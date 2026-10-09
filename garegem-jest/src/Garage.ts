import { Car } from "./Car";

export class Garage {
  private cars: Car[];

  constructor() {
    this.cars = [];
  }

  public addCar(car: Car): void {
    const duplicate = this.cars.some(
      (storedCar) =>
        storedCar.getBrand() === car.getBrand() &&
        storedCar.getModel() === car.getModel() &&
        storedCar.getYear() === car.getYear()
    );

    if (duplicate) {
      throw new Error("O Cara não está na garagem");
    }

    this.cars.push(car);
    car.setStored(true);
  }

  public removeCar(car: Car): void {
    const index = this.cars.indexOf(car);

    if (index !== -1) {
      this.cars.splice(index, 1);
      car.setStored(false);
    }
  }

  public getCarCount(): number {
    return this.cars.length;
  }

  public findCarByModel(model: string): Car | undefined {
    return this.cars.find(
      (car) => car.getModel() === model
    );
  }
}