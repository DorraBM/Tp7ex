import { Component, OnInit } from '@angular/core';
import { Employe } from '../employe';
import { EmployeServiceService } from '../employe-service.service';

@Component({
  selector: 'app-listemployes',
  templateUrl: './listemployes.component.html',
  styleUrls: ['./listemployes.component.css']
})
export class ListemployesComponent implements OnInit {
litemploye:Employe[]=[];
  constructor(private service:EmployeServiceService) { }

  ngOnInit(): void {
    this.litemploye=this.service.getEmployes();
  }

}
