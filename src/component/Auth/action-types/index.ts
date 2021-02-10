import { LoginReposiotoryAction, LoginRepositorySuccessAction, LoginRepositoryErrorAction, LogoutRepositoryAction, RegisterRepositoryAction, RegisterRepositorySuccessAction, RegisterRepositoryErrorAction } from "../actions";

export type ActionAuth=
|LoginReposiotoryAction
|LoginRepositorySuccessAction
|LoginRepositoryErrorAction
|LogoutRepositoryAction
|RegisterRepositoryAction
|RegisterRepositorySuccessAction
|RegisterRepositoryErrorAction
