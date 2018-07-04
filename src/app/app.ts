import { listOfEmployees } from './dummydata';
import $ from 'jquery';

export class App {

  constructor(title: string){
    this.run();
  }

  run(): void {
    let newOption: JQuery = $('<option />');
    newOption.val(1).text('testie');
    $('#employees').append(newOption);
  }
}
