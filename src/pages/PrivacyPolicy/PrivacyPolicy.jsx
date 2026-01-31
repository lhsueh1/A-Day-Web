import { useLanguage } from '../../hooks/useLanguage'
import './PrivacyPolicy.css'

function PrivacyPolicy() {
  const { t } = useLanguage()

  return (
    <div className="privacy-policy">
      <div className="page-container">
        <h1 className="page-title">{t('privacyTitle')}</h1>

        <section className="policy-section">
          <h2>{t('privacy1Title')}</h2>
          <p>{t('privacy1Text')}</p>
        </section>

        <section className="policy-section">
          <h2>{t('privacy2Title')}</h2>
          <p>{t('privacy2Text')}</p>
        </section>

        <section className="policy-section">
          <h2>{t('privacy3Title')}</h2>
          <p>{t('privacy3Text')}</p>
        </section>

        <section className="policy-section">
          <h2>{t('privacy4Title')}</h2>
          <p>{t('privacy4Text')}</p>
        </section>

        <section className="policy-section">
          <h2>{t('privacy5Title')}</h2>
          <p>
            {t('privacy5Text')} <a href="mailto:contact@adayapp.com">contact@adayapp.com</a>
          </p>
        </section>
      </div>
    </div>
  )
}

export default PrivacyPolicy
