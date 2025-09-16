import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import TryMe from './pages/TryMe/TryMe';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/tryme" element={<TryMe />} />
      </Routes>
    </Router>
  );
}

export default App;