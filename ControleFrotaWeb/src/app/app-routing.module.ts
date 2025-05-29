import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeiculosComponent } from './pages/veiculos/veiculos.component';
import { VisualizarOSComponent } from './pages/ordensServicos/visualizar-os/visualizar-os.component';

const routes: Routes = [
  { path: '', component: VeiculosComponent },
  { path: 'VisualizarOS', component: VisualizarOSComponent},
  { path: '**', component: VeiculosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
