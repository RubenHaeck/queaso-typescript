import { Unique } from './unique';

export interface IPerson {
  firstName: string;
  lastName: string;
  getUniqueCode(): Unique;
}

interface Person {
  name: string;
  age: number;
}

export interface IOptionText {

}

// export type OfType<T> = { danny: T, [type: string]: T};
// let t: OfType<number> = { danny: 5, type: (value: string) => 0 };
// let a = { danny: 5, getAll: () => true};
// a.getAll()


// let cb: (value: string, value2: number) => void;

// export type GuidString = string & { isGuid: string};

// export interface IGuid  {
//   toLowerCase: () => string;
// }

// function isGuid(g: any): g is IGuid {
//   return (g.length === 36);
// }

// let uniqueId: GuidString = '038b2575-84be-40ad-bccd-1e6fee438b71';
// let output = isGuid(uniqueId);

