import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PaginaInicialComponent} from "./componentes/pagina-inicial/pagina-inicial.component";
import {VizualizarTarefasComponent} from "./componentes/vizualizar-tarefas/vizualizar-tarefas.component";

const routes: Routes = [
  {path:"",redirectTo:"pagina-inicial", pathMatch:"full"},
  {path:"pagina-inicial", component: PaginaInicialComponent},
  {path:"vizualizar-tarefas", component: VizualizarTarefasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
