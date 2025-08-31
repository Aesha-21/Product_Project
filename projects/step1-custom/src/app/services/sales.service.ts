import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Sale {
  id?: number;
  party: string;
  date: string;
  nos: number;
  purchasePrice: number;
  purchaseTotal?: number;
  sellingPrice: number;
  sellingTotal?: number;
  difference?: number;
  deliveryDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class SalesService {

 private apiUrl = 'https://localhost:5001/api/sales'; // your .NET API

  constructor(private http: HttpClient) {}

  createSale(sale: Sale): Observable<any> {
    return this.http.post(this.apiUrl, sale);
  }

  getSales(): Observable<Sale[]> {
    return this.http.get<Sale[]>(this.apiUrl);
  }
}
