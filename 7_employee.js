export class Employee 
{
    constructor(name, email, salary)
    {
        this.name = name;
        this.email = email;
        this.salary = salary;
    }

    getDetails(){
        return `Name: ${this.name}, Email: ${this.email}, Salary: ${this.salary}\n`;
    }
}