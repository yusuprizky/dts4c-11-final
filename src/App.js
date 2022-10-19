import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HotTopicsPage from './pages/HotTopicsPage';
import LatestNewsPage from './pages/LatestNewsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="hottopics/:id" element={<HotTopicsPage />} />
        <Route path="latestnews/:id" element={<LatestNewsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
