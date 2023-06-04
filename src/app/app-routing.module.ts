import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MainComponent } from './components/main/main.component';
// import { SignUpComponent } from './components/sign-up/sign-up.component'; 
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SalesComponent } from './components/sales/sales.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'sales', component: SalesComponent},
  {path: 'shoppingcart', component: ShoppingCartComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},
  // {path: 'signup', component: SignUpComponent}
  // { path: '', redirectTo: '/login', pathMatch: 'full'},
  // {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// https://www.youtube.com/watch?v=ibn2yAomxp8
// app-router
