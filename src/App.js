import { createContext } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home/Home';
import Shop from './pages/Shop';
import Favourites from './pages/Favourites';
import { useAppLogic } from './hooks/useAppLogic';
import SignUp from './pages/signUp/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modals from './Components/Modals';

export const appContext = createContext();
function App() {
  return (
    <>
      <appContext.Provider value={useAppLogic()}>
        <Navbar />
        <Modals />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/favourites' element={<Favourites />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </appContext.Provider>
    </>
  );
}

export default App;
