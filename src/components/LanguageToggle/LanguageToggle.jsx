import { useLanguage } from '../../hooks/useLanguage'
import './LanguageToggle.css'

function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      className="language-toggle"
      onClick={toggleLanguage}
      aria-label={`Switch to ${language === 'EN' ? 'Traditional Chinese' : 'English'}`}
    >
      {language === 'EN' ? 'TW' : 'EN'}
    </button>
  )
}

export default LanguageToggle
