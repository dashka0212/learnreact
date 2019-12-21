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
export function postData(actions , url , data = {}){
    return dispatch => {
        dispatch(startGet(actions , data));
        fetch(url , {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            credentials:'same-origin',
            body: JSON.stringify(data)
        }).
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