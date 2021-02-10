import { ActionAuth, ActionAutType } from ".."

export interface RepositoryState {
    loading: boolean;
    name:string;
    role:string;
    _id:string;
    email: string;
    token: string;
    error: string;

}

const INITIALSTATAUTH = {
    loading: false,
    name:'',
    role:'',
    _id:'',
    email: '',
    token: '',
    error: ''
}
export default (state: RepositoryState = INITIALSTATAUTH, action: ActionAuth): RepositoryState => {

    switch (action.type) {
        case ActionAutType.REGISTER_REPOSITORY:
            return { ...state, loading: true }
        case ActionAutType.REGISTER_REPOSITORY_SUCCESS:
            return { ...state, loading: false, ...action.payload }

        case ActionAutType.REGISTER_REPOSITORY_ERROR:
            return { ...state, loading: false, error: action.payload }


        case ActionAutType.LOGIN_REPOSITORY:
            return { ...state, loading: true }
        case ActionAutType.LOGIN_REPOSITORY_SUCCESS:
            return { ...state, loading: false, ...action.payload }

        case ActionAutType.LOGIN_REPOSITORY_ERROR:
            return { ...state, loading: false, error: action.payload }

        case ActionAutType.LOGOUT:
            return {...state,loading:false,email:'',token:'',error:'',name:'',role:'',_id:''}    
        default:
            return state;
    }
}