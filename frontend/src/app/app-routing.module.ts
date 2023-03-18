import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BensMoveisComponent } from './pages/bens-moveis/bens-moveis.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'bens-moveis', component: BensMoveisComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
