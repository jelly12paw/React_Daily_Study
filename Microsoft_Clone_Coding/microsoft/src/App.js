import './App.css';
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import ButtonIcon from './components/ButtonIcon/ButtonIcon';
import Goods from './components/Goods/Goods';
import products from './components/Goods/products';
import business from './components/Goods/business';
import Xbox from './components/Xbox/Xbox';
import Footer from './components/Footer/Footer';
import TopBtn from './components/TopBtn/TopBtn';

function App() {
  return (
    <>
      <Navbar/>
      <Carousel/>
      <ButtonIcon/>
      <Goods data={products} isBusiness={false}/>
      <Xbox/>
      <Goods data={business} isBusiness={true}/>
      <TopBtn/>
      <Footer/>
    </>
  );
}

export default App;
