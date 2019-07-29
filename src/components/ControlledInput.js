// Code ControlledInput Component Here
import React, { Component } from 'react';


export default class ControlledInput extends Component {
	constructor() {
		super();
		this.state = {
			firstName: "John",
			lastName: "Henry"
		}
	}

	handleFirstNameChange = e => {
		e.persist();
		console.log(e);
		this.setState({
			firstName: e.target.value
		})
	}

	handleLastNameChange = e => {
		this.setState({
			lastName: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		e.persist();
		console.log(e);
		console.log(this.state);
	}

	render() {
		return(
			<form onSubmit={event => this.handleSubmit(event)}>
				<input type="text" name="firstName"
				onChange={e => this.handleFirstNameChange(e)}
				value={this.state.firstName} />
				<input type="text" name="lastName"
				onChange={e => this.handleLastNameChange(e)}
				value={this.state.lastName} />
				<input type="submit" value="Submit" />
			</form>
			);
	}
}
