import React from 'react'
import TaskCard from '../../Elements/TaskCard'

// import data from './PlayTasks.json'

const tasks = [
    {
        title: 'Task 1',
        description: 'Some words that describe this task 1',
        cost: [
            {
                type: 'energy',
                amount: 1,
            },
        ],
    },
    {
        title: 'Task 2',
        description: 'Some words that describe this task 2',
        cost: [
            {
                type: 'energy',
                amount: 2,
            },
        ],
    },
    {
        title: 'Task 3',
        description: 'Some words that describe this task 3',
        cost: [
            {
                type: 'energy',
                amount: 5,
            },
        ],
    },
]
const taskCards = tasks.map(card => (
    <TaskCard taskTitle={card.title} taskDescription={card.description} taskCost={card.cost} />
))
const PlayTasks = () => (
    <div className="PlayTasks">
        <h3>Choose a task!</h3>
        <div className="deck">{taskCards}</div>
        <sub>
            If you don&#39;t have sufficient resources, just wait for them to refill or buy some
            from your stashed Crypto Currencies. We prefer DOGECOINS! Very Crypto, much win!
        </sub>
    </div>
)

export default PlayTasks
