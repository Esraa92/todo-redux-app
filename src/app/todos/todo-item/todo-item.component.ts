import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app-state.reducer';
import { Todo } from '../models/todo.model';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('inputFisico') txtinputFisico: ElementRef;
  chkCompletado: FormControl;
  txtInput: FormControl;
  isEditing = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.iscomplete);
    this.txtInput = new FormControl(this.todo.text, Validators.required);

    this.chkCompletado.valueChanges.subscribe(valor =>  this.store.dispatch(actions.toggleAction({id: this.todo.id})));
  }

  editar() {
    this.isEditing = true;
    this.txtInput.setValue(this.todo.text);
    setTimeout(() => {
      this.txtinputFisico.nativeElement.select();
    }, 1);
  }

  saveText() {
    this.isEditing = false;
    const newText = this.txtinputFisico.nativeElement.value;
    // validaciones
    if (this.txtInput.invalid || newText === this.todo.text) {return; }
    this.store.dispatch(actions.updateAction({id: this.todo.id, text: newText}));
  }

  removeItem() {
    this.store.dispatch(actions.deleteAction({id: this.todo.id}));
  }

}
