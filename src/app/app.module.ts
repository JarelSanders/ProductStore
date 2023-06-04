import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MainComponent } from './components/main/main.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { SalesComponent } from './components/sales/sales.component';
import { ProductsComponent } from './components/products/products.component';
// import { SighUpComponent } from './sigh-up/sigh-up.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    NotFoundComponent,
    MainComponent,
    SignUpComponent,
    ShoppingCartComponent,
    SalesComponent,
    ProductsComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
