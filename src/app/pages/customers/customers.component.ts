import { Component, OnInit } from '@angular/core';

import { APIService } from '../../core/services/API/api.service';
import { ICustomer } from '../../core/interfaces/i-customer';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent implements OnInit{
  public customers: ICustomer[] = [];
  constructor(
    private apiService: APIService
  ) {

  }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.apiService.getCustomers().subscribe(
      (data: ICustomer[]) => {
        console.log(data);
        this.customers = data;
      }
    )
  }
}
