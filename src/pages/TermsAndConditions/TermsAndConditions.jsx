import { useLanguage } from '../../hooks/useLanguage'
import './TermsAndConditions.css'

function TermsAndConditions() {
  const { t } = useLanguage()

  return (
    <div className="terms-and-conditions">
      <div className="page-container">
        <h1 className="page-title">{t('termsTitle')}</h1>

        <section className="terms-section">
          <h2>{t('terms1Title')}</h2>
          <p>{t('terms1Text')}</p>
        </section>

        <section className="terms-section">
          <h2>{t('terms2Title')}</h2>
          <p>{t('terms2Text')}</p>
        </section>

        <section className="terms-section">
          <h2>{t('terms3Title')}</h2>
          <p>{t('terms3Text')}</p>
        </section>

        <section className="terms-section">
          <h2>{t('terms4Title')}</h2>
          <p>{t('terms4Text')}</p>
        </section>

        <section className="terms-section">
          <h2>{t('terms5Title')}</h2>
          <p>{t('terms5Text')}</p>
        </section>

        <section className="terms-section">
          <h2>{t('terms6Title')}</h2>
          <p>{t('terms6Text')}</p>
        </section>

        <section className="terms-section">
          <h2>{t('terms7Title')}</h2>
          <p>
            {t('terms7Text')} <a href="mailto:contact@adayapp.com">contact@adayapp.com</a>
          </p>
        </section>
      </div>
    </div>
  )
}

export default TermsAndConditions
