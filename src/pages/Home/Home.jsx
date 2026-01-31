import { Link } from 'react-router-dom'
import { useLanguage } from '../../hooks/useLanguage'
import './Home.css'

function Home() {
  const { t } = useLanguage()

  return (
    <div className="home">
      {/* Floating decorative elements - full page */}
      <div className="decorative-elements">
        <svg className="floating-leaf leaf-1" viewBox="0 0 40 40" fill="none">
          <path d="M20 2C20 2 35 15 35 25C35 32 28 38 20 38C12 38 5 32 5 25C5 15 20 2 20 2Z" fill="currentColor"/>
          <path d="M20 8V32M20 18C16 18 12 22 12 26" stroke="var(--off-white)" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <svg className="floating-leaf leaf-2" viewBox="0 0 40 40" fill="none">
          <path d="M20 2C20 2 35 15 35 25C35 32 28 38 20 38C12 38 5 32 5 25C5 15 20 2 20 2Z" fill="currentColor"/>
          <path d="M20 8V32M20 18C16 18 12 22 12 26" stroke="var(--off-white)" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <svg className="floating-leaf leaf-3" viewBox="0 0 40 40" fill="none">
          <path d="M20 2C20 2 35 15 35 25C35 32 28 38 20 38C12 38 5 32 5 25C5 15 20 2 20 2Z" fill="currentColor"/>
          <path d="M20 8V32M20 18C16 18 12 22 12 26" stroke="var(--off-white)" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <svg className="floating-leaf leaf-4" viewBox="0 0 40 40" fill="none">
          <path d="M20 2C20 2 35 15 35 25C35 32 28 38 20 38C12 38 5 32 5 25C5 15 20 2 20 2Z" fill="currentColor"/>
          <path d="M20 8V32M20 18C16 18 12 22 12 26" stroke="var(--off-white)" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <svg className="floating-leaf leaf-5" viewBox="0 0 40 40" fill="none">
          <path d="M20 2C20 2 35 15 35 25C35 32 28 38 20 38C12 38 5 32 5 25C5 15 20 2 20 2Z" fill="currentColor"/>
          <path d="M20 8V32M20 18C16 18 12 22 12 26" stroke="var(--off-white)" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
        <div className="floating-circle circle-4"></div>
        <div className="floating-circle circle-5"></div>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="home-card">
          <div className="title-decoration">
            <span className="decoration-dot"></span>
            <span className="decoration-line"></span>
            <span className="decoration-dot"></span>
          </div>
          <h1 className="home-title">{t('appName')}</h1>
          <p className="home-subtitle">{t('homeSubtitle')}</p>

          {/* Decorative divider */}
          <div className="section-divider">
            <svg className="divider-leaf" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C12 2 19 8 19 14C19 18 16 22 12 22C8 22 5 18 5 14C5 8 12 2 12 2Z" fill="currentColor"/>
            </svg>
          </div>

        </div>
      </section>

      {/* App Intro Section */}
      <section className="intro-section">
        <div className="intro-container">
          {/* Feature Cards */}
          <div className="feature-grid">
            {/* Feature 1 - Image Left */}
            <div className="feature-card">
              <div className="feature-image">
                <div className="image-placeholder">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <path d="M21 15l-5-5L5 21"/>
                  </svg>
                  <span>Screenshot 1</span>
                </div>
              </div>
              <div className="feature-content">
                <h3 className="feature-title">Daily Journaling</h3>
                <p className="feature-text">
                  Capture your thoughts, feelings, and memorable moments every day.
                  Our intuitive interface makes journaling a joy, not a chore.
                </p>
              </div>
            </div>

            {/* Feature 2 - Image Right */}
            <div className="feature-card feature-card-reverse">
              <div className="feature-image">
                <div className="image-placeholder">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <path d="M21 15l-5-5L5 21"/>
                  </svg>
                  <span>Screenshot 2</span>
                </div>
              </div>
              <div className="feature-content">
                <h3 className="feature-title">Beautiful Memories</h3>
                <p className="feature-text">
                  Add photos to your entries and relive your favorite moments.
                  Create a visual timeline of your life's journey.
                </p>
              </div>
            </div>

            {/* Feature 3 - Image Left */}
            <div className="feature-card">
              <div className="feature-image">
                <div className="image-placeholder">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <path d="M21 15l-5-5L5 21"/>
                  </svg>
                  <span>Screenshot 3</span>
                </div>
              </div>
              <div className="feature-content">
                <h3 className="feature-title">Private & Secure</h3>
                <p className="feature-text">
                  Your entries are yours alone. We prioritize your privacy with
                  secure storage and no third-party tracking.
                </p>
              </div>
            </div>
          </div>

          {/* Download CTA */}
          <div className="download-section">
            <h3 className="download-title">Ready to start your journey?</h3>
            <div className="download-buttons">
              <a href="#" className="download-button">
                <svg viewBox="0 0 24 24" fill="currentColor" className="store-icon">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="download-text">
                  <span className="download-label">Download on the</span>
                  <span className="download-store">App Store</span>
                </div>
              </a>
            </div>
          </div>
          {/* Bottom Links */}
          <div className="home-buttons bottom-buttons">
            <Link to="/privacy" className="home-button">
              <span className="button-icon">
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2L3 6v6c0 4 3 7 7 8 4-1 7-4 7-8V6l-7-4z"/>
                </svg>
              </span>
              {t('privacyPolicy')}
            </Link>
            <Link to="/terms" className="home-button">
              <span className="button-icon">
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path d="M4 2h12a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1zm2 3v2h8V5H6zm0 4v2h8V9H6zm0 4v2h5v-2H6z"/>
                </svg>
              </span>
              {t('termsAndConditions')}
            </Link>
            <Link to="/about" className="home-button">
              <span className="button-icon">
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2a8 8 0 100 16A8 8 0 0010 2zm0 3a2 2 0 110 4 2 2 0 010-4zm0 4a1 1 0 011 1v4a1 1 0 11-2 0v-4a1 1 0 011-1z"/>
                </svg>
              </span>
              {t('contacts')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
