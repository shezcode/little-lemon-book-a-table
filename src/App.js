import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { Link, Route, Routes } from 'react-router-dom';
import BookingPage from './components/BookingPage';
import HomePage from './components/HomePage';




function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservations" element={<BookingPage/>}/>
      </Routes>
    </>
  );
}

export default App;
