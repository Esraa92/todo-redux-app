import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app-state.reducer';
import * as actions from '../../filtros/filtro.actions';
import { deleteCompletedAction } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: actions.filtrosValidos;
  filtros: actions.filtrosValidos[] =  ['todos', 'completados', 'pendientes'];
  totalPendientes: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
/*  this.store.select('filtro').subscribe(filtro => this.filtroActual = filtro);
    this.store.select('todos').subscribe(t => this.totalPendientes = t.filter(i => i.iscomplete === false).length); */
    // Lo mismo que lo anterior pero abreviado
    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
      this.totalPendientes = state.todos.filter(i => !i.iscomplete).length;
    });
  }

  setFiltro(item) {
    this.store.dispatch(actions.setFilterAction({filtro: item}));
  }

  borrarCompletados() {
    this.store.dispatch(deleteCompletedAction());
  }

}
