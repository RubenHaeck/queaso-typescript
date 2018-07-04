import { IPerson } from './../common/interfaces';
import { Unique } from '../common/unique';

export class Employee implements IPerson {
  firstName: string;
  lastName: string;

  constructor(fn: string, ln: string){
    this.firstName = fn;
    this.lastName = ln;
  }

  getUniqueCode(): Unique {
    return new Unique();
  }
}
