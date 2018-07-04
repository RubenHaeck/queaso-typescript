export class Vehicle {
  gross: number | undefined;
  net: number | undefined;

  constructor(g: number | undefined, n: number | undefined){
    this.gross = g;
    this.net = n;
  }

  public getTare(): number | undefined {
    if (this.gross && this.net){
      return this.gross - this.net;
    }
  }

}
