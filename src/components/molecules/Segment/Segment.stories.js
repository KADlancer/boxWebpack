import React from 'react'
import { storiesOf } from '@storybook/react'

import './Segment.scss'
import Button, {ButtonSize} from "_components/atoms/button";
import {action} from "@storybook/addon-actions";

storiesOf('Molecules/Segment', module)
	.add('default', () => (
		<div className="ui segment">
			<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum
				tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas
				semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
		</div>
	))
	.add('horizontal', () => (
		<div className="ui horizontal segments">
			<div className="ui segment">
				<p>Pellent esque habitant morbi tristique egestas.</p>
			</div>
			<div className="ui segment">
				<p>Vestibulum tortor quam, feugiat vitae, senectus et netus et malesuada fames ac turpis ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.</p>
			</div>
			<div className="ui segment">
				<p>Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
			</div>
		</div>
	))
	.add('raised', () => (
		<div className="ui raised segment">
			<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum
				tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas
				semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
		</div>
	))
	.add('stacked', () => (
		<div className="ui stacked segment">
			<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum
				tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas
				semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
		</div>
	))
	.add('tall stacked', () => (
		<div className="ui tall stacked segment">
			<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum
				tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas
				semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
		</div>
	))
	.add('grouped segments', () => (
		<div className="ui segments">
			<div className="ui segment">
				<p>Top</p>
			</div>
			<div className="ui segment">
				<p>Middle</p>
			</div>
			<div className="ui segment">
				<p>Middle</p>
			</div>
			<div className="ui segment">
				<p>Middle</p>
			</div>
			<div className="ui segment">
				<p>Bottom</p>
			</div>
		</div>
	))
	.add('nested segments', () => (
		<div className="ui segments">
			<div className="ui segment">
				<p>Top</p>
			</div>
			<div className="ui segments">
				<div className="ui segment">
					<p>Nested Top</p>
				</div>
				<div className="ui segment">
					<p>Nested Middle</p>
				</div>
				<div className="ui segment">
					<p>Nested Bottom</p>
				</div>
			</div>
			<div className="ui segment">
				<p>Middle</p>
			</div>
			<div className="ui horizontal segments">
				<div className="ui segment">
					<p>Top</p>
				</div>
				<div className="ui segment">
					<p>Middle</p>
				</div>
				<div className="ui segment">
					<p>Bottom</p>
				</div>
			</div>
			<div className="ui segment">
				<p>Middle</p>
			</div>
			<div className="ui segments">
				<div className="ui horizontal segments">
					<div className="ui segment">
						<p>Top</p>
					</div>
					<div className="ui segment">
						<p>Middle</p>
					</div>
					<div className="ui segment">
						<p>Bottom</p>
					</div>
				</div>
			</div>
			<div className="ui segment">
				<p>Bottom</p>
			</div>
		</div>
	))
