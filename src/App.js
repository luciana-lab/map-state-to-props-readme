import React, { Component } from 'react';

// Import connect() function from React Redux
// Connect(), allows us to specify which data we are listening to (through mapStateToProps)
// and which component we are providing the data to (App).
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
	handleOnClick = () => {
		// this.props.store.dispatch({
		// reflect the fact that the store is no longer being passed directly to App from index.js
		// dispatch is automatically provided by connect
		this.props.dispatch({
			type: 'INCREASE_COUNT',
		});
	}

	render() {
		return (
			<div className="App">
				<button onClick={this.handleOnClick}>Click</button>
				{/* <p>{this.props.store.getState().clicks}</p> */}
				{/* reflect the fact that the store is no longer being passed directly to App from index.js */}
				<p>{this.props.clicks}</p>
			</div>
		);
	}
}

// create new method, mapStateToProps

// 2 goals:
// 1. Only re-render the App component when specific changes to the state occur
// 2. Only provide the needed slice of the state to the App component

// What we'll need to achieve these goals:
// 1. A function that listens to every change in the store  (connect function)
// 2. Accesses the changes relevant to a particular component (mapStateToProps and the render using this.props.clicks)
// 3. Provide to that component

// Inside here we specify exactly which slice of the state we want to provide to the component (state.clicks)
// Allow our component to have access to through a prop called clicks
// We're able to render the number of clicks in the render using this.props.clicks
const mapStateToProps = state => {
	return { clicks: state.clicks }
}

// modify the export statement to use connect to wire everything together
// export default App;

// connect function is synced up to the store, listening to each change in the state that occurs
// When a change occurs, it calls the mapStateToProps function

// connect(mapStateToProps)(App) specify that we are connecthing this state to the App
// connect() return a new component, similar to App but is connected up to receive the correct data
// This new compoennt is the component we wish to export
export default connect(mapStateToProps)(App);

// Connection a component to the store means that it'll be able to get data from the store's internal state
// It'll be re-remder and get new data when that state changes


// const mapStateToProps = state => {
	// return { clicks: state.clicks }
// }
// connect(mapStateToProps)(App)
// These 4 lines above are saying connect the data in mapStateToProps() (the clicks portion of the state) to the App component. 
// And the App component can access that state with this.props.clicks