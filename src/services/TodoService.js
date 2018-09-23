import axios from 'axios'
const BASE_URL = 'http://localhost:3000/todos';

async function query() {
    return await axios.get(BASE_URL)
}

async function updateTodo(todo) {
    return await axios.put(`${BASE_URL}/${todo.id}`, todo)
}

async function addTodo(todo) {
    return await axios.post(`${BASE_URL}`, todo)
}

async function loadTodo(id) {
    return axios.get(`${BASE_URL}/${id}`)
}

async function removeTodo(id) {
    return await axios.delete(`${BASE_URL}/${id}`)
}


export default {
    query,
    addTodo,
    loadTodo,
    removeTodo,
    updateTodo
}