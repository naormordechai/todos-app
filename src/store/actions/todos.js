import TodoService from '../../services/TodoService'
import * as actionTypes from './actionTypes'

const _setTodos = (todos) => {
    return {
        type: actionTypes.LOAD_TODOS,
        todos
    }
}

export const loadTodos = () => {
    return dispatch => {
        TodoService.query()
            .then(res => {
                dispatch(_setTodos(res.data))
            })
    }
}

const _addTodo = (todo) => {
    return {
        type: actionTypes.ADD_TODO,
        todo
    }
}

export const addTodo = (todo) => {
    return dispatch => {
        TodoService.addTodo(todo)
            .then(res => {
                dispatch(_addTodo(res.data))
            })
    }
}

const _deleteTodo = (id) => {
    return {
        type: actionTypes.REMOVE_TODO,
        id
    }
}

export const deleteTodo = (id) => {
    return dispatch => {
        TodoService.removeTodo(id)
            .then(res => {
                dispatch(_deleteTodo(id))
            })
    }
}

const _updateTodo = (todo) => {
    return {
        type: actionTypes.UPDATE_TODO,
        todo
    }
}

export const updateTodo = (todo) => {
    return dispatch => {
        TodoService.updateTodo(todo)
            .then(res => {
                // console.log('res', res);
                dispatch(_updateTodo(res.data))

            })
    }
}

const _getTodosSorted = (letter) => {
    return {
        type: actionTypes.GET_TODOS_SORTED,
        letter
    }
}

export const getTodosSorted = (letter) => {
    return dispatch => {
        dispatch(_getTodosSorted(letter))
    }
}