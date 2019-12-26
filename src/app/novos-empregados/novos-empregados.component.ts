import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'novos-empregados',
  templateUrl: './novos-empregados.component.html',
  styleUrls: ['./novos-empregados.component.css']
})
export class NovosEmpregadosComponent implements OnInit {

  name = "Felipe Gonçalves";
  empregados = [];

  constructor() { }

  ngOnInit() {
  }

  addEmpregado(){
    this.empregados.push(this.name);
    console.log(this.empregados);
  }

}
