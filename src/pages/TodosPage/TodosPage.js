import React from 'react'
import { connect } from 'react-redux'
import * as actionCreatoes from '../../store/actions/index'
import TodosList from '../../cmps/TodosList/TodosList'
import TodoFilter from '../../cmps/TodoFilter/TodoFilter'

class TodosPage extends React.Component {

    componentDidMount() {
        this.props.onLoadTodos()
    }

    state = {
        typeSort: '',
        mode: '',
        term: ''
    }

    handlerSortTodos = (ev) => {
        this.setState({
            ...this.state,
            typeSort: ev.target.value
        })
    }

    hanlderTerm = (ev) => {
        this.setState({
            ...this.state,
            term: ev.target.value
        })
    }

    handlerDiffrentMode = (ev) => {
        // console.log(ev.target.value);
        this.setState({
            ...this.state,
            mode: ev.target.value
        })

    }

    onSortTodos = (f) => {
        console.log(f);

    }


    render() {
        return (
            <section>
                {/* <TodoFilter click={filter => this.props.onSortTodos(filter)}/> */}
                <input type="text" onChange={this.hanlderTerm} />
                <input type="radio" name="sorted" value="done" onChange={this.handlerDiffrentMode} />done
                <input type="radio" name="sorted" value="alive" onChange={this.handlerDiffrentMode} />alive
                <input type="radio" name="sorted" value="all" onChange={this.handlerDiffrentMode} />all
                <select onChange={this.handlerSortTodos}>
                    <option value="SELECT">select</option>
                    <option value="ABC">abc</option>
                    <option value="TIME">time</option>
                </select>
                <TodosList sort={this.state} todos={this.props.todos} />
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

const mapStateToDispatch = dispatch => {
    return {
        onLoadTodos: () => dispatch(actionCreatoes.loadTodos()),
        onSortTodos: (letter) => dispatch(actionCreatoes.getTodosSorted(letter))
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(TodosPage)