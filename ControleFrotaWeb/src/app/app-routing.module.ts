import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeiculosComponent } from './pages/veiculos/veiculos.component';
import { VisualizarOSComponent } from './pages/ordensServicos/visualizar-os/visualizar-os.component';
import { CadastrarVeiculoComponent } from './pages/veiculos/cadastrar-veiculo/cadastrar-veiculo.component';

const routes: Routes = [
  { path: '', component: VeiculosComponent },
  { path: 'VisualizarOS', component: VisualizarOSComponent},
  { path: 'CadastrarVeiculo', component: CadastrarVeiculoComponent},
  { path: '**', component: VeiculosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
