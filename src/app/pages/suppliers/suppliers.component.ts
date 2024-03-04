import { Component, OnInit } from '@angular/core';

import { APIService } from '../../core/services/API/api.service';
import { ISupplier } from '../../core/interfaces/i-supplier';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-suppliers',
  standalone: true,
  imports: [MatCardModule, MatProgressSpinnerModule],
  templateUrl: './suppliers.component.html',
  styleUrl: './suppliers.component.scss'
})
export class SuppliersComponent implements OnInit{
  public suppliers: ISupplier[] = [];

  constructor(private apiService: APIService){}

  ngOnInit(): void {
    this.getSuppliers();
  }
  getSuppliers() {
    this.apiService.getSuppliers().subscribe(
      (data: ISupplier[]) => {
        console.log(data);
        this.suppliers = data;
        
      }
    )
  }

}
