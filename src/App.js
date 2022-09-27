import { Footer } from './Components/Footer/Footer';
import { Explore } from './Components/Explore/Explore';
import { Home } from './Pages/Home/Home';




import { BrowserRouter, Routes, Route } from "react-router-dom";
import { OrderOnline } from './Pages/OrderOnline/OrderOnline';



function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route index element ={<Home />} />
        <Route path='order-online' element ={<OrderOnline />} />
      </Routes>
      </BrowserRouter>
    
      <Explore />
      <Footer />
    </div>
  );
}

export default App;
