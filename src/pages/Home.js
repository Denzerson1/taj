import Navbar from '../components/navbar';
import Slideshow from '../components/slideshow';
import Richtext from '../components/richtext';
import Cuisine from '../components/cuisine';
import Carousel from '../components/carousel';

const Home = () => {
    return (
      <div>
        <Navbar />
        <Slideshow />
        <Richtext />
        <Cuisine />
        <Carousel />
      </div>
    );
  };
  
  export default Home;  