import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VeiculosComponent } from './pages/veiculos/veiculos.component';
import { CadastrarOSComponent } from './pages/ordensServicos/cadastrar-os/cadastrar-os.component';
import { VisualizarOSComponent } from './pages/ordensServicos/visualizar-os/visualizar-os.component';
import { EditarOSComponent } from './pages/ordensServicos/editar-os/editar-os.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CadastrarVeiculoComponent } from './pages/veiculos/cadastrar-veiculo/cadastrar-veiculo.component';


@NgModule({
  declarations: [
    AppComponent,
    VeiculosComponent,
    CadastrarOSComponent,
    VisualizarOSComponent,
    EditarOSComponent,
    CadastrarVeiculoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
