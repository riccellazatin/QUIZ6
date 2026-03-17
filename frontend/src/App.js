import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import {Container} from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import DetailScreen from './screens/DetailScreen';
import PaymentScreen from './screens/PaymentScreen';

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/services/:service_name' element={<DetailScreen />} />
        <Route path='/payment' element={<PaymentScreen />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
