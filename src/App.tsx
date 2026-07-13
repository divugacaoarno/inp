import { HelmetProvider } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
