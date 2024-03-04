import { Component, OnInit } from '@angular/core';

import { APIService } from '../../core/services/API/api.service';
import { IEmployee } from '../../core/interfaces/i-employee';
import { MatCardModule } from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [MatCardModule, MatProgressSpinnerModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent implements OnInit{
  public employees: IEmployee[] = [];

  constructor(
    private apiService: APIService
  ) {

  }
  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.apiService.getEmployees().subscribe(
      (data: IEmployee[]) => {
        // En este punto, 'data' es el arreglo de productos de la API
        console.log(data);
        
        this.employees = data;
      },
      (error) => {
        // Manejar errores aquí si es necesario
        console.error('Error al obtener productos:', error);
      }
    );
  }
  
}
