import { Link } from 'react-router-dom'
import error404 from '../../assets/404.png?raw=true'
import '../../styles/error.css'

function Error() {
    return (
      <div className='kasa-box-error'>
        <div className='kasa-box-error-logo'>
            <img alt="Error logo" src={error404} />
            <h2>
            Oups! La page que vous demandez n'existe pas.
            </h2>
        </div>
        <div className='kasa-box-error-link'>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
      </div>
    )
  }
  
  export default Error