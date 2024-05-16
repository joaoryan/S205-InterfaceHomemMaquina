import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from '../pages/Home';
import Layout from '../pages/Layout';
import { Jobs } from "../pages/jobs";

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path='' element={<Home />} />
					<Route path='jobs' element={<Jobs />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default AppRoutes;

