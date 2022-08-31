import React from 'react';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
	return (
		<>
			Hello i am the dashboard
			<Outlet />
		</>
	)
}

export default Dashboard