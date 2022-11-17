import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OnboardProvider from "./contexts/OnboardContext";
import Home from "./pages/Home";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
	return (
		<div className="App">
			<Router>
        <ParallaxProvider>
				<OnboardProvider>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
					</Switch>
				</OnboardProvider>
        </ParallaxProvider>
			</Router>
		</div>
	);
}

export default App;
