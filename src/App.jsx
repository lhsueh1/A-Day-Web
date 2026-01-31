import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions'
import Contacts from './pages/Contacts/Contacts'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="privacy" element={<PrivacyPolicy />} />
        <Route path="terms" element={<TermsAndConditions />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  )
}

export default App
