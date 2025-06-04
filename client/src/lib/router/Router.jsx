import { Route, Routes } from 'react-router-dom';
import Layout from '../../layouts/Layout';
import Home from '../../pages/home/home';
import UserProfile from '../../pages/user-profile/UserProfile';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path=':id' element={<UserProfile />} />
			</Route>
		</Routes>
	);
};

export default Router;
