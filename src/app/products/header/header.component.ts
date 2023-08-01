import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { productdata } from '../product-list/products';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
productsinfo!:productdata[];
products:any;
count:any;
 constructor(private ps:ProductService,private ar:ActivatedRoute){}
  ngOnInit(): void {
    this.ps.getProducts().subscribe(data=>{this.productsinfo=data;this.ar.queryParamMap.subscribe((qparams)=>{
      let category=qparams.get('category')
      if(category){
        this.products=this.productsinfo.filter(
          (p,i,parr)=>{ 
            return p.category===category
          })
          
          
      }
      else{
        this.products=this.productsinfo;
      }
    })})
  }


addtocart(singleprod:any){
  this.ps.createdata(singleprod).subscribe(
    (data:any)=>{
    console.log(data);
  })
 
  this.ps.cartdata().subscribe(
    (data:any)=>{
      let cartlen=data.length;
      localStorage.setItem('itemscount',cartlen);
      this.count=(localStorage.getItem('itemscount'))
    }
  )
}
increment(p:any){ p.qty=p.qty+1}
decrement(p:any){
  if(p.qty!=1){
  p.qty-=1
}}
}
