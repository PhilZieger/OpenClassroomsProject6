import datas from '../../assets/logements.json';
import { Link } from 'react-router-dom'

function Card() {
    return (
        <div className='kasa-home-box'>
            {datas.map((data) => {
                return (
                <Link to={`/housing/${data.id}`} className='kasa-home-box-card' key={data.id}>
                    <img alt="Appartement" src={data.cover} />
                    <span>{data.title}</span>
                </Link>
                )
            })}
        </div>
    )
}

export default Card




