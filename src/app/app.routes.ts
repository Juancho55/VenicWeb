import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddNewThirdComponent } from './add-new-third/add-new-third.component';
import { CathegoriesComponent } from './cathegories/cathegories.component';

export const routes: Routes = [
     { path: '', component: LoginComponent },
     { path: 'Home', component: HomeComponent },
     { path: 'AddNewThird', component: AddNewThirdComponent },
     { path: 'Category', component: CathegoriesComponent }
];
