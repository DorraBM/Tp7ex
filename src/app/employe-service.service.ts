import { Injectable } from '@angular/core';
import { Employe } from './employe';


@Injectable({
  providedIn: 'root'
})
export class EmployeServiceService {

  employe:Employe[]=[
    {matricule:0,nom:"",fonction:"",departement:""}
  ];
  	getEmployes() 
  {
     return this.employe;
  }
  existeMatricule(mat: number)
    {if (this.employe.find(element=>element.matricule==mat))
      {return false;}
      else
      return true;

    }
    addNewEmploye(e:Employe)
    { if(this.existeMatricule(e.matricule))
      { 
      let p=Object.assign({},e);
    this.employe.push(p);
      }
    }
  constructor() { }
}
