export class Car {
    private brand: string;
    private model: string;
    private year: number;
    private stored: boolean;
  
    constructor(brand: string, model: string, year: number) {
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.stored = false;
    }
  
    public getBrand(): string {
      return this.brand;
    }
  
    public getModel(): string {
      return this.model;
    }
  
    public getYear(): number {
      return this.year;
    }
  
    public setStored(stored: boolean): void {
      this.stored = stored;
    }
  
    public isStored(): boolean {
      return this.stored;
    }
  }