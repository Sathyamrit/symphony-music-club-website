import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar /> 
      </div>
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;