import React, { useState } from 'react';
import Header from '../components/Header'


const Dashboard = () => {
	
	const [modalState, setModalState] = useState(false)
	return (
		<>
			<Header pageTitle="Income" />
			<div className="grid grid-cols-4 bg-teal-500 p-24">
				<button className="p-4 border-4 border-dashed border-teal-50">
					Add Income
				</button>
			</div>
		</>
	)
}

export default Dashboard