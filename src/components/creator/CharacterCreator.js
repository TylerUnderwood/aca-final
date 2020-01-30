import React, { Component } from 'react'

class Inputs extends Component {

	state = {
		name: '',
		level: 1,
		race: '',
		class: '',
		strength: 8,
		dexterity: 8,
		constitution: 8,
		intelligence: 8,
		wisdom: 8,
		charisma: 8,
		characterList: [

		],
	}

	onChange = ( event ) => {
		const target = event.target
		const name = target.name
		let value = undefined

		if ( target.type === 'checkbox' ) {
			value = target.checked
		}
		else if ( target.type === 'radio' ) {
			value = target.id
		}
		else {
			value = target.value
		}

		this.setState({
			[name]: value,
		})
	}

	showForm = ( event ) => {
		event.preventDefault()
		// console.log( event.target )
		alert( JSON.stringify( this.state, null, 4 ) )
	}

	handleSubmit( event ) {
		event.preventDefault();
		// console.log('test')
		// using self helps separate out this from other events
		// let self = this;
		// On submit of the form, send a POST request with the data to the server.
		fetch('/characters', {
			method: 'POST',
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify ({
				character_name: this.state.name,
				character_level: this.state.level,
				character_race: this.state.race,
				character_class: this.state.class,
				character_strength: this.state.strength,
				character_dexterity: this.state.dexterity,
				character_constitution: this.state.constitution,
				character_intelligence: this.state.intelligence,
				character_wisdom: this.state.wisdom,
				character_charisma: this.state.charisma,
			})
		})
		.then(function( response ) {
			return response.json()
		})
		.then(function( body ) {
			// console.log(body);
			// window.location.replace("/characters")
			this.props.history.push('/characters')
		})
	}

	componentDidMount() {
		// using self helps separate out this from other events
		// let self = this;
		// On submit of the form, send a POST request with the data to the server.
		fetch('/characters', {
			method: 'SELECT',
		})
		.then(function( response ) {
			return response.json()
		})
	}

	render() {
		return (
			<div className="page-inputs">
				
				<section className="frame gutter">
					<div className="wrapper">
						<form className="new-character-form" onSubmit={this.showForm}>
							<label className="ncf__item w-75" htmlFor="name">
								Name
								<input 
									className="mar-t-1"
									type="text" 
									name="name" 
									placeholder="name" 
									value={this.state.name} 
									onChange={this.onChange} 
								/>
							</label>
							<label className="ncf__item w-25" htmlFor="level">
								Level
								<input 
									className="mar-t-1"
									type="number" 
									min="1" 
									max="20" 
									name="level" 
									placeholder="level" 
									value={this.state.level} 
									onChange={this.onChange} 
								/>
							</label>
							<label className="ncf__item w-50" htmlFor="race">
								Race
								<input 
									className="mar-t-1"
									type="text" 
									name="race" 
									placeholder="race" 
									value={this.state.race} 
									onChange={this.onChange} 
								/>
							</label>
							<label className="ncf__item w-50" htmlFor="class">
								Class
								<input 
									className="mar-t-1"
									type="text" 
									name="class" 
									placeholder="class" 
									value={this.state.class} 
									onChange={this.onChange} 
								/>
							</label>
							<label className="ncf__item w-16" htmlFor="strength">
								Strength
								<input 
									className="mar-t-1" 
									type="number" 
									min="8" 
									max="30"
									name="strength" 
									placeholder="strength" 
									value={this.state.strength} 
									onChange={this.onChange} 
								/>
							</label>
							<label className="ncf__item w-16" htmlFor="dexterity">
								Dexterity
								<input 
									className="mar-t-1" 
									type="number" 
									min="8" 
									max="30"
									name="dexterity" 
									placeholder="dexterity" 
									value={this.state.dexterity} 
									onChange={this.onChange} 
								/>
							</label>
							<label className="ncf__item w-16" htmlFor="constitution">
								Constitution
								<input 
									className="mar-t-1" 
									type="number" 
									min="8" 
									max="30" 
									name="constitution" 
									placeholder="constitution" 
									value={this.state.constitution} 
									onChange={this.onChange} 
								/>
							</label>
							<label className="ncf__item w-16" htmlFor="intelligence">
								Intelligence
								<input 
									className="mar-t-1" 
									type="number" 
									min="8" 
									max="30" 
									name="intelligence" 
									placeholder="intelligence" 
									value={this.state.intelligence} 
									onChange={this.onChange} 
								/>
							</label>
							<label className="ncf__item w-16" htmlFor="wisdom">
								Wisdom
								<input 
									className="mar-t-1" 
									type="number" 
									min="8" 
									max="30" 
									name="wisdom" 
									placeholder="wisdom" 
									value={this.state.wisdom} 
									onChange={this.onChange} 
								/>
							</label>
							<label className="ncf__item w-16" htmlFor="charisma">
								Charisma
								<input 
									className="mar-t-1" 
									type="number" 
									min="8" 
									max="30" 
									name="charisma" 
									placeholder="charisma" 
									value={this.state.charisma} 
									onChange={this.onChange} 
								/>
							</label>
							<div className="ncf__item">
								<button className="btn" type="submit">Submit</button>
							</div>
						</form>
					</div>
				</section>

				<hr/>

				
				<section className="frame gutter">
					<div className="wrapper">

						<table className="w-100">
							<thead>
								<tr>
									<td>name </td>
									<td>level</td>
									<td>race </td>
									<td>class</td>
								</tr>
							</thead>

						{this.state.characterList.map(( character, index ) => (
							<tr key={index}>
								<td>{ character.name }</td>
								<td>{ character.level }</td>
								<td>{ character.race }</td>
								<td>{ character.class }</td>
							</tr>
						))}
						</table>
						

					</div>
				</section>
				
			</div>
		)
	}
}

export default Inputs