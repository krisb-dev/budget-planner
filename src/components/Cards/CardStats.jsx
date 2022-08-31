const CardStats = (props) => {
	
	const {
		cardTitle,
		cardSubTitle,
		cardValue
	} = props
	return (
		<div className="flex flex-col p-4 bg-white rounded shadow-lg">
			<h4>{cardSubTitle}</h4>
			<span>{cardTitle}</span>
		</div>
	)
}

export default CardStats