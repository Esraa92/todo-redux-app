import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app-state.reducer';
import * as actions from '../todo.actions';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  @ViewChild('inputTodo') inputTodo;
  todo: Todo[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
   /*  this.store.select('todos').subscribe(todos => this.todo = todos); */
  }

  crearTodo(texto: string) {
    if (texto) {
      this.inputTodo.nativeElement.value = '';
      this.store.dispatch(actions.updateAction({text: texto}));
    }
  }

}
