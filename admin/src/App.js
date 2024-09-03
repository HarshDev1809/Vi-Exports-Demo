import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AdminHomePage from './pages/AdminHomePage/AdminHomePage';
import OrderPage from './pages/OrderPage/OrderPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminHomePage />} />
        <Route path="/admin/order" element={<OrderPage />} />
      </Routes>
    </Router>
    
  );
}

export default App;
