export class Company {
  private name: string = 'Queaso Systems';
  private location: string = 'Ghent';

  constructor(){

  }

  public getInfo(): { name: string, location: string} {
    return {
      name: this.name,
      location: this.location
    };
  }
}
