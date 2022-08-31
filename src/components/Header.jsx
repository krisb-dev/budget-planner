import Usermenu from '../components/Usermenu/Usermenu'

const Header = (props) => {
	
	const { pageTitle } = props
	
	return (
		<header className="absolute w-full">
			<div className="flex mx-auto px-8 py-4">
				<span className="mr-auto">
					{pageTitle}
				</span>
				<Usermenu />
			</div>
		</header>
	)
}

export default Header