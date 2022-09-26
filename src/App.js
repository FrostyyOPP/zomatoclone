import { Card } from './Components/Cards/Card';
import { Collection } from './Components/Collections/Collection';
import { Cta } from './Components/CTA/Cta';
import { Explore } from './Components/Explore/Explore';
import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header'
import { Locations } from './Components/Locations/Locations';
import { Login } from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      <Header />

      <div className='container'>
        <Login />
        <Card />
        <Collection />
        <Locations />
      </div>
      <Cta />
      <div className='container'>
        <Explore />
      </div>
      <Footer />
    </div>
  );
}

export default App;
