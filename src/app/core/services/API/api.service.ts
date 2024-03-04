import { HttpClient } from '@angular/common/http';
import { ICustomer } from '../../interfaces/i-customer';
import { IEmployee } from '../../interfaces/i-employee';
import { IOrder } from '../../interfaces/i-order';
import { IProduct } from '../../interfaces/i-product';
import { ISale } from '../../interfaces/i-sale';
import { ISupplier } from '../../interfaces/i-supplier';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface ProductService {
  getProducts(): Observable<any[]>;
  getProducts(): Observable<null>;
  getProducts(): Observable<[]>;
}

@Injectable({
  providedIn: 'root'
})
export class APIService {
  private readonly apiUrl:string = "http://localhost:8080/groceries/";

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${this.apiUrl}products/`);
  }

  getEmployees(): Observable<IEmployee[]> {
    return this.httpClient.get<IEmployee[]>(`${this.apiUrl}employees/`);
  }

  getCustomers(): Observable<ICustomer[]> {
    return this.httpClient.get<ICustomer[]>(`${this.apiUrl}customers/`);
  }

  getSales(): Observable<ISale[]> {
    return this.httpClient.get<ISale[]>(`${this.apiUrl}sales/`);
  }

  getOrders(): Observable<IOrder[]> {
    return this.httpClient.get<IOrder[]>(`${this.apiUrl}orders/`);
  }

  getSuppliers(): Observable<ISupplier[]> {
    return this.httpClient.get<ISupplier[]>(`${this.apiUrl}suppliers/`);
  }
}
