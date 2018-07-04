import { Vehicle } from "../common/vehicle";

export class Car extends Vehicle {
  name: string;
  model: string;

  constructor(n: string, m: string, gross: number | undefined, netto: number | undefined){
    super(gross, netto);
    this.name = n;
    this.model = m;
  }
}
