import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{
  paymentMethod!: string;
  carts:any;
  methods: string[] = ['Cash On Delivery', 'Phone Pay','Paytm','Google Pay', 'Credit Card', 'Debit Card'];
  constructor(private route:Router,private toastr:ToastrService,private ps:ProductService){}
  ngOnInit(): void {
    this.ps.cartdata().subscribe(
      (data)=>{this.carts=data }
      )
  }
  confirmPayment(){
    this.ps.addtoOrderhistory(this.carts).subscribe(
      (data)=>{console.log(data)}
     )
this.toastr.success('Order Placed Success fully')
this.route.navigate(['/products'])
  }
}
