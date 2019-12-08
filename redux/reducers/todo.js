import {
    getUser,
    getTodos,
    singleNews,
    getNews
} from '../actionTypes';
const iniState = {
    users : [],
    todos : [],
    single : {},
    loader : false,
    newss: []
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
        case singleNews.REQUEST:
            return {...state , loader : true};
        case singleNews.RESPONSE:
            return {...state , loader : false, single : action.json};
        case getNews.RESPONSE:
            return {...state , newss: action.json.medee}
        default: return state;
    }
}