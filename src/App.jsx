import { Route, HashRouter as Router, Switch } from "react-router-dom";

import MeetingRoom from "./components/pages/MeetingRoom";
import UserStart from "./components/pages/UserStart";

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/" exact component={UserStart} />
					<Route path="/MeetingRoom" component={MeetingRoom} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
