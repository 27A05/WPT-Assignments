// 2) in Employee.js file 
//    create Employee class 
//     take firstName , lastName , email , designation 
//      basicSalary 
//    input from constructor 
   
//    in Employee class 
//      write display method which display employee details
//    write setter and getter methods for each variable 

// create index.js file 
//    in that file import Employee class 
//    create Object of Employee with help of Constructor and display Employee details 

export class Employee
{
    constructor(firstname, lastName, email, designation, basicSalary)
    {
        this.firstname = firstname;
        this.lastName = lastName;
        this.email = email;
        this.designation = designation;
        this.basicSalary = basicSalary;
    }

    getFirstName()
    {
        return this.firstname; 
    }
    getLastname()
    {
        return this.lastName;
    }
    getEmail()
    {
        return this.email;
    }
    getDesignation()
    {
        return this.designation;
    }
    getBasicSalary()
    {
        return this.basicSalary;
    }

    setFirstname(firstname)
    {
        this.firstname = firstname;
    }
    setLastname(lastname)
    {
        this.lastName = lastName;
    }
    setemail(email)
    {
        this.email = email;
    }
    setdesignation(designation)
    {
        this.designation = designation;
    }
    setbasicSalary(basicSalary)
    {
        this.basicSalary = basicSalary;
    }

    display()
    {
        console.log("Employee Details: ");
        console.log("First Name:", this.firstname);
        console.log("Last Name:", this.lastName);
        console.log("Email Id:", this.email);
        console.log("Designation:", this.designation);
        console.log("Basic Salary:", this.basicSalary);

    }
}

// modules.exports = Employee;
// {
//     console.log("defaultFunction");
// }