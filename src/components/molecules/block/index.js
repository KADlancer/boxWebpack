import * as React from 'react'
import PropTypes from 'prop-types'

import Card from '_components/atoms/card'
import Button from '_components/atoms/button'
import Title from '_components/atoms/title'

const Block = props => (
  <Card className={props.className}>
    <Title>{props.title}</Title>
    {props.children}
    {props.button !== '' && <Button>{props.button}</Button>}
  </Card>
)

Block.propTypes = {
	button: PropTypes.string,
	children: PropTypes.node,
	className: PropTypes.string,
	title: PropTypes.string,
}

Block.defaultProps = {
  button: '',
  children: '',
  className: '',
  title: '',
}

export default Block
