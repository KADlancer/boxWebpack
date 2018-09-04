import * as React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import styles from './style.css'

export const ButtonType = {
  BUTTON: 'button',
  RESET: 'reset',
  SUBMIT: 'submit',
}

export const ButtonTheme = {
  DEFAULT: 'default',
  ROUNDED: 'rounded',
}

export const ButtonSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
}

const Button = props => {
  const { type, onClick, children, theme, size, className, disabled } = props
  const classProps = classnames(
    styles.button,
    styles[theme],
    styles[size],
    {
      [styles.disabled]: disabled,
    },
    className
  )

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classProps}>
      {children}
    </button>
  )
}

Button.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
	size: PropTypes.string,
	theme: PropTypes.string,
	type: PropTypes.string,
}

Button.defaultProps = {
  className: '',
  disabled: false,
  onClick: () => {},
  size: ButtonSize.MEDIUM,
  theme: ButtonTheme.DEFAULT,
  type: ButtonType.BUTTON,
}

export default Button
