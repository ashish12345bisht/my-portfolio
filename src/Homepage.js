import './App.css';
import Banner from './homepage/02-sections/01-banner/Banner';
import Tabs from './homepage/02-sections/02-tabs/Tabs';
import Grid from './homepage/02-sections/03-image-grid/Grid';
import Projects from './homepage/02-sections/04-projects/Projects';

function Homepage() {
  return (
    <>
      <Banner />
      <Tabs />
      <Grid />
      <Projects />
    </>
  );
}
export default Homepage;