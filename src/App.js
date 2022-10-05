import { Footer } from './Components/Footer/Footer';
import { Explore } from './Components/Explore/Explore';
import { Home } from './Pages/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { OrderOnline } from './Pages/OrderOnline/OrderOnline';
import { Login } from './Popups/Login/Login';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route index element ={<Home />} />
        <Route path='order-online' element ={<OrderOnline />} />
        <Route path='login' element ={<Login />} />
      </Routes>
      </BrowserRouter>

      <Explore />
      <Footer />
    </div>
  );
}

export default App;
