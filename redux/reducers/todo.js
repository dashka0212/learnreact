const iniState = {}
export default function todo(state = iniState , action){
    switch(action.type){
        case 'testing' : console.log(action); return state;
        default : return state;
    }
}