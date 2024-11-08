import Navbar from '../components/navbar';
import Slideshow from '../components/slideshow';
import Richtext from '../components/richtext';
import Cuisine from '../components/cuisine';
import Takeout from '../components/takeout';
import Carousel from '../components/carousel';
import Footer from '../components/Footer';
import { LanguageProvider } from '../LanguageContext';

const Home = () => {
    return (
      <LanguageProvider>
        <Navbar />
        <Slideshow />
        <Richtext />
        <Cuisine />
        <Carousel />
        <Footer />
      </LanguageProvider>
    );
  };
  
  export default Home;  