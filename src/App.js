import './App.css';
import { Route, Routes } from 'react-router-dom';
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
