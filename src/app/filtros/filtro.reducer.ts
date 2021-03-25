import { createReducer, on } from '@ngrx/store';
import { setFilterAction, filtrosValidos } from './filtro.actions';

export const initialState: filtrosValidos = 'todos';

const _filterReducer = createReducer(initialState,
    on( setFilterAction, (state: filtrosValidos, {filtro}) => state = filtro)
    );


export function filterReducer(state, action) {
        return _filterReducer(state, action);
      }
