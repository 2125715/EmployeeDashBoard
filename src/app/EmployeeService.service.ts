import { EventEmitter } from "@angular/core";
import { Employee } from "./models/Employee";

export class EmployeeService{
    EmployeesChanged = new EventEmitter<Employee[]>();

    Employees : Employee[] =
    [
        new Employee(123123,"Yash"),
        new Employee(18923,"Ajay"),
    ]; 

    getEmoployees(){
        return this.Employees.slice();   
    }

    addEmployee(newEmpId :number, newEmpFname: string ){
       var newEmp  = new Employee(newEmpId,newEmpFname);
        this.Employees.push(newEmp);

        // this.Employees.forEach(emp => {
        //     alert(emp.EmpFname)
        // });
         
        this.EmployeesChanged.emit(this.Employees.slice())
         
    }
}