import './App.scss';
import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Header from './Header/Header';
import Banner from '../components/Banner/Banner';
import OurTeam from './OurTeam/OurTeam';
import Products from './Products/Products';
import PartyTime from './PartyTime/PartyTime';
import Contact from './Contact/Contact';
import Events from './Events/Events';
import Footer from '../components/Footer/Footer';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material/';
import { MdEmail } from 'react-icons/md';
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
function App() {
  return (
    <div className="">
      <Navbar />
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
        }}
        icon={<SpeedDialIcon />}
      >
        <SpeedDialAction
          icon={
            <a
              className="speedDialAction"
              href="https://www.instagram.com/tortolitos_berlin/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram />
            </a>
          }
          tooltipTitle="Instagram"
        />
        <SpeedDialAction
          className="speedDialAction"
          icon={
            <a
              className="speedDialAction"
              href="https://www.instagram.com/tortolitos_berlin/"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook />
            </a>
          }
          tooltipTitle="Facebook"
        />
        <SpeedDialAction
          icon={
            <a
              className="speedDialAction"
              href="mailto:tortolitosberlin@gmail.com"
            >
              <MdEmail />
            </a>
          }
          tooltipTitle="Email"
        />
      </SpeedDial>
      <Header />
      <Banner />
      <OurTeam />
      <Products />
      <PartyTime />
      <Contact />
      <Events />
      <Footer />
    </div>
  );
}

export default App;
