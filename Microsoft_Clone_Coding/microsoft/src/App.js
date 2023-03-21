import './App.css';
import Navbar from './components/Navbar/Navbar';
import ButtonIcon from './components/ButtonIcon/ButtonIcon';
import Goods from './components/Goods/Goods';
import products from './components/Goods/products';
import business from './components/Goods/business';
import Xbox from './components/Xbox/Xbox';

function App() {
  return (
    <>
      <Navbar/>
      <ButtonIcon/>
      <Goods data={products} isBusiness={false}/>
      <Xbox/>
      <Goods data={business} isBusiness={true}/>
    </>
  );
}

export default App;
