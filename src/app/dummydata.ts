import { Employee } from "./company/employee";
import { Car } from './car/car';

export var listOfEmployees: Array<Employee> = new Array<Employee>();
listOfEmployees.push(new Employee('Ruben','Haeck'));
listOfEmployees.push(<Employee>{lastName: 'De Meyer', firstName: 'Jeroen'});

export var listOfCars: Car[] = [];
listOfCars.push(new Car('Opel', 'Insigna', 25000, 24000));

