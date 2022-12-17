import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import GameTutorial from './pages/GameTutorial';
import LandingPage from './pages/LandingPage';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					{/* Landing Page */}
					<Route
						path='/'
						element={<LandingPage />}
					/>
					<Route
						path='/game-tutorial'
						element={<GameTutorial />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
