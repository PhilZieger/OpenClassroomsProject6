import { NavLink, Link } from 'react-router-dom'
import Logo from '../../assets/logo_red.png'
import '../../styles/header.css'

function Header() {


    return (
      <nav className='kasa-header'>
        <Link to="/">
          <img alt="Logo Kasa" src={Logo} />
        </Link>
        <div className='kasa-nav'>
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? 'selected' : null)
            }>Accueil</NavLink>

          <NavLink 
          to="/about" 
          className={({ isActive }) => (isActive ? 'selected' : null)
          }>A Propos</NavLink>
        </div>
      </nav>
    )
  }

export default Header