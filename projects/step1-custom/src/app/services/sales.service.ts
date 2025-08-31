import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Sale {
  party: string;
  date: string;
  nos: number;
  purchasePrice: number;
  purchaseTotal: number;
  sellingPrice: number;
  sellingTotal: number;
  difference: number;
  deliveryDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  private apiUrl = 'https://localhost:7165/api/sales'; // Your .NET API URL

  constructor(private http: HttpClient) { }

  // POST (create new sale)
  addSale(sale: Sale): Observable<Sale> {
    return this.http.post<Sale>(this.apiUrl, sale);
  }

  // GET (fetch all sales)
  getSales(): Observable<Sale[]> {
    return this.http.get<Sale[]>(this.apiUrl);
  }
}
