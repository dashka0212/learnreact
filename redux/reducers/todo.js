const iniState = {
    username : '',
    password:'',
    email:''
}
export default function app(state = iniState , action){
    switch(action.type){
        case 'testing':
            console.log(action);
            return {
                ...state,
                email : action.data
            };
        case 'TESTING' :
            console.log(action);
            return {
                ...state,
                email : ''
            };
        case 'jsonplace': 
            console.log(action);
            return state;
        case 'holder': console.log(action);
            return state;
        default: return state;
    }
}