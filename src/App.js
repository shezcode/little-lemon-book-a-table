import './App.css';
import { Route, Routes } from 'react-router-dom';
import BookingPage from './components/BookingPage';
import HomePage from './components/HomePage';
import ConfirmedBooking from './components/ConfirmedBooking';




function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservations" element={<BookingPage/>}/>
        <Route path='/confirm' element={<ConfirmedBooking />}/>
      </Routes>
    </>
  );
}

export default App;
