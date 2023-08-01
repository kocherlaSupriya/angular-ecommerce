import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';

import { DeliveryComponent } from './delivery/delivery.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
import { HeaderComponent } from './header/header.component';
import { PaymentComponent } from './payment/payment.component';
import { FormsGuard } from '../forms.guard';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ProductListComponent },
      { path:'header',component:HeaderComponent},
      { path: 'cart', component: CartComponent },
      { path:'delivery',component:DeliveryComponent,canDeactivate:[FormsGuard]},
      { path:'payment',component:PaymentComponent},
      { path:'orderhistory',component:OrderhistoryComponent}  
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
