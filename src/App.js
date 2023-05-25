import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import DetailsPage from './components/details/DetailsPage';
import NavBar from './components/navbar/NavBar';

const App = () => (
  <Router>
    <NavBar />
    <Routes>
      <Route path="/details/:id" element={<DetailsPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  </Router>
);

export default App;
