import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private tarefas: string[] =[];

  constructor() { }

  addtarefa(tarefa: string){
    this.tarefas.push(tarefa);
    console.log("TAREFAS ADICIONADAS",
      this.tarefas);
  }

}
