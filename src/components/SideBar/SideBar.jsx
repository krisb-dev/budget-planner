import { Link } from 'react-router-dom'

const SideBar = () => {
	return (
		<div>
			Sidebar Nav
			<nav>
				<Link to="/">Home</Link>
				<Link to="/dashboard">Dashboard</Link>
			</nav>
		</div>
	)
}

export default SideBar