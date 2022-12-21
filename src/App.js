import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import GamePage from './pages/GamePage';

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
						path='/game-board'
						element={<GamePage />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
