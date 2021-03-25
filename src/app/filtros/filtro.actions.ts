import { createAction, props } from '@ngrx/store';

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

export const setFilterAction = createAction('[Filtro] Cambiar filtro', props<{filtro: filtrosValidos}>());
