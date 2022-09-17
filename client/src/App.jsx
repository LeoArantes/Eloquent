import { Route, HashRouter as Router, Routes } from "react-router-dom";

import MeetingRoom from "@/pages/MeetingRoom";
import UserStart from "@/pages/UserStart";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" exact element={<UserStart />} />
					<Route
						path="/MeetingRoom"
						exact
						element={<MeetingRoom />}
					/>
				</Routes>
			</Router>
		</>
	);
}

export default App;
