import React from "react";
import { Route, HashRouter as Router, Switch } from "react-router-dom";

import Welcome from "./components/pages/Welcome";

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/" exact component={Welcome} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
