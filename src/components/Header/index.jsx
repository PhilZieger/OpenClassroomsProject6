import { Link } from 'react-router-dom'
import Logo from '../../assets/logo_red.png'
import '../../styles/header.css'

function Header() {
    return (
      <nav className='kasa-header'>
        <Link to="/">
          <img alt="Logo Kasa" src={Logo} />
        </Link>
        <div className='kasa-nav'>
          <Link to="/">Accueil</Link>
          <Link to="/about">A Propos</Link>
        </div>
      </nav>
    )
  }

export default Header