import { Component, OnInit } from '@angular/core';

import { APIService } from '../../core/services/API/api.service';
import { IProduct } from '../../core/interfaces/i-product';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatProgressSpinnerModule, MatCardModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  public products: IProduct[] = [];

  constructor(
    private apiService: APIService
  ) {

  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.apiService.getProducts().subscribe(
      (data: IProduct[]) => {
        // En este punto, 'data' es el arreglo de productos de la API
        console.log(data);
        
        this.products = data;
      },
      (error) => {
        // Manejar errores aquí si es necesario
        console.error('Error al obtener productos:', error);
      }
    );
  }
}
