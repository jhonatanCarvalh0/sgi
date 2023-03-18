import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SublevelMenuComponent } from './components/sidenav/sublevel-menu.component';
import { BensMoveisComponent } from './pages/bens-moveis/bens-moveis.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule } from '@angular/cdk/menu';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    SublevelMenuComponent,
    DashboardComponent,
    BensMoveisComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    OverlayModule,
    CdkMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
