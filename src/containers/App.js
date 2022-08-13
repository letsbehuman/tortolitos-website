import './App.scss';
import Navbar from '../components/Navbar/Navbar';
import Header from './Header/Header';
import Banner from '../components/Banner/Banner';
import OurTeam from './OurTeam/OurTeam';
import Products from './Products/Products';
import PartyTime from './PartyTime/PartyTime';
import Contact from './Contact/Contact';
import Events from './Events/Events';

function App() {
  return (
    <div className="">
      <body>
        <Navbar />
        <Header />
        <Banner />
        <OurTeam />
        <Products />
        <PartyTime />
        <Contact />
        <Events />
      </body>
    </div>
  );
}

export default App;