import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import DetailsPage from './components/details/DetailsPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/details/:id" element={<DetailsPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  </Router>
);

export default App;
