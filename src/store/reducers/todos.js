import * as actionTypes from '../actions/actionTypes'

const initialState = {
    todos: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_TODOS:
            return {
                ...state,
                todos: action.todos
            }
        case actionTypes.ADD_TODO:
            const newTodo = {
                ...action.todo
            }
            return {
                ...state,
                todos: state.todos.concat(newTodo)
            }
        case actionTypes.REMOVE_TODO:
            const updatedTodos = state.todos.filter(todo => todo.id !== action.id);
            return {
                ...state,
                todos: updatedTodos
            }
        case actionTypes.UPDATE_TODO:
            const index = state.todos.findIndex(todo => todo.id === action.todo.id);
            const newArray = [...state.todos]
            newArray[index] = action.todo
            return {
                ...state,
                todos: newArray
            }

    }
    return state
}

export default reducer