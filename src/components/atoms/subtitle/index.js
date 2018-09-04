import * as React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import styles from './style.css'

const Subtitle = props => (
  <h2 className={classnames(styles.subtitle, props.className)}>{props.children}</h2>
)

Subtitle.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
}

Subtitle.defaultProps = {
  children: '',
  className: '',
}

export default Subtitle
