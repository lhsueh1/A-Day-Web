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
    privacyLastUpdated: 'Last Updated: January 31, 2026',
    privacyIntro: 'A Day ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use the A Day mobile application (the "App").',
    privacy1Title: '1. Information We Collect',
    privacy1Text: 'A Day is designed with privacy in mind. Currently, all your data is stored locally on your device using SwiftData. The information processed by the App includes:\n\n• Task Data: Tasks, subtasks, action items, descriptions, dates, and completion status you create in the App.\n• AI Preferences: Your AI assistant settings, presets, and preferences for task breakdown features.\n• App Settings: Theme preferences, language settings, and other customization options.\n\nWe do NOT collect or transmit your personal information to our servers. All data remains on your device. We do not actively collect usage data or analytics. Note that Apple may collect basic diagnostic and usage information as described in Apple\'s privacy policy.',
    privacy2Title: '2. Future Cloud Sync Features',
    privacy2Text: 'We are developing CloudKit integration to enable data synchronization across your Apple devices. When this feature is released:\n\n• Your task data will be synced through Apple\'s CloudKit service.\n• Data will be encrypted in transit and at rest.\n• Only you will have access to your synced data through your Apple ID.\n• You can opt-out of cloud sync at any time.\n• We will update this policy before implementing cloud sync features.',
    privacy3Title: '3. AI Integration',
    privacy3Text: 'The App includes AI-powered features to help break down complex tasks into actionable subtasks. Currently, AI features use demonstration data only. When AI integration is fully implemented:\n\n• Your task descriptions may be processed by third-party AI services to generate subtask suggestions.\n• We will use secure, privacy-focused AI providers.\n• Your data will be processed ephemerally and not stored by AI providers.\n• AI API keys will be stored securely in your device\'s Keychain.\n• You can disable AI features at any time in Settings.',
    privacy4Title: '4. In-App Purchases',
    privacy4Text: 'The App offers premium themes and features through Apple\'s In-App Purchase system. We do not process payment information directly. All purchases are handled by Apple, subject to Apple\'s privacy policy and terms of service.',
    privacy5Title: '5. Data Security',
    privacy5Text: 'We implement appropriate security measures to protect your data:\n\n• All data is stored locally using Apple\'s SwiftData framework with built-in encryption.\n• API keys and sensitive data are stored in the iOS Keychain.\n• We follow Apple\'s security best practices for iOS development.\n• When cloud sync is enabled, data will be encrypted using Apple\'s CloudKit security.',
    privacy6Title: '6. Your Rights',
    privacy6Text: 'You have complete control over your data:\n\n• Access: View all your data within the App.\n• Deletion: Delete individual tasks or all data at any time.\n• Export: Export your data in standard formats (feature planned).\n• Opt-Out: Disable cloud sync, AI features, or analytics at any time.\n\nSince all data is currently stored locally on your device, uninstalling the App will permanently delete all your data.',
    privacy7Title: '7. Children\'s Privacy',
    privacy7Text: 'The App is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.',
    privacy8Title: '8. Changes to This Policy',
    privacy8Text: 'We may update this Privacy Policy from time to time. We will notify you of any material changes through the App or by email. Continued use of the App after changes constitutes acceptance of the updated policy.',
    privacy9Title: '9. Contact Us',
    privacy9Text: 'If you have any questions about this Privacy Policy or your data, please contact us at',

    // Terms
    termsTitle: 'Terms and Conditions',
    termsLastUpdated: 'Last Updated: January 31, 2026',
    termsIntro: 'Welcome to A Day! These Terms and Conditions ("Terms") govern your use of the A Day mobile application (the "App"). By downloading, installing, or using the App, you agree to be bound by these Terms. If you do not agree, please do not use the App.',
    terms1Title: '1. Acceptance of Terms',
    terms1Text: 'By accessing and using A Day, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree with any part of these terms, you must discontinue use of the App immediately.',
    terms2Title: '2. License to Use',
    terms2Text: 'Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to download, install, and use the App on your personal iOS devices for personal, non-commercial purposes. This license does not include the right to:\n\n• Modify, adapt, or create derivative works of the App.\n• Reverse engineer, decompile, or disassemble the App.\n• Remove or alter any copyright, trademark, or proprietary notices.\n• Use the App for any illegal or unauthorized purpose.\n• Distribute, sublicense, or transfer the App to third parties.',
    terms3Title: '3. User Responsibilities',
    terms3Text: 'You are responsible for:\n\n• Maintaining the security of your device and any data stored in the App.\n• All content you create, store, or process using the App.\n• Ensuring your use of the App complies with applicable laws and regulations.\n• Backing up your data; we are not responsible for data loss.\n• Any consequences of using AI-generated task suggestions (when implemented).\n\nYou agree not to use the App in any way that could damage, disable, overburden, or impair the App or interfere with any other party\'s use of the App.',
    terms4Title: '4. In-App Purchases',
    terms4Text: 'The App offers premium themes and features available through In-App Purchases:\n\n• All purchases are processed through Apple\'s App Store and subject to Apple\'s Terms of Service.\n• Premium content is licensed, not sold, to you.\n• Purchases are non-refundable except as required by law or Apple\'s refund policy.\n• Premium features are tied to your Apple ID and may be restored on other devices.\n• We reserve the right to modify pricing or discontinue premium features with reasonable notice.',
    terms5Title: '5. AI Features',
    terms5Text: 'The App includes AI-powered task breakdown features (currently in development):\n\n• AI-generated suggestions are provided for informational purposes only.\n• We do not guarantee the accuracy, completeness, or usefulness of AI-generated content.\n• You are solely responsible for evaluating and using AI suggestions.\n• AI features may be subject to usage limits or require additional terms when implemented.\n• We reserve the right to modify or discontinue AI features at any time.',
    terms6Title: '6. Intellectual Property',
    terms6Text: 'All rights, title, and interest in and to the App, including all content, features, functionality, graphics, design, code, and trademarks, are and will remain the exclusive property of A Day and its licensors. You retain ownership of all data you create in the App.\n\nThe A Day name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of A Day. You may not use these marks without our prior written permission.',
    terms7Title: '7. Data and Privacy',
    terms7Text: 'Your use of the App is also governed by our Privacy Policy. Currently, all data is stored locally on your device. When cloud sync features are implemented, additional terms may apply. You are responsible for backing up your data. We are not liable for any data loss.',
    terms8Title: '8. Disclaimer of Warranties',
    terms8Text: 'THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.\n\nWe do not warrant that:\n• The App will be uninterrupted, secure, or error-free.\n• Defects will be corrected.\n• The App is free of viruses or other harmful components.\n• AI-generated content will be accurate or suitable for your needs.',
    terms9Title: '9. Limitation of Liability',
    terms9Text: 'TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL A DAY, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE APP.\n\nOur total liability to you for all claims arising from your use of the App shall not exceed the amount you paid us in the twelve (12) months preceding the claim, or $100 USD, whichever is greater.',
    terms10Title: '10. Changes to Terms',
    terms10Text: 'We reserve the right to modify these Terms at any time. We will notify users of material changes through the App or by email. Your continued use of the App after changes become effective constitutes acceptance of the revised Terms. If you do not agree to the changes, you must stop using the App.',
    terms11Title: '11. Termination',
    terms11Text: 'We may terminate or suspend your access to the App at any time, without prior notice or liability, for any reason, including breach of these Terms. Upon termination, your right to use the App will immediately cease. All provisions that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.',
    terms12Title: '12. Governing Law and Dispute Resolution',
    terms12Text: 'These Terms shall be governed by and construed in accordance with the laws of the United States and the State of California, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of the App shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, or in the state or federal courts located in California.\n\nIf you are accessing the App from outside the United States, you are responsible for compliance with local laws in your jurisdiction.',
    terms13Title: '13. Apple App Store',
    terms13Text: 'If you download the App from the Apple App Store, you acknowledge that:\n\n• These Terms are between you and A Day, not Apple.\n• Apple has no obligation to provide maintenance or support for the App.\n• Apple is not responsible for any product warranties.\n• Apple is not responsible for addressing any claims relating to the App.\n• Apple is a third-party beneficiary of these Terms and may enforce them.',
    terms14Title: '14. Severability',
    terms14Text: 'If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.',
    terms15Title: '15. Contact Us',
    terms15Text: 'If you have any questions, concerns, or complaints about these Terms, please contact us at',

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
    privacyLastUpdated: '最後更新日期：2026 年 1 月 31 日',
    privacyIntro: 'A Day（「我們」、「我們的」）尊重您的隱私，並致力於保護您的個人資訊。本隱私權政策說明當您使用 A Day 行動應用程式（「本 App」）時，我們如何收集、使用和保護您的資料。',
    privacy1Title: '1. 我們收集的資訊',
    privacy1Text: 'A Day 在設計時即以隱私為優先考量。目前，您的所有資料都使用 SwiftData 儲存在您的裝置本機。本 App 處理的資訊包括：\n\n• 任務資料：您在 App 中建立的任務、子任務、行動項目、描述、日期和完成狀態。\n• AI 偏好設定：您的 AI 助理設定、預設選項和任務分解功能偏好。\n• App 設定：主題偏好、語言設定和其他自訂選項。\n\n我們不會收集或傳輸您的個人資訊到我們的伺服器。所有資料都保留在您的裝置上。我們不會主動收集使用資料或分析資料。請注意，Apple 可能會收集基本診斷和使用資訊，如 Apple 隱私權政策所述。',
    privacy2Title: '2. 未來雲端同步功能',
    privacy2Text: '我們正在開發 CloudKit 整合功能，以實現跨 Apple 裝置的資料同步。當此功能發布時：\n\n• 您的任務資料將透過 Apple 的 CloudKit 服務進行同步。\n• 資料在傳輸和靜態時都將被加密。\n• 只有您可以透過您的 Apple ID 存取您的同步資料。\n• 您可以隨時選擇退出雲端同步。\n• 我們將在實施雲端同步功能之前更新本政策。',
    privacy3Title: '3. AI 整合',
    privacy3Text: '本 App 包含 AI 驅動的功能，協助將複雜任務分解為可執行的子任務。目前，AI 功能僅使用示範資料。當 AI 整合完全實施時：\n\n• 您的任務描述可能會由第三方 AI 服務處理，以產生子任務建議。\n• 我們將使用安全、注重隱私的 AI 提供商。\n• 您的資料將被暫時處理，不會被 AI 提供商儲存。\n• AI API 金鑰將安全地儲存在您裝置的鑰匙圈中。\n• 您可以隨時在設定中停用 AI 功能。',
    privacy4Title: '4. App 內購買',
    privacy4Text: '本 App 透過 Apple 的 App 內購買系統提供進階主題和功能。我們不直接處理付款資訊。所有購買都由 Apple 處理，受 Apple 隱私權政策和服務條款約束。',
    privacy5Title: '5. 資料安全',
    privacy5Text: '我們實施適當的安全措施來保護您的資料：\n\n• 所有資料都使用 Apple 的 SwiftData 框架儲存在本機，並具有內建加密功能。\n• API 金鑰和敏感資料儲存在 iOS 鑰匙圈中。\n• 我們遵循 Apple 的 iOS 開發安全最佳實務。\n• 當啟用雲端同步時，資料將使用 Apple CloudKit 安全性進行加密。',
    privacy6Title: '6. 您的權利',
    privacy6Text: '您對您的資料擁有完全控制權：\n\n• 存取：在 App 中檢視所有資料。\n• 刪除：隨時刪除個別任務或所有資料。\n• 匯出：以標準格式匯出您的資料（功能規劃中）。\n• 選擇退出：隨時停用雲端同步、AI 功能或分析。\n\n由於所有資料目前都儲存在您的裝置本機，解除安裝 App 將永久刪除您的所有資料。',
    privacy7Title: '7. 兒童隱私',
    privacy7Text: '本 App 不適用於 13 歲以下的兒童。我們不會有意收集 13 歲以下兒童的個人資訊。',
    privacy8Title: '8. 本政策的變更',
    privacy8Text: '我們可能會不時更新本隱私權政策。我們將透過 App 或電子郵件通知您任何重大變更。在變更後繼續使用 App 即表示接受更新後的政策。',
    privacy9Title: '9. 聯絡我們',
    privacy9Text: '如果您對本隱私權政策或您的資料有任何疑問，請透過以下方式聯絡我們：',

    // Terms
    termsTitle: '服務條款',
    termsLastUpdated: '最後更新日期：2026 年 1 月 31 日',
    termsIntro: '歡迎使用 A Day！這些服務條款（「條款」）規範您對 A Day 行動應用程式（「本 App」）的使用。透過下載、安裝或使用本 App，您同意受這些條款約束。如果您不同意，請勿使用本 App。',
    terms1Title: '1. 條款接受',
    terms1Text: '透過存取和使用 A Day，您確認已閱讀、理解並同意受這些條款和我們的隱私權政策約束。如果您不同意這些條款的任何部分，您必須立即停止使用本 App。',
    terms2Title: '2. 使用授權',
    terms2Text: '在您遵守這些條款的前提下，我們授予您有限、非獨家、不可轉讓、可撤銷的授權，允許您在個人 iOS 裝置上下載、安裝和使用本 App，僅限個人非商業用途。此授權不包括以下權利：\n\n• 修改、改編或創建本 App 的衍生作品。\n• 對本 App 進行逆向工程、反編譯或反組譯。\n• 移除或更改任何版權、商標或所有權聲明。\n• 將本 App 用於任何非法或未經授權的目的。\n• 向第三方分發、再授權或轉讓本 App。',
    terms3Title: '3. 使用者責任',
    terms3Text: '您有責任：\n\n• 維護您裝置的安全以及儲存在 App 中的任何資料。\n• 您使用 App 建立、儲存或處理的所有內容。\n• 確保您使用 App 的方式符合適用的法律和法規。\n• 備份您的資料；我們不對資料遺失負責。\n• 使用 AI 生成的任務建議（實施後）的任何後果。\n\n您同意不以任何可能損害、停用、過度負荷或損害本 App 或干擾任何其他方使用本 App 的方式使用本 App。',
    terms4Title: '4. App 內購買',
    terms4Text: '本 App 透過 App 內購買提供進階主題和功能：\n\n• 所有購買均透過 Apple App Store 處理，並受 Apple 服務條款約束。\n• 進階內容是授權給您使用，而非出售。\n• 除法律或 Apple 退款政策要求外，購買不可退款。\n• 進階功能與您的 Apple ID 綁定，可在其他裝置上恢復。\n• 我們保留在合理通知後修改定價或停止進階功能的權利。',
    terms5Title: '5. AI 功能',
    terms5Text: '本 App 包含 AI 驅動的任務分解功能（目前開發中）：\n\n• AI 生成的建議僅供參考。\n• 我們不保證 AI 生成內容的準確性、完整性或實用性。\n• 您對評估和使用 AI 建議負全責。\n• AI 功能可能受使用限制或在實施時需要額外條款。\n• 我們保留隨時修改或停止 AI 功能的權利。',
    terms6Title: '6. 智慧財產權',
    terms6Text: '本 App 的所有權利、所有權和利益，包括所有內容、功能、功能性、圖形、設計、程式碼和商標，現在和將來都是 A Day 及其授權人的專屬財產。您保留在 App 中建立的所有資料的所有權。\n\nA Day 名稱、標誌以及所有相關名稱、標誌、產品和服務名稱、設計和標語都是 A Day 的商標。未經我們事先書面許可，您不得使用這些標記。',
    terms7Title: '7. 資料與隱私',
    terms7Text: '您使用本 App 也受我們隱私權政策的約束。目前，所有資料都儲存在您的裝置本機。當實施雲端同步功能時，可能會適用額外條款。您有責任備份您的資料。我們對任何資料遺失不承擔責任。',
    terms8Title: '8. 免責聲明',
    terms8Text: '本 APP 按「現狀」和「現有」基礎提供，不提供任何明示或暗示的保證，包括但不限於適銷性、特定目的適用性和非侵權的暗示保證。\n\n我們不保證：\n• 本 App 將不間斷、安全或無錯誤。\n• 缺陷將被修正。\n• 本 App 不含病毒或其他有害組件。\n• AI 生成的內容將準確或適合您的需求。',
    terms9Title: '9. 責任限制',
    terms9Text: '在法律允許的最大範圍內，A DAY、其高級職員、董事、員工或代理人在任何情況下均不對任何間接、附帶、特殊、後果性或懲罰性損害賠償負責，包括但不限於利潤、資料、使用或商譽的損失，這些損失源於或與您使用本 APP 有關。\n\n我們對您因使用本 App 而產生的所有索賠的總責任，不得超過您在索賠前十二（12）個月內支付給我們的金額，或 100 美元（以較高者為準）。',
    terms10Title: '10. 條款變更',
    terms10Text: '我們保留隨時修改這些條款的權利。我們將透過 App 或電子郵件通知使用者重大變更。在變更生效後繼續使用 App 即表示接受修訂後的條款。如果您不同意變更，您必須停止使用本 App。',
    terms11Title: '11. 終止',
    terms11Text: '我們可能隨時終止或暫停您對本 App 的存取權限，無需事先通知或承擔責任，原因包括違反這些條款。終止後，您使用本 App 的權利將立即停止。所有依其性質應在終止後繼續有效的條款應繼續有效，包括所有權條款、免責聲明和責任限制。',
    terms12Title: '12. 管轄法律與爭議解決',
    terms12Text: '這些條款應依照美國和加州法律進行管轄和解釋，不考慮其法律衝突條款。因這些條款或您使用本 App 而產生的任何爭議，應根據美國仲裁協會的規則透過具有約束力的仲裁解決，或在加州的州法院或聯邦法院解決。\n\n如果您從美國以外的地區存取本 App，您有責任遵守您所在司法管轄區的當地法律。',
    terms13Title: '13. Apple App Store',
    terms13Text: '如果您從 Apple App Store 下載本 App，您確認：\n\n• 這些條款是在您和 A Day 之間，而非 Apple。\n• Apple 沒有義務為本 App 提供維護或支援。\n• Apple 不對任何產品保證負責。\n• Apple 不對與本 App 相關的任何索賠負責。\n• Apple 是這些條款的第三方受益人，可以執行這些條款。',
    terms14Title: '14. 可分割性',
    terms14Text: '如果這些條款的任何條款被認定為不可執行或無效，該條款應在必要的最小範圍內受到限制或取消，其餘條款應繼續完全有效。',
    terms15Title: '15. 聯絡我們',
    terms15Text: '如果您對這些條款有任何疑問、疑慮或投訴，請透過以下方式聯絡我們：',

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
