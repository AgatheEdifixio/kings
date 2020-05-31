import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FunfactsComponent } from './funfacts/funfacts.component';
import { GenealogieComponent } from './genealogie/genealogie.component';
import { RoisComponent } from './rois/rois.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes : Routes =[
  { path: '', component: HomeComponent},
  { path: 'funfacts', component: FunfactsComponent },
  { path: 'genealogie', component: GenealogieComponent},
  { path: 'rois-de-france', component: RoisComponent}
]; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FunfactsComponent,
    GenealogieComponent,
    RoisComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
