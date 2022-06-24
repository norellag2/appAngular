import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesDashboardComponent } from './articles/articles-dashboard/articles-dashboard.component';
import { CreateArticleComponent } from './articles/create-article/create-article.component';
import { UpdateArticleComponent } from './articles/update-article/update-article.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { CreateOfferComponent } from './offers/create-offer/create-offer.component';
import { OffersDashboardComponent } from './offers/offers-dashboard/offers-dashboard.component';
import { Pantalla404Component } from './pantalla404/pantalla404.component';
import { SessionComponent } from './session/session.component';
import { CreateVendorComponent } from './vendors/create-vendor/create-vendor.component';
import { VendorsDashboardComponent } from './vendors/vendors-dashboard/vendors-dashboard.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]}, //protección de rutas con canactivate (hemos creado nuevo archivo para esto con ng g g guards/auth)
  {path: 'articles', component: ArticlesDashboardComponent,canActivate: [AuthGuard]},
  {path: 'create-article', component: CreateArticleComponent,canActivate: [AuthGuard]},
  {path: 'update-article/:id', component: UpdateArticleComponent,canActivate: [AuthGuard]},    //  '/:' para parámetro de ruta
  {path: 'vendors', component: VendorsDashboardComponent,canActivate: [AuthGuard]},
  {path: 'create-vendor', component: CreateVendorComponent,canActivate: [AuthGuard]},
  {path: 'offers', component: OffersDashboardComponent,canActivate: [AuthGuard]},
  {path: 'create-offer', component: CreateOfferComponent,canActivate: [AuthGuard]},
  {path: 'session', component: SessionComponent}, //esta no se protege
  {path: '**', component: Pantalla404Component}  // esta es la ruta sumidero siempre debe ir la última
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
