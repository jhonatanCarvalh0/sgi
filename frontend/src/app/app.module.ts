//angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule } from '@angular/cdk/menu';

//routing
import { AppRoutingModule } from './app-routing.module';

//root component
import { AppComponent } from './app.component';
//components
import { BodyComponent } from './components/body/body.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SublevelMenuComponent } from './components/sidenav/sublevel-menu.component';

//pages
import { BensMoveisComponent } from './pages/bens-moveis/bens-moveis.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { IngressoComponent } from './pages/bens-moveis/sub-pages/ingresso/ingresso.component';
import { IncorporacaoComponent } from './pages/bens-moveis/sub-pages/incorporacao/incorporacao.component';
import { InventarioComponent } from './pages/bens-moveis/sub-pages/inventario/inventario.component';
import { DesfazimentoBaixaComponent } from './pages/bens-moveis/sub-pages/desfazimento-baixa/desfazimento-baixa.component';
import { IngressoSaidaTemporariaComponent } from './pages/bens-moveis/sub-pages/ingresso-saida-temporaria/ingresso-saida-temporaria.component';
import { ProcedimentosContabeisComponent } from './pages/bens-moveis/sub-pages/procedimentos-contabeis/procedimentos-contabeis.component';
import { AvaliacaoComponent } from './pages/bens-moveis/sub-pages/procedimentos-contabeis/sub-pages/avaliacao/avaliacao.component';
import { ReavaliacaoComponent } from './pages/bens-moveis/sub-pages/procedimentos-contabeis/sub-pages/reavaliacao/reavaliacao.component';
import { ReducaoAoValorRecuperavelComponent } from './pages/bens-moveis/sub-pages/procedimentos-contabeis/sub-pages/reducao-ao-valor-recuperavel/reducao-ao-valor-recuperavel.component';
import { DepreciacaoComponent } from './pages/bens-moveis/sub-pages/procedimentos-contabeis/sub-pages/depreciacao/depreciacao.component';
import { AmortizacaoComponent } from './pages/bens-moveis/sub-pages/procedimentos-contabeis/sub-pages/amortizacao/amortizacao.component';
import { ExaustaoComponent } from './pages/bens-moveis/sub-pages/procedimentos-contabeis/sub-pages/exaustao/exaustao.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProfileComponent } from './pages/settings/sub-pages/profile/profile.component';
import { CustomizeComponent } from './pages/settings/sub-pages/customize/customize.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    SublevelMenuComponent,
    DashboardComponent,
    BensMoveisComponent,
    HeaderComponent,
    IngressoComponent,
    IncorporacaoComponent,
    InventarioComponent,
    DesfazimentoBaixaComponent,
    IngressoSaidaTemporariaComponent,
    ProcedimentosContabeisComponent,
    AvaliacaoComponent,
    ReavaliacaoComponent,
    ReducaoAoValorRecuperavelComponent,
    DepreciacaoComponent,
    AmortizacaoComponent,
    ExaustaoComponent,
    SettingsComponent,
    ProfileComponent,
    CustomizeComponent,
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
