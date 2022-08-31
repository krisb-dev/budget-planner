import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header'
import CardStats from '../components/Cards/CardStats'

const Dashboard = () => {
	return (
		<>
			<Header pageTitle="dashboard" />
			<div className="grid grid-cols-4 bg-teal-500 p-24">
				<CardStats
					cardSubTitle="Monthly"
					cardTitle="Income"
				/>
			</div>
		</>
	)
}

export default Dashboard