
export interface User{
    email:string;
    password:string;
}

export interface UserLogin{
    email:string;
    token:string;
}

export interface UserRegister extends UserLogin{
    
}



export interface LoginReposiotoryAction{
    type:ActionAutType.LOGIN_REPOSITORY
} 

export interface LoginRepositorySuccessAction{
    type:ActionAutType.LOGIN_REPOSITORY_SUCCESS;
    payload:UserLogin
}
export interface LoginRepositoryErrorAction{
    type:ActionAutType.LOGIN_REPOSITORY_ERROR;
    payload:string
}

export interface LogoutRepositoryAction{
    type:ActionAutType.LOGOUT
}


export interface RegisterRepositoryAction{
    type:ActionAutType.REGISTER_REPOSITORY;
  
}
export interface RegisterRepositorySuccessAction{
    type:ActionAutType.REGISTER_REPOSITORY_SUCCESS;
    payload:UserRegister
  
}
export interface RegisterRepositoryErrorAction{
    type:ActionAutType.REGISTER_REPOSITORY_ERROR;
    payload:string
}

export enum ActionAutType{
    LOGIN_REPOSITORY='login_repository',
    LOGIN_REPOSITORY_SUCCESS='login_repository_success',
    LOGIN_REPOSITORY_ERROR='login_repository_error',

    LOGOUT='logout',

    REGISTER_REPOSITORY='register_repository',
    REGISTER_REPOSITORY_SUCCESS='register_repository_success',
    REGISTER_REPOSITORY_ERROR='register_repository_error',

}