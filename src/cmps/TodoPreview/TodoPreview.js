import React from 'react'
import './TodoPreview.css'

const todoPreview = (props) => {
    return (
        <section style={{
            textDecoration : props.todo.isCompleted ? 'line-through' : 'none'
        }}>
            {props.todo.title}
        </section>
    )
}

export default todoPreview