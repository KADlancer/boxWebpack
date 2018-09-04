import * as React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import styles from './style.css'

const Card = props => (
  <div className={classnames(styles.card, props.className)}>{props.children}</div>
)

Card.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
}

Card.defaultProps = {
  children: '',
  className: '',
}

export default Card
