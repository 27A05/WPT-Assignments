import fs from 'fs';
import { Employee } from './7_employee.js';

let emp = new Employee("Aaron", "abc@mail.com", 50000);

fs.appendFileSync("Employee.txt", emp.getDetails());

console.log("Employee data appended");