import React from 'react'
import { Breadcrumb, BreadcrumbItem } from 'carbon-components-react'
import ResourceDisplay from '../../Elements/ResourceDisplay/index'

const clickHandler = e => console.log('clickHandler', this, e)

const GameScreenHeader = () => (
    <div className="GameScreenHeader">
        <h1>GameName</h1>
        <div className="resources">
            <Breadcrumb className="some-class" noTrailingSlash onClick={clickHandler}>
                <BreadcrumbItem>
                    <ResourceDisplay type="juice" label="Juice" current="30" max="30" />
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <ResourceDisplay type="food" label="Food" current="160" max="1000" />
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <ResourceDisplay type="wood" label="Wood" current="480" max="1000" />
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <ResourceDisplay type="gold" label="Gold" current="3560" max="10000" />
                </BreadcrumbItem>
            </Breadcrumb>
        </div>
    </div>
)

export default GameScreenHeader
