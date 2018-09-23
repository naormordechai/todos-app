import React from 'react'

const todoFilter = (props) => (
    <input type="text" onChange={event => props.click(event.target.value)} />
)

export default todoFilter