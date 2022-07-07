import React from 'react'
import { connect } from 'react-redux'
import { ListGroupItem, Button } from 'reactstrap'
import './TaskItem.css'

import { deleteTaskAction } from '../../../../actions/taskActions'

const TaskItem = props => {
    const { task } = props

    const handleDelete = () => {
        props.deleteTask(task.id)
    }

    return (
        <ListGroupItem>
            <div>
                <div class="item"><div class = "item_label">Title:</div> {task.title}</div>
                <div class="item"><div class="item_label">Description:</div> {task.description}</div>

            </div>
           
            
            <Button close onClick={handleDelete} />
        </ListGroupItem>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        deleteTask: (id) => {
            dispatch(deleteTaskAction(id))
        }
    }
}

export default connect(null, mapDispatchToProps)(TaskItem)