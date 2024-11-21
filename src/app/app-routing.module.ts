import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PaginaInicialComponent} from "./componentes/pagina-inicial/pagina-inicial.component";
import {VisualizarTarefasComponent} from "./componentes/visualizar-tarefas/visualizar-tarefas.component";
import {InfoGeraisComponent} from "./componentes/info-gerais/info-gerais.component";

const routes: Routes = [
  {path:"",redirectTo:"pagina-inicial", pathMatch:"full"},
  {path:"pagina-inicial", component: PaginaInicialComponent},
  {path:"visualizar-tarefas", component: VisualizarTarefasComponent},
  {path:"info-gerais", component: InfoGeraisComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
