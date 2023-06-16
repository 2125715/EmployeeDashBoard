import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../EmployeeService.service';
import { Employee } from '../models/Employee';

@Component({
  selector: 'app-viewdashboard',
  templateUrl: './viewdashboard.component.html',
  styleUrls: ['./viewdashboard.component.css']
})
export class ViewdashboardComponent implements OnInit {

  constructor(private EmployeeServiceInstances:EmployeeService) { }

  EmployeesData :Employee[] = [];

  ngOnInit() {
    this.EmployeesData = this.EmployeeServiceInstances.getEmoployees();

    this.EmployeeServiceInstances.EmployeesChanged
      .subscribe(
        (updatedEmployees: Employee[]) => {
          this.EmployeesData = updatedEmployees;
        }
      );
  }

  removeEmp(Emp:Employee){
    this.EmployeeServiceInstances.removeEmployee(Emp);
  }

}
