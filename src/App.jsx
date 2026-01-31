import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions'
import AboutUs from './pages/AboutUs/AboutUs'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="privacy" element={<PrivacyPolicy />} />
        <Route path="terms" element={<TermsAndConditions />} />
        <Route path="about" element={<AboutUs />} />
      </Route>
    </Routes>
  )
}

export default App
