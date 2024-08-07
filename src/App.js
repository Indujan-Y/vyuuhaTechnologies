import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CompanyPage from './vyuuhaTechnologies/companyPage/CompanyPage';
import AviammoPage from './vyuuhaTechnologies/aviammo/AviammoPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<CompanyPage />} />
          <Route path="/aviammo" element={<AviammoPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;