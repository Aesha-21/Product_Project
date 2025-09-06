import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sales',
  templateUrl: 'sale.component.html',
  standalone: false
  // styleUrls: ['./sales.component.css']
})
export class SalesComponent {
  sale: any = {
    party: '',
    date: '',
    nos: 0,
    purchasePrice: 0,
    sellingPrice: 0,
    deliveryDate: ''
  };

  submittedSale: any;
  apiUrl = 'https://localhost:7165/api/sales';

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post(this.apiUrl, this.sale).subscribe({
      next: (res) => {
        this.submittedSale = res; 
      },
      error: (err) => console.error(err)
    });
  }
}

// import { Component, OnInit } from '@angular/core';
// import { SalesService, Sale } from '../../services/sales.service';

// @Component({
//   selector: 'app-sales',
//   standalone: false,
//   templateUrl: 'sale.component.html'
// })
// export class SalesComponent implements OnInit {

//   sale: Sale = {
//     party: '',
//     date: '',
//     nos: 0,
//     purchasePrice: 0,
//     purchaseTotal: 0,
//     sellingPrice: 0,
//     sellingTotal: 0,
//     difference: 0,
//     deliveryDate: ''
//   };

//   salesList: Sale[] = [];

//   constructor(private salesService: SalesService) {}

//   ngOnInit(): void {
//     this.loadSales();
//   }

//   submitSale() {
//     this.salesService.addSale(this.sale).subscribe({
//       next: (data) => {
//         alert('Sale added successfully!');
//         this.salesList.push(data);
//         this.resetForm();
//       },
//       error: (err) => {
//         console.error(err);
//         alert('Error adding sale');
//       }
//     });
//   }

//   loadSales() {
//     this.salesService.getSales().subscribe(data => {
//       this.salesList = data;
//     });
//   }

//   resetForm() {
//     this.sale = {
//       party: '',
//       date: '',
//       nos: 0,
//       purchasePrice: 0,
//       purchaseTotal: 0,
//       sellingPrice: 0,
//       sellingTotal: 0,
//       difference: 0,
//       deliveryDate: ''
//     };
//   }
// }
