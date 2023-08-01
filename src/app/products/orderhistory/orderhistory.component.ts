import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.css']
})
export class OrderhistoryComponent implements OnInit{
  orderhistory:any;
  constructor(private route:Router,private ps:ProductService){}
  ngOnInit(): void {
    this.ps.orderedData().subscribe(
      (data)=>{this.orderhistory=data}
    )
  }
  
  BackToProductsdata(){
    console.log(this.orderhistory);
    this.route.navigate(['/products'])
  }
  
}
