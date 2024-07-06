import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddNewThirdComponent } from './add-new-third/add-new-third.component';
import { CathegoriesComponent } from './cathegories/cathegories.component';
import { ProductsComponent } from './products/products.component';
import { SoldsComponent } from './solds/solds.component';
import { ConfigComponent } from './config/config.component';

export const routes: Routes = [
     { path: '', component: LoginComponent },
     { path: 'Home', component: HomeComponent },
     { path: 'AddNewThird', component: AddNewThirdComponent },
     { path: 'Category', component: CathegoriesComponent },
     { path: 'Products', component: ProductsComponent },
     { path: 'Solds', component: SoldsComponent },
     { path: 'Configurations', component: ConfigComponent }
];
