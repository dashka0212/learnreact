import {
    getUser,
    getTodos,
    singleNews
} from '../actionTypes';
const iniState = {
    users : [],
    todos : [],
    single : {}
}
export default function app(state = iniState , action){
    switch(action.type){
        case 'testing':
            return {
                ...state,
                email : action.data
            };
        case 'TESTING' :
            return {
                ...state,
                email : ''
            };
        case getUser.REQUEST : 
            return state;
        case getUser.RESPONSE : 
            return {...state , users : action.json};
        case getTodos.RESPONSE:
            return {...state , todos : action.json};
        case singleNews.RESPONSE:
            return {...state , single : action.json};
        default: return state;
    }
}