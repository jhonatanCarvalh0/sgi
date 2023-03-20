//routing
import { AuthLayoutRoutes } from './auth-layout.routing';

//Modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';


//Components
import { LoginComponent } from 'src/app/pages/login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule
  ]
})
export class AuthLayoutModule { }
