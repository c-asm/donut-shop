import '../css/DonutCard.css';

export default function DonutCard({ name, image, price }) {
	return (<>
		<div className='donut-card'>
			<img alt='Donut' src={image} />
			<div className='donut-info'>
				<span>{name} donut</span>
				<div className='unselectable donut-price'>
					<span>{price}</span>
				</div>
			</div>
		</div>
	</>)
}