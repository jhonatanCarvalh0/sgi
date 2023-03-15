import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//root
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//components
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './pages/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
