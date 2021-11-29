//import logo from './logo.svg';
import './App.css';
import Navbar from './homepage/01-header/Navbar';
import Banner from './homepage/02-sections/01-banner/Banner';
import Tabs from './homepage/02-sections/02-tabs/Tabs';
import Grid from './homepage/02-sections/03-image-grid/Grid';
import Projects from './homepage/02-sections/04-projects/Projects';
import Footer from './homepage/03-footer/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Tabs/>
      <Grid/>
      <Projects/>
      <Footer/>
    </>
  );
}

export default App;
