import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../../store/actions/index'
import TodoService from '../../services/TodoService'

class TodoEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todo: {
                title: '',
                id: null,
                isCompleted: null
            }

        }
    }

    // state = {
    //     todo: {
    //         title: '',
    //         id: null,
    //         isCompleted: null
    //     }

    // }

    componentDidMount() {
        this.loadTodo()
    }

    loadTodo = () => {
        if (this.props.match.params.id) {
            TodoService.loadTodo(this.props.match.params.id)
                .then(({ data }) => {
                    this.setState({
                        todo: data
                    })
                })
        }
    }

    handlerAddTodo = (todo) => {
        this.props.onAddTodo(todo);
        this.props.history.push('/todos')
    }

    handlerNameState = (ev) => {
        this.setState({
            todo: {
                ...this.state.todo,
                title: ev.target.value
            }
        })
    }

    render() {
        return (
            <section>
                <input type="text" value={this.state.todo.title} placeholder="add todo" onChange={this.handlerNameState} />
                <button onClick={() => this.handlerAddTodo(
                    {
                        title: this.state.todo.title,
                        id: Math.random() + '',
                        createdAt: Date.now(),
                        isCompleted: false
                    }
                )}>add</button>
                <button onClick={() => this.props.onUpdateTodo(this.state.todo)}>save</button>
            </section>
        )
    }
}

const mapPropsToDispatch = dispatch => {
    return {
        onAddTodo: (todo) => dispatch(actionCreators.addTodo(todo)),
        onUpdateTodo : (todo) => dispatch(actionCreators.updateTodo(todo))
    }
}

export default connect(null, mapPropsToDispatch)(TodoEdit)