import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import TryMe from './pages/TryMe/TryMe';
import Result from './pages/Result/Result';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/tryme" element={<TryMe />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;