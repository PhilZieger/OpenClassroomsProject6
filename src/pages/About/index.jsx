import Background from '../../assets/black-background.png'
import '../../styles/about.css'
import CollapseMain from '../../components/CollapseMain';


function About() {
    return (
      <div className='kasa-about'>
        <div>
          <img className='kasa-about-img' alt="Arriere plan de style" src={Background} />
        </div>
        <CollapseMain />

      </div>
    )
  
  }

  export default About