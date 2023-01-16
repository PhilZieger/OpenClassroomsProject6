import Background from '../../assets/grey-background.png'
import '../../styles/home.css'
import Card from '../../components/Card';

function Home() {
    return (
      <div className='kasa-home'>
        <div className='kasa-home-background'>
          <img alt="Arriere plan de style" src={Background} />
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
        <Card/>
      </div>
    )
  }
  
  export default Home