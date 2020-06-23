import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Communication } from './pages/Communication';
import { Antitheft } from './pages/Antitheft';
import { ReverseWarning } from './pages/ReverseWarning';
import { OtherProducts } from './pages/OtherProducts';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { SingleProductPage } from 'components/SingleProductPage';

export const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/Communication">
					<Communication />
				</Route>
				<Route path="/Antitheft">
					<Antitheft />
				</Route>
				<Route path="/ReverseWarning">
					<ReverseWarning />
				</Route>
				<Route path="/OtherProducts">
					<OtherProducts />
				</Route>
				<Route path="/Contact">
					<Contact />
				</Route>
				<Route path="/About" exact>
					<About />
				</Route>
				<Route path="/SingleProductPage/:itemId">
					<SingleProductPage />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};
