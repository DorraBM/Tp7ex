import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employe } from '../employe';
import { EmployeServiceService } from '../employe-service.service';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {
 lesFonctions:string[]=['secretaire','ingénieur','Directeur','Developpeur','Designer'];
 employe:Employe=new Employe(0,"","","IT");
  constructor(private employeService:EmployeServiceService) { }
 onvider(f:NgForm)
 {
 f.reset({fonction:"secretaire",departement:"IT"});
 }
 onsubmit(f:NgForm)
 {return this.employeService.addNewEmploye(this.employe);

 }
  ngOnInit(): void {
  }
verifier(f:NgForm)
{
  return this.employeService.existeMatricule(this.employe.matricule);
}
}
