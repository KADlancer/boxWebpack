import * as React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import styles from './style.css'

const Title = props => (
  <h1 className={classnames(styles.title, props.className)}>{props.children}</h1>
)

Title.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
}

Title.defaultProps = {
  children: '',
  className: '',
}

export default Title
