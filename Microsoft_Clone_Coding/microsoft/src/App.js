import './App.css';
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel'
import ButtonIcon from './components/ButtonIcon/ButtonIcon'
import Goods from './components/Goods/Goods';
import Xbox from './components/Xbox/Xbox';
import Business from './components/Business/Business';
import TopBtn from './components/TopBtn/TopBtn';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Carousel/>
      <ButtonIcon/>
      <Goods/>
      <Xbox/>
      <Business/>
      <TopBtn/>
      <Footer/>
    </>
  );
}

export default App;
