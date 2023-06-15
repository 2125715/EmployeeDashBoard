import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../EmployeeService.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor(private EmployeeServiceInstances:EmployeeService) { }

  ngOnInit(): void {
  }

  @ViewChild('empId' )EmpId!: ElementRef;
  @ViewChild('fName' )Fname!: ElementRef;

  addEmp(){
    this.EmployeeServiceInstances.addEmployee(this.EmpId.nativeElement.value,this.Fname.nativeElement.value)
  }

  ViewEmp(){
    alert(this.EmployeeServiceInstances.getEmoployees())
  }

  openModel(){
     const modelDiv=document.getElementById('myModal');
     if(modelDiv!=null){
      modelDiv.style.display='block';
     }
  }

  closeModel(){
    const modelDiv=document.getElementById('myModal');
    if(modelDiv!=null){
     modelDiv.style.display='none';
    }
 }
}
