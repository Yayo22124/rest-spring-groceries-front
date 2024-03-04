import { Component, OnInit } from '@angular/core';

import { APIService } from '../../core/services/API/api.service';
import { ISale } from '../../core/interfaces/i-sale';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [MatCardModule, MatProgressSpinner],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss'
})
export class SalesComponent implements OnInit{
  public sales: ISale[] = [];

  constructor(
    private apiService: APIService
  ) {}

  ngOnInit(): void {
    this.getSales();
  }

  getSales() {
    this.apiService.getSales().subscribe(
      (data: ISale[]) => {
        console.log(data);
        
        this.sales = data;
      }
    )
  }
}
