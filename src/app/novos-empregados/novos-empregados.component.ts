import { Component, OnInit } from '@angular/core';
import employees from '../employees';

@Component({
  selector: 'novos-empregados',
  templateUrl: './novos-empregados.component.html',
  styleUrls: ['./novos-empregados.component.css']
})
export class NovosEmpregadosComponent implements OnInit {

  name = '';
  salary = 0;
  bonus = 0;
  empregados = employees;

  constructor() {
    setTimeout(() => {
      this.name = 'Fetecno';
    }, 3000);
  }

  ngOnInit() {
  }

  addEmpregado(event){
    const bonus = this.salary >= 1000 ? 0 : this.bonus;
    this.empregados.push({name: this.name, salary: this.salary, bonus: bonus});
    console.log(this.empregados);
  }

}
