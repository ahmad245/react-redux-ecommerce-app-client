import { ProductRepositoryAction, ProductRepositoryUpdateAction, ProductRepositoryDeleteAction, ProductRepositoryGetAllAction, ProductRepositoryGetByIdAction, ProductRepositoryErrorAction, ProductRepositroyCreateAction } from "../actions";



export type ActionProduct=
|ProductRepositoryAction
|ProductRepositroyCreateAction
|ProductRepositoryUpdateAction
|ProductRepositoryDeleteAction
|ProductRepositoryGetAllAction
|ProductRepositoryGetByIdAction
|ProductRepositoryErrorAction