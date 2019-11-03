import * as netAct from '../network';
export function testRed(data) {
    console.log(data);
    return {
        type : 'testing',
        data
    }
}
export function testReq() {
    return {
        type : 'TESTING'
    }
}
export function placeHold(){
    return netAct.fetchGet({REQUEST : 'jsonplace' , RESPONSE : 'holder'} , 'https://jsonplaceholder.typicode.com/todos');
}