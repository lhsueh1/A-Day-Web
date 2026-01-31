import { Link } from 'react-router-dom'
import { useLanguage } from '../../hooks/useLanguage'
import './Home.css'

function Home() {
  const { t } = useLanguage()

  return (
    <div className="home">
      <div className="home-card">
        <h1 className="home-title">{t('appName')}</h1>
        <p className="home-subtitle">{t('homeSubtitle')}</p>
        <div className="home-buttons">
          <Link to="/privacy" className="home-button">
            {t('privacyPolicy')}
          </Link>
          <Link to="/terms" className="home-button">
            {t('termsAndConditions')}
          </Link>
          <Link to="/contacts" className="home-button">
            {t('contacts')}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
