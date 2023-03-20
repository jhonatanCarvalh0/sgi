//angular
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule } from '@angular/cdk/menu';

//routing
import { AppRoutingModule } from './app-routing.module';

//root component
import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ComponentsModule } from "./components/components.module";
//components

//pages

@NgModule({
    declarations: [
        AppComponent,
        AuthLayoutComponent,
        AdminLayoutComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        NgbModule,
        OverlayModule,
        CdkMenuModule,
        ComponentsModule
    ]
})
export class AppModule {}
