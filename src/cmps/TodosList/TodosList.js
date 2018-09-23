import React from 'react'
import TodoPreview from '../TodoPreview/TodoPreview'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as actionCreators from '../../store/actions/index'
import './TodoList.css'

class TodoList extends React.Component {

    constructor(){
        super()
        this.myRef = React.createRef();
    }

    state = {
        filter:''
    }


    updateTodo = (todo) => {
        todo.isCompleted = !todo.isCompleted
        this.props.onUpdateTodo(todo)
    }

    handlerDeleteTodo = (ev, id) => {
        ev.stopPropagation();
        this.props.onDeleteTodo(id)
    }

    hanlderEditTodo = (id) => {
        this.props.history.push('/todos')
    }

    goo = (e) => {
        e.stopPropagation()
    }

    foo = (ev) => {
        // console.log(ev.target.value);
        // console.log(this.myRef.current.value);
        return ev.target.value
        
        
    }

    render() {
        var todos = [...this.props.todos];
        switch (this.props.sort.typeSort) {
            case ('ABC'):
                todos = [...todos].sort((a, b) => a.title > b.title)
                break;
            case ('TIME'):
                todos = [...todos].sort((a, b) => a.createdAt < b.createdAt)
                break;
            default: todos = [...todos]
        }
        if (this.props.sort.mode === 'done') {
            todos = todos.filter(todo => todo.isCompleted === true)
        } else if (this.props.sort.mode === 'alive') {
            todos = [...todos].filter(todo => todo.isCompleted === false)
        } else {
            todos = [...todos]
        }
        if (this.props.sort.term) {
            todos = [...todos].filter(todo => {
                 return todo.title.toLocaleLowerCase().includes(this.props.sort.term)
            })
        }


        return (
            <section>
                {/* <input type="text" ref={this.myRef} onChange={event => this.foo(event)}/> */}
                <ul>
                    {todos.map(todo => (
                        <li onClick={() => this.updateTodo(todo)} className="flex space-evenly mb card" key={todo.id}>
                        <Link onClick={this.goo} to={`/edit/${todo.id}`}>edit</Link>
                        <TodoPreview todo={todo} />
                            <button onClick={(e) => this.handlerDeleteTodo(e, todo.id)}>delete</button>
                        </li>
                    ))}
                </ul>
            </section>
        )
    }
}

const mapPropsToDispatch = dispatch => {
    return {
        onDeleteTodo: (id) => dispatch(actionCreators.deleteTodo(id)),
        onUpdateTodo: (todo) => dispatch(actionCreators.updateTodo(todo))
    }
}


export default connect(null, mapPropsToDispatch)(TodoList)