import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.module.css';

import Home from './Pages/Home/Home'
import Programs from './Pages/Programs/Programs'
import Exercises from './Pages/Exercises/Exercises'
import Nutrition from './Pages/Nutrition/Nutrition'
import Services from './Pages/Services/Services'
import About from './Pages/About/About'
import PageNotFound from './Pages/404/404';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home/>}></Route>
				<Route path="/Programs" element={<Programs/>}></Route>
				<Route path="/Exercises" element={<Exercises/>}></Route>
				{/* <Route path="/Nutrition" element={<Nutrition/>}></Route> */}
				{/* <Route path="/Services" element={<Services/>}></Route> */}
				{/* <Route path="/About" element={<About/>}></Route> */}
				{/* <Route path="*" element={<PageNotFound/>}></Route> */}
			</Routes>
		</Router>
	);
}

export default App;