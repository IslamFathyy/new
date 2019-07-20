import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TrendsComponent } from './trends/trends.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'' , redirectTo:'/Home',pathMatch:"full"},
  {path:'Home',component:HomeComponent},
  {path:'Category',component:CategoryComponent},
  {path:'Home/Category',component:CategoryComponent},
  {path:'Trends',component:TrendsComponent},
  {path:'About-Us',component:AboutusComponent},
  {path:'Contact-Us',component:ContactComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
