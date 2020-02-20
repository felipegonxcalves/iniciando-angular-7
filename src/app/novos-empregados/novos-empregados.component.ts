import { Component, OnInit } from '@angular/core';
import employees from '../employees';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'novos-empregados',
  templateUrl: './novos-empregados.component.html',
  styleUrls: ['./novos-empregados.component.css']
})
export class NovosEmpregadosComponent implements OnInit {

  employee = {
    name: '',
    salary: 0,
    bonus: 0
  };



  constructor(private employeeService: EmployeeService) {
    // setTimeout(() => {
    //   this.employee.name = 'Fetecno';
    // }, 3000);
  }

  ngOnInit() {
  }

  addEmpregado(event){
    const copy = Object.assign({}, this.employee);
    this.employeeService.addEmployee(copy);
  }

}
