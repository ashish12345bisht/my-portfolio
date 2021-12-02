import './App.css';
import Career from './Career';
import {useState, useEffect} from 'react'
import Navbar from './homepage/01-header/Navbar';
import Footer from './homepage/03-footer/Footer';
import Homepage from './Homepage';
import Academics from './Academics';
import Personal from './Personal';
import Contact from './Contact';
import Scrollup from './Scrollup';

function App() {
  const [home, setHome]=useState(true);
  const [academics, setAcademics]=useState(false);
  const [career, setCareer]=useState(false);
  const [personal, setPersonal]=useState(false);
  const [contact, setContact]=useState(false);
  const [value, setValue]=useState(0);
  useEffect(()=>{
    if(value===1){
      setHome(true);
      setAcademics(false);
      setCareer(false);
      setPersonal(false);
      setContact(false);
    }
    else if(value===2){
      setHome(false);
      setAcademics(true);
      setCareer(false);
      setPersonal(false);
      setContact(false);
    }
    else if(value===3){
      setHome(false);
      setAcademics(false);
      setCareer(true);
      setPersonal(false);
      setContact(false);
    }
    else if(value===4){
      setHome(false);
      setAcademics(false);
      setCareer(false);
      setPersonal(true);
      setContact(false);
    }
    else if(value===5){
      setHome(false);
      setAcademics(false);
      setCareer(false);
      setPersonal(false);
      setContact(true);
    }
  },[value])
  return (
    <>
      <Navbar setValue={setValue}/>
      {home && <Homepage/>}
      {academics && <Academics/>}
      {career && <Career/>}
      {personal && <Personal/>}
      {contact && <Contact/>}
      <Scrollup/>
      <Footer setValue={setValue}/>
    </>
  );
}

export default App;
