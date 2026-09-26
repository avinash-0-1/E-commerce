import { Routes, Route } from 'react-router';
import Header from './components/Header'
import Home from './pages/Home';
import CheckOut from './pages/CheckOut'
import Orders from './pages/Orders'
import Tracking from './pages/Tracking'
import ErrorPage from './pages/ErrorPage';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='checkout' element={<CheckOut />} />
        <Route path='orders' element={<Orders />} />
        <Route path='tracking' element={<Tracking />} />
        <Route
          path="*"
          element={<ErrorPage/>}
        />
      </Routes>
    </>
  )
}

export default App
