import '../../styles/housingForm.css'
import datas from '../../assets/logements.json';
import { useParams } from 'react-router-dom'
import Tag from '../../components/Tag';
import Rating from '../../components/Rating';
import Collapse from '../../components/Collapse';
import Gallery from '../../components/Gallery';
import Error from '../../components/Error';

function HousingForm() {
    const { id } = useParams()
    var compteur = 0
    console.log(datas.length)
    return (

        
      <div className='kasa-housing'>
        {datas.map((data) => 
        data.id === id ? (
        <div key={id} className='kasa-housing-map'>
            <div className='kasa-housing-banner'>
                <Gallery slides={data.pictures} />
            </div>

            <div className='kasa-housing-header'>
                <div className='kasa-housing-description'>
                    <span className='kasa-housing-title'>{data.title}</span>
                    <span className='kasa-housing-location'>{data.location}</span>
                    <div className='kasa-housing-tag'>
                        {data.tags.map(name => <Tag name={name} />)}
                    </div>
                </div>

                <div className='kasa-housing-user'>
                    <div className='kasa-housing-userInfo'>
                        <span>{data.host.name}</span>
                        <img src={data.host.picture} alt="User Profile" />
                    </div>
                    <Rating careType='stars' scaleValue={data.rating}/>

                </div>
            </div>

            <div className='kasa-housing-collapse'>
                <Collapse name="Description" text={data.description} source={false} etat={true} />
                <Collapse name="Équipements" text={data.equipments} source={true} etat={true}/>
            </div>

        </div>
        ) : (
            compteur = compteur + 1,
            (
                compteur === datas.length ? (
                   <Error /> 
                ) : null
            )
        )
        )}
      </div>
    )
  }
  
  export default HousingForm