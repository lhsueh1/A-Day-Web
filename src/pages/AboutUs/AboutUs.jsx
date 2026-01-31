import { useLanguage } from '../../hooks/useLanguage'
import './AboutUs.css'

function AboutUs() {
  const { t } = useLanguage()

  return (
    <div className="contacts">
      <div className="page-container">
        <h1 className="page-title">{t('contactsTitle')}</h1>

        <div className="contacts-content">
          <p className="contacts-intro">{t('contactsIntro')}</p>

          <div className="contacts-email">
            <h2>{t('email')}</h2>
              irilia1018@gmail.com
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
