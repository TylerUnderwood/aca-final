import React, { Component } from 'react'

class Checkbox extends Component {

	constructor(props) {
		super(props);
		this.state = {
			id: this.props.id ? this.props.id : this.props.name,
			name: this.props.name,
			label: this.props.label ? this.props.label : false,
			value: this.props.value,
		};
	}

	static defaultProps = {
		name: 'checkbox',
		value: false,
	}

	onChange = ( event ) => {
		this.setState({
			value: event.target.checked,
		})

		if ( this.props.update ) {
			this.props.update( event )
		}
	}

	render() {
		return (
			<label className="checkbox" htmlFor={ this.state.id }>

				<input 
					className="checkbox__input input--override"
					type="checkbox" 
					id={ this.state.id } 
					name={ this.state.name } 
					checked={ this.state.value } 
					onChange={ this.onChange } 
				/>

				<div className="checkbox__box">
					<svg className="icon-checkmark checkbox__icon" width="20" height="20" viewBox="0 0 20 20">
						<polyline className="checkbox__icon__line" points="4 11 8 15 16 6"></polyline>
					</svg>
				</div>

				{ this.state.label && ( 
					<span className="label">{ this.state.label }</span>
				)}
				
			</label>
		)
	}
}

export default Checkbox
