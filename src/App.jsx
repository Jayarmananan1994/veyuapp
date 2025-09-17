import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { OutfitProvider } from './context/OutfitContext.jsx';
import Homepage from './pages/Homepage/Homepage';
import TryMe from './pages/TryMe/TryMe';
import Result from './pages/Result/Result';

function App() {
  return (
    <OutfitProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/tryme" element={<TryMe />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </OutfitProvider>
  );
}

export default App;