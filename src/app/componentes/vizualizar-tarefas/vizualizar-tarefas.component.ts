import { Component, OnInit } from '@angular/core';
import {TarefaService} from "../../app-core/servicos/tarefa-service.service";

@Component({
  selector: 'app-vizualizar-tarefas',
  templateUrl: './vizualizar-tarefas.component.html',
  styleUrls: ['./vizualizar-tarefas.component.css']
})
export class VizualizarTarefasComponent implements OnInit {

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
  }

}
