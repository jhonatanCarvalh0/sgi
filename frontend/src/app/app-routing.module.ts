import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BensMoveisComponent } from './pages/bens-moveis/bens-moveis.component';
import { DesfazimentoBaixaComponent } from './pages/bens-moveis/sub-pages/desfazimento-baixa/desfazimento-baixa.component';
import { IncorporacaoComponent } from './pages/bens-moveis/sub-pages/incorporacao/incorporacao.component';
import { IngressoSaidaTemporariaComponent } from './pages/bens-moveis/sub-pages/ingresso-saida-temporaria/ingresso-saida-temporaria.component';
import { IngressoComponent } from './pages/bens-moveis/sub-pages/ingresso/ingresso.component';
import { InventarioComponent } from './pages/bens-moveis/sub-pages/inventario/inventario.component';
import { AmortizacaoComponent } from './pages/bens-moveis/sub-pages/procedimentos-contabeis/sub-pages/amortizacao/amortizacao.component';
import { AvaliacaoComponent } from './pages/bens-moveis/sub-pages/procedimentos-contabeis/sub-pages/avaliacao/avaliacao.component';
import { DepreciacaoComponent } from './pages/bens-moveis/sub-pages/procedimentos-contabeis/sub-pages/depreciacao/depreciacao.component';
import { ExaustaoComponent } from './pages/bens-moveis/sub-pages/procedimentos-contabeis/sub-pages/exaustao/exaustao.component';
import { ReavaliacaoComponent } from './pages/bens-moveis/sub-pages/procedimentos-contabeis/sub-pages/reavaliacao/reavaliacao.component';
import { ReducaoAoValorRecuperavelComponent } from './pages/bens-moveis/sub-pages/procedimentos-contabeis/sub-pages/reducao-ao-valor-recuperavel/reducao-ao-valor-recuperavel.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CustomizeComponent } from './pages/settings/sub-pages/customize/customize.component';
import { ProfileComponent } from './pages/settings/sub-pages/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'bens-moveis', component: BensMoveisComponent },
  { path: 'bens-moveis/ingresso', component: IngressoComponent },
  { path: 'bens-moveis/incorporacao', component: IncorporacaoComponent },
  { path: 'bens-moveis/inventario', component: InventarioComponent },
  {
    path: 'bens-moveis/desfazimento-baixa',
    component: DesfazimentoBaixaComponent,
  },
  {
    path: 'bens-moveis/ingresso-saida-temporaria',
    component: IngressoSaidaTemporariaComponent,
  },
  {
    path: 'bens-moveis/procedimentos-contabeis/avaliacao',
    component: AvaliacaoComponent,
  },
  {
    path: 'bens-moveis/procedimentos-contabeis/reavaliacao',
    component: ReavaliacaoComponent,
  },
  {
    path: 'bens-moveis/procedimentos-contabeis/reducao-ao-valor-recuperavel',
    component: ReducaoAoValorRecuperavelComponent,
  },
  {
    path: 'bens-moveis/procedimentos-contabeis/depreciacao',
    component: DepreciacaoComponent,
  },
  {
    path: 'bens-moveis/procedimentos-contabeis/amortizacao',
    component: AmortizacaoComponent,
  },
  {
    path: 'bens-moveis/procedimentos-contabeis/exaustao',
    component: ExaustaoComponent,
  },
  {
    path: 'settings/profile',
    component: ProfileComponent,
  },
  {
    path: 'settings/customize',
    component: CustomizeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
