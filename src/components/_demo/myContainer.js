import React from 'react'
import './myContainer.css'

export default class MyContainer extends React.Component{
	// static propTypes = {
	// 	title: React.PropTypes.string
	// }
	render(){
		const {title, children, ...other} = this.props;
		return(
			<div className='MyContainer' {...other}>
				<h1>{title}</h1>
				<hr />
				<div>
					{children}
				</div>
			</div>
		)
	}
}
