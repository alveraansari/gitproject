import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TbarComponent } from './tbar/tbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {path:'home',component:HomeComponent  },
  {path:'tbar',component:TbarComponent  },
  {path:'aboutus',component:AboutusComponent  },
  {path:'clients',component:ClientsComponent  },
  {path:'contactus',component: ContactusComponent },
  {path:'portfolio',component: PortfolioComponent },
  {path:'services',component:  ServicesComponent},
 {path:'cart',component: CartComponent},
  {path:'header',component:HeaderComponent},
  {path:'login',component:LoginComponent},
  {path:'footer',component:FooterComponent},
  {path:'signup',component:SignupComponent},
  {path: '', redirectTo:'home',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
