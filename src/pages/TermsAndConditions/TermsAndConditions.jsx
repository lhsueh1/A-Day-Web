import { useLanguage } from '../../hooks/useLanguage'
import './TermsAndConditions.css'

function TermsAndConditions() {
  const { t } = useLanguage()

  return (
    <div className="terms-and-conditions">
      <div className="page-container">
        <h1 className="page-title">{t('termsTitle')}</h1>
        <p className="last-updated">{t('termsLastUpdated')}</p>
        <p className="terms-intro">{t('termsIntro')}</p>

        <section className="terms-section">
          <h2>{t('terms1Title')}</h2>
          <p style={{ whiteSpace: 'pre-line' }}>{t('terms1Text')}</p>
        </section>

        <section className="terms-section">
          <h2>{t('terms2Title')}</h2>
          <p style={{ whiteSpace: 'pre-line' }}>{t('terms2Text')}</p>
        </section>

        <section className="terms-section">
          <h2>{t('terms3Title')}</h2>
          <p style={{ whiteSpace: 'pre-line' }}>{t('terms3Text')}</p>
        </section>

        <section className="terms-section">
          <h2>{t('terms4Title')}</h2>
          <p style={{ whiteSpace: 'pre-line' }}>{t('terms4Text')}</p>
        </section>

        <section className="terms-section">
          <h2>{t('terms5Title')}</h2>
          <p style={{ whiteSpace: 'pre-line' }}>{t('terms5Text')}</p>
        </section>

        <section className="terms-section">
          <h2>{t('terms6Title')}</h2>
          <p style={{ whiteSpace: 'pre-line' }}>{t('terms6Text')}</p>
        </section>

        <section className="terms-section">
          <h2>{t('terms7Title')}</h2>
          <p style={{ whiteSpace: 'pre-line' }}>{t('terms7Text')}</p>
        </section>

        <section className="terms-section">
          <h2>{t('terms8Title')}</h2>
          <p style={{ whiteSpace: 'pre-line' }}>{t('terms8Text')}</p>
        </section>

        <section className="terms-section">
          <h2>{t('terms9Title')}</h2>
          <p style={{ whiteSpace: 'pre-line' }}>{t('terms9Text')}</p>
        </section>

        <section className="terms-section">
          <h2>{t('terms10Title')}</h2>
          <p style={{ whiteSpace: 'pre-line' }}>{t('terms10Text')}</p>
        </section>

        <section className="terms-section">
          <h2>{t('terms11Title')}</h2>
          <p style={{ whiteSpace: 'pre-line' }}>{t('terms11Text')}</p>
        </section>

        <section className="terms-section">
          <h2>{t('terms12Title')}</h2>
          <p style={{ whiteSpace: 'pre-line' }}>{t('terms12Text')}</p>
        </section>

        <section className="terms-section">
          <h2>{t('terms13Title')}</h2>
          <p style={{ whiteSpace: 'pre-line' }}>{t('terms13Text')}</p>
        </section>

        <section className="terms-section">
          <h2>{t('terms14Title')}</h2>
          <p style={{ whiteSpace: 'pre-line' }}>{t('terms14Text')}</p>
        </section>

        <section className="terms-section">
          <h2>{t('terms15Title')}</h2>
          <p>
            {t('terms15Text')} <a href="mailto:contact@adayapp.com">irilia1018@gmail.com</a>
          </p>
        </section>
      </div>
    </div>
  )
}

export default TermsAndConditions
