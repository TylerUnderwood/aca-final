import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store'
import './App.scss'
import Startup from './components/Startup'
import Header from './components/Header'
import Router from './Router'
import Footer from './components/Footer'

class App extends Component {

	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<Startup />
					<Header />
					<main id="main" className="viewbox scrollable">
						<div id="top"></div>
						<div className="viewable">
							<Router />
						</div>
						<Footer />
					</main>
				</BrowserRouter>
			</Provider>
		)
	}
}

export default App