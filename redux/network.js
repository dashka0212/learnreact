export function fetchGet(actions , url , header,data = {}){
    return dispatch => {
        dispatch(reqGet(actions , data))
        return fetch(url, {
            method: 'get',
            headers: header,
            credentials: 'same-origin'
        })
            .then(function (response) {
                return response.json();
            })
            .then(json => {
                dispatch(requestEnd(actions , json))
            })
            .catch(error => {
                console.log(error);
                // reduxConf.get('emitter').emit('system-errors',{msg:'Интернет холболтоо шалгана уу'});
                dispatch(requestEnd({success:false,error:error,data},threadID,actions))
            });
    }
}
function reqGet(actions , json){
    return {
        type : actions.REQUEST,
        json
    }
}
function requestEnd(actions , json){
    return {
        type : actions.RESPONSE,
        json
    }   
}