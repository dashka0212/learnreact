import * as network from '../network';
import * as actions from '../actionTypes';
export function testRed(data) {
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
export function getUsers(){
    let url = 'https://jsonplaceholder.typicode.com/posts';
    return network.fetchGet(actions.getUser , url);
}
export function postSingle(id){
    let url = 'https://jsonplaceholder.typicode.com/posts/' + id;
    return network.fetchGet(actions.singleNews , url);
} 
export function getTodos(id){
    let url = 'https://jsonplaceholder.typicode.com/todos?userId=' + id;
    return network.fetchGet(actions.getTodos , url);
}
export function getNewss(){
    let url = 'http://localhost:8081/news/all';
    return network.fetchGet(actions.getNews , url);
}