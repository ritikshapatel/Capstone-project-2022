import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {  HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PricingComponent } from './pricing/pricing.component';
import { LoginComponent } from './login/login.component';
import { ContactUSComponent } from './contact-us/contact-us.component';
import { AboutUSComponent } from './about-us/about-us.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  { path: '', component : HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUSComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'contact-us', component: ContactUSComponent },
  { path: 'login', component: LoginComponent },
  { path: 'service', component: ServiceComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, FooterComponent, PricingComponent, LoginComponent, ContactUSComponent, AboutUSComponent, ServiceComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routes) , HttpClientModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
