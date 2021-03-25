import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { filtrosValidos } from '../filtros/filtro.actions';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(value: Todo[], filtro: filtrosValidos): Todo[] {

    switch (filtro) {
      case 'pendientes':
       return value.filter(f => !f.iscomplete);
       case 'completados':
       return value.filter(f => f.iscomplete);
      default:
        return value;
    }

  }

}
