import { Link } from 'react-router-dom'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import LanguageToggle from '../LanguageToggle/LanguageToggle'
import { useLanguage } from '../../hooks/useLanguage'
import './Navbar.css'

function Navbar() {
  const { t } = useLanguage()

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          {t('appName')}
        </Link>
        <div className="navbar-controls">
          <LanguageToggle />
          {/*<ThemeToggle />*/}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
