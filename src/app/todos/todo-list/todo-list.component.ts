import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app-state.reducer';
import { Todo } from '../models/todo.model';
import * as actions from '../../filtros/filtro.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todosList: Todo[] = [];
  filtroActual: actions.filtrosValidos;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
   /*  this.store.select('todos').subscribe(t => this.todosList = t); */
   this.store.subscribe(({todos, filtro}) => {
     this.todosList = todos;
     this.filtroActual = filtro;
   });
  }

}
