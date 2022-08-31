import { Routes, Route } from 'react-router-dom'
import Main from './layouts/Main'
import Home from './routes/Home'
import Dashboard from './routes/Dashboard'
import Income from './routes/Income'

function App() {
  return (
    <div className="app">
			<Routes>
				<Route path="/" element={<Main />}>
					<Route index element={<Home />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/income" element={<Income />} />
				</Route>
			</Routes>
		</div>
  );
}

export default App;
