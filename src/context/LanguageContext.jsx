import { createContext, useState, useEffect } from 'react'

export const LanguageContext = createContext()

const translations = {
  EN: {
    // Navbar
    appName: 'A Day App',

    // Home
    homeSubtitle: 'Plan your perfect day',
    privacyPolicy: 'Privacy Policy',
    termsAndConditions: 'Terms and Conditions',
    contacts: 'Contacts',

    // Privacy Policy
    privacyTitle: 'Privacy Policy',
    privacy1Title: '1. Information We Collect',
    privacy1Text: 'This section will describe the types of information we collect from users of A Day App, including personal data and usage information.',
    privacy2Title: '2. How We Use Your Information',
    privacy2Text: 'This section will explain how we use the collected information to provide and improve our services.',
    privacy3Title: '3. Data Storage and Security',
    privacy3Text: 'This section will outline our data storage practices and the security measures we implement to protect your information.',
    privacy4Title: '4. Your Rights',
    privacy4Text: 'This section will describe your rights regarding your personal data, including access, correction, and deletion requests.',
    privacy5Title: '5. Contact Us',
    privacy5Text: 'If you have any questions about this Privacy Policy, please contact us at',

    // Terms
    termsTitle: 'Terms and Conditions',
    terms1Title: '1. Acceptance of Terms',
    terms1Text: 'By accessing and using A Day App, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our application.',
    terms2Title: '2. Use of Service',
    terms2Text: 'This section will describe the permitted uses of A Day App and any restrictions that apply to users of the service.',
    terms3Title: '3. User Accounts',
    terms3Text: 'This section will outline the requirements and responsibilities associated with creating and maintaining a user account.',
    terms4Title: '4. Intellectual Property',
    terms4Text: 'This section will describe the intellectual property rights related to the app and its content.',
    terms5Title: '5. Limitation of Liability',
    terms5Text: 'This section will outline the limitations of our liability in connection with your use of A Day App.',
    terms6Title: '6. Changes to Terms',
    terms6Text: 'We reserve the right to modify these terms at any time. Users will be notified of any significant changes.',
    terms7Title: '7. Contact',
    terms7Text: 'For questions about these Terms and Conditions, please contact us at',

    // Contacts
    contactsTitle: 'Contact Us',
    contactsIntro: 'We would love to hear from you! Whether you have questions, feedback, or suggestions for A Day App, our team is here to help. Reach out to us and we will get back to you as soon as possible.',
    email: 'Email',
  },
  TW: {
    // Navbar
    appName: 'A Day App',

    // Home
    homeSubtitle: '規劃完美的一天',
    privacyPolicy: '隱私權政策',
    termsAndConditions: '服務條款',
    contacts: '聯絡我們',

    // Privacy Policy
    privacyTitle: '隱私權政策',
    privacy1Title: '1. 我們收集的資訊',
    privacy1Text: '本節將說明我們從 A Day App 使用者收集的資訊類型，包括個人資料和使用資訊。',
    privacy2Title: '2. 我們如何使用您的資訊',
    privacy2Text: '本節將說明我們如何使用收集到的資訊來提供和改善我們的服務。',
    privacy3Title: '3. 資料儲存與安全',
    privacy3Text: '本節將概述我們的資料儲存做法以及我們為保護您的資訊所實施的安全措施。',
    privacy4Title: '4. 您的權利',
    privacy4Text: '本節將說明您對個人資料的權利，包括存取、更正和刪除請求。',
    privacy5Title: '5. 聯絡我們',
    privacy5Text: '如果您對本隱私權政策有任何疑問，請透過以下方式聯絡我們：',

    // Terms
    termsTitle: '服務條款',
    terms1Title: '1. 條款接受',
    terms1Text: '存取和使用 A Day App 即表示您同意受這些服務條款的約束。如果您不同意這些條款的任何部分，請勿使用我們的應用程式。',
    terms2Title: '2. 服務使用',
    terms2Text: '本節將說明 A Day App 的許可用途以及適用於服務使用者的任何限制。',
    terms3Title: '3. 使用者帳戶',
    terms3Text: '本節將概述與建立和維護使用者帳戶相關的要求和責任。',
    terms4Title: '4. 智慧財產權',
    terms4Text: '本節將說明與應用程式及其內容相關的智慧財產權。',
    terms5Title: '5. 責任限制',
    terms5Text: '本節將概述我們因您使用 A Day App 而產生的責任限制。',
    terms6Title: '6. 條款變更',
    terms6Text: '我們保留隨時修改這些條款的權利。如有重大變更，將通知使用者。',
    terms7Title: '7. 聯絡方式',
    terms7Text: '如對這些服務條款有任何疑問，請透過以下方式聯絡我們：',

    // Contacts
    contactsTitle: '聯絡我們',
    contactsIntro: '歡迎任何問題、回饋或建議，我們會盡快回覆您。',
    email: '信箱',
  }
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language')
    return saved || 'EN'
  })

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'EN' ? 'TW' : 'EN')
  }

  const t = (key) => translations[language][key] || key

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
