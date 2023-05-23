import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import DetailsPage from './components/DetailsPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/details/:id" element={<DetailsPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  </Router>
);

export default App;
