import StarsGood from '../../assets/red-stars.png'
import StarsBad from '../../assets/grey-stars.png'

// Ici, il s'agit d'une manière de faire.
//Vous auriez aussi pu utiliser une fonction qui retourne l'élément souhaité, ou bien faire directement des conditions

function Rating({ scaleValue, careType }) {
	const range = [1, 2, 3, 4, 5]
	const scaleType =
		careType === 'stars' ? (
			<img src={StarsGood} alt='stars-icon' />
		) : null
    const scaleStars =
		careType === 'stars' ? (
			<img src={StarsBad} alt='stars-icon' />
		) : null

	return (
		<div className='kasa-housing-rating'>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : (
                    <span key={rangeElem.toString()}>{scaleStars}</span>
                )
			)}
		</div>
	)
}

export default Rating