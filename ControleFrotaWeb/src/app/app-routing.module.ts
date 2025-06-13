import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeiculosComponent } from './pages/veiculos/veiculos.component';
import { VisualizarOSComponent } from './pages/ordensServicos/visualizar-os/visualizar-os.component';
import { CadastrarVeiculoComponent } from './pages/veiculos/cadastrar-veiculo/cadastrar-veiculo.component';
import { CadastrarOSComponent } from './pages/ordensServicos/cadastrar-os/cadastrar-os.component';
import { EditarOSComponent } from './pages/ordensServicos/editar-os/editar-os.component';

const routes: Routes = [
  { path: '', component: VeiculosComponent },
  { path: 'VisualizarOS/:id', component: VisualizarOSComponent},
  { path: 'CadastrarVeiculo', component: CadastrarVeiculoComponent},
  { path: 'CadastrarOs/:id', component: CadastrarOSComponent},
  { path: 'EditarOs/:id', component: EditarOSComponent},
  { path: '**', component: VeiculosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
