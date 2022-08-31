import React from 'react';
import { Outlet } from "react-router-dom";
import SideBar from '../components/SideBar/SideBar'


const Main = () => {
	return (
		<div className="grid grid-cols-6">
			<SideBar />
			<div className="main-content relative col-span-5">
				<Outlet />
			</div>
		</div>
	)
}

export default Main