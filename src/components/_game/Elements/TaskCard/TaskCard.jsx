import React from 'react'
import PropTypes from 'prop-types'
import Card from '../../../molecules/Card'

const TaskCard = props => {
    const { taskTitle, taskDescription, taskCost } = props

    const cardHeader = <strong>{taskTitle}</strong>
    const cardBody = (
        <div>
            <div className="cardVisual">Image of this card</div>
            <p>{taskDescription}</p>
        </div>
    )
    const cardFooter = taskCost.map(cost => (
        <div>
            {cost.type}
            {' :  '}
            {cost.amount}
        </div>
    ))

    return <Card cardHeader={cardHeader} cardBody={cardBody} cardFooter={cardFooter} />
}

TaskCard.propTypes = {
    taskTitle: PropTypes.node,
    taskDescription: PropTypes.node,
    taskCost: PropTypes.node,
}
TaskCard.defaultProps = {
    taskTitle: 'Header',
    taskDescription: 'Body',
    taskCost: [
        {
            type: 'resource',
            amount: 0,
        },
    ],
}

export default TaskCard
