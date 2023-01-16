import datas from '../../assets/logements.json';

function Card() {
    return (
        <div className='kasa-home-box'>
            {datas.map((data) => {
                return <div className='kasa-home-box-card' key={data.id}>
                    <img alt="Appartement" src={data.cover} />
                    <span>{data.title}</span>
                </div>
            })}
        </div>
    )
}

export default Card




