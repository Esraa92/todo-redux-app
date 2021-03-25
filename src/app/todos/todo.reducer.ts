import { createReducer, on } from '@ngrx/store';
import { toggleAction, deleteAction, updateAction, toggleAllAction, deleteCompletedAction } from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
     new Todo('Flokito'),
     new Todo('Flokito2'),
  /*  new Todo('Flokito2'), */
];

const _todoReducer = createReducer(initialState,
    on(deleteAction, (state, {id}) =>  state.filter( t => t.id !== id)),
    on(deleteCompletedAction, (state) =>  state.filter( t => !t.iscomplete)),
    on(toggleAction, (state, {id}) => {
      return state.map(t => {
        if (t.id === id) {
          return {
            ...t,
            iscomplete: !t.iscomplete
          };
        } else {
          return t;
        }
      });
    }),
    on(toggleAllAction, (state, {completed}) => state.map(t => {
      return {
        ...t,
        iscomplete: completed
      };
    } )),
    on(updateAction, (state, {id, text}) => {
      if (id) {
        return state.map(t => {
          if (t.id === id) {
            return {
              ...t,
              text: text
            };
          } else {
            return t;
          }
        });
      }else {
        return [...state, new Todo(text)];
      }
    })
  );

export function todoReducer(state, action) {
    return _todoReducer(state, action);
  }
