import { createAction, props } from '@ngrx/store';

export const updateAction = createAction('[TODO] Actualizar estado', props<{text: string, id?: number}>());

export const toggleAction = createAction('[TODO] Cambiar estado Toggle', props<{id: number}>());

export const deleteAction = createAction('[TODO] Eliminar tarea', props<{id: number}>());

export const toggleAllAction = createAction('[TODO] Cambiar todos los items de estado Toggle', props<{completed: boolean}>());

export const deleteCompletedAction = createAction('[TODO] Eliminar tareas completadas');
