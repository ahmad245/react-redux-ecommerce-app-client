import { CategoryRepositoryAction, CategoryRepositoryCreate, CategoryRepositoryUpdate, CategoryRepositoryDelete, CategoryRepositoryGetAll, CategoryRepositoryGetById, CategoryRepositoryErrorAction } from "../actions";

export type ActionCategory=
|CategoryRepositoryAction
|CategoryRepositoryCreate
|CategoryRepositoryUpdate
|CategoryRepositoryDelete
|CategoryRepositoryGetAll
|CategoryRepositoryGetById
|CategoryRepositoryErrorAction
