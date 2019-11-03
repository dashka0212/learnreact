export function fetchGet(actions , url , data = {}){
    return dispatch => {
        dispatch(startGet(actions , data));
        fetch(url).
            then(res => res.json()).
            then((dta) => 
            {
                return dispatch(endGet(actions , dta));
            }
            ).catch();
    }
}
function startGet(actions , json){
    return {
        type : actions.REQUEST,
        json
    }
}
function endGet(actions , json){
    return {
        type : actions.RESPONSE,
        json
    }
}