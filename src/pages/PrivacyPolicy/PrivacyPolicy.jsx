import { useLanguage } from '../../hooks/useLanguage'
import './PrivacyPolicy.css'

function PrivacyPolicy() {
  const { t } = useLanguage()

  return (
    <div className="privacy-policy">
      <div className="page-container">
        <h1 className="page-title">{t('privacyTitle')}</h1>
        <p className="last-updated">{t('privacyLastUpdated')}</p>
        <p className="policy-intro">{t('privacyIntro')}</p>

        <section className="policy-section">
          <h2>{t('privacy1Title')}</h2>
          <p style={{ whiteSpace: 'pre-line' }}>{t('privacy1Text')}</p>
        </section>

        <section className="policy-section">
          <h2>{t('privacy2Title')}</h2>
          <p style={{ whiteSpace: 'pre-line' }}>{t('privacy2Text')}</p>
        </section>

        <section className="policy-section">
          <h2>{t('privacy3Title')}</h2>
          <p style={{ whiteSpace: 'pre-line' }}>{t('privacy3Text')}</p>
        </section>

        <section className="policy-section">
          <h2>{t('privacy4Title')}</h2>
          <p style={{ whiteSpace: 'pre-line' }}>{t('privacy4Text')}</p>
        </section>

        <section className="policy-section">
          <h2>{t('privacy5Title')}</h2>
          <p style={{ whiteSpace: 'pre-line' }}>{t('privacy5Text')}</p>
        </section>

        <section className="policy-section">
          <h2>{t('privacy6Title')}</h2>
          <p style={{ whiteSpace: 'pre-line' }}>{t('privacy6Text')}</p>
        </section>

        <section className="policy-section">
          <h2>{t('privacy7Title')}</h2>
          <p style={{ whiteSpace: 'pre-line' }}>{t('privacy7Text')}</p>
        </section>

        <section className="policy-section">
          <h2>{t('privacy8Title')}</h2>
          <p style={{ whiteSpace: 'pre-line' }}>{t('privacy8Text')}</p>
        </section>

        <section className="policy-section">
          <h2>{t('privacy9Title')}</h2>
          <p>
            {t('privacy9Text')} <a href="mailto:contact@adayapp.com">contact@adayapp.com</a>
          </p>
        </section>
      </div>
    </div>
  )
}

export default PrivacyPolicy
