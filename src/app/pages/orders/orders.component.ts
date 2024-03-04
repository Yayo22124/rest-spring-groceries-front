import { Component, OnInit } from '@angular/core';

import { APIService } from '../../core/services/API/api.service';
import { IOrder } from '../../core/interfaces/i-order';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [MatCardModule, MatProgressSpinnerModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit {
  public orders: IOrder[] = [];

  constructor(
    private apiService: APIService
  ){}

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.apiService.getOrders().subscribe(
      (data: IOrder[]) => {
        console.log(data);
        
        this.orders = data;
      }
    )
  }

}
