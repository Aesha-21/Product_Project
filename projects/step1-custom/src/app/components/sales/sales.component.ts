import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SalesService, Sale } from '../../services/sales.service';

@Component({
  selector: 'app-sales',
  standalone: false,
 templateUrl: 'sales.component.html',
  // styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit{
saleForm!: FormGroup;
  sales: Sale[] = [];

  constructor(private fb: FormBuilder, private salesService: SalesService) {}

  ngOnInit(): void {
    this.saleForm = this.fb.group({
      party: ['', Validators.required],
      date: ['', Validators.required],
      nos: [0, Validators.required],
      purchasePrice: [0, Validators.required],
      sellingPrice: [0, Validators.required],
      deliveryDate: ['', Validators.required]
    });

    this.loadSales();
  }

  onSubmit(): void {
    if (this.saleForm.valid) {
      this.salesService.createSale(this.saleForm.value).subscribe(() => {
        this.loadSales();
        this.saleForm.reset();
      });
    }
  }

  loadSales(): void {
    this.salesService.getSales().subscribe(data => {
      this.sales = data;
    });
  }
}
