import React, { Component } from "react";
import './App.css';
import Todo from "./App";


export default class HeaderMenu extends Component {
	constructor() {
		super();
		this.state = {
			isLoggedIn: false
		}
	}
	loginOrLogout(){
		this.setState({isLoggedIn : !this.state.isLoggedIn})
	}
	render() {
		return (
			<>
				<ul className="flex flex-row gap-sm list-style-none">
					<li>Home</li>
					{this.state.isLoggedIn ? (
						<>
							<li>Profile</li>
							<li>Todos</li>
							<li>Logout</li>
						</>
					) : (
						<>
							<li>Login</li>
							<li>Sign Up</li>
						</>
					)}
				</ul>
				<button onClick={()=> this.loginOrLogout()}>{this.state.isLoggedIn ? `Log Out` : `Log In`}</button>
				{this.state.isLoggedIn === true && (
					<Todo />
				)}
			</>
		)
	}
}
