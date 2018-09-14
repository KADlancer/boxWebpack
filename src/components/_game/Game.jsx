import React from 'react'
import './Game.css'
import Segments from '../molecules/Segments'
import GameScreenHeader from './Layout/GameScreenHeader'
import PlayTasks from './Views/PlayTasks'

const Game = () => (
    <div className="Game">
        <div className="bx--grid">
            <div className="bx--row">
                <div className="bx--col-xs-2" />
                <div className="bx--col-xs-8">
                    <h1>My Awesome Game</h1>
                    <h2>The Play Task Screen</h2>
                    <p>
                        On this screen the player can click on a task and if he has sufficient
                        resources, he will perform the task and receive rewards for spending his
                        resources.
                    </p>

                    <Segments>
                        <Segments>
                            <GameScreenHeader />
                        </Segments>
                        <Segments>
                            <PlayTasks />
                        </Segments>
                        <Segments>Game Screen Footer</Segments>
                    </Segments>
                </div>
                <div className="bx--col-xs-2" />
            </div>
        </div>
    </div>
)

export default Game
