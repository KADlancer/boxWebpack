import * as React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import styles from './style.css'

const Feature = props => (
  <div
    style={{ backgroundImage: `url(${props.image})` }}
    className={classnames(styles.feature, props.className)}
  >
    {props.children}
  </div>
)

Feature.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	image: PropTypes.string,
}

Feature.defaultProps = {
  children: undefined,
  className: undefined,
  image: '',
}

export default Feature
