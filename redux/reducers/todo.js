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
        default: return state;
    }
}