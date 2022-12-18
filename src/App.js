import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
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
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
