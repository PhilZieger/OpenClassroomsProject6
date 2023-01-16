import Logo from '../../assets/logo_white.png'
import '../../styles/footer.css'

function Footer() {
    return (
      <div className='kasa-footer'>
        <img alt="Logo Kasa" src={Logo} />
        <h2>© 2020 Kasa. All rights reserved</h2>
      </div>
    )
  }

export default Footer