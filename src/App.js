import ProductsList from './components/ProductsList/ProductsList';
import ShopingList from './components/ShopingList/ShopingList';
import AddProducts from './components/AddProducts/AddProducts';
import ProductsFilters from './components/ProductsFilters/ProductsFilters';
import styles from './App.module.scss';
import products from './common/consts/produkty'
import { useState } from 'react';

function App() {
  const [resultsToDisplay, setResultsToDisplay] = useState(products);  
  console.log(resultsToDisplay);
  return (
    <div className={styles.appWrapper}>
      <AddProducts />
      <ProductsFilters products={products} sendFilteredProductsToParentComponent={setResultsToDisplay} />
      <div className={styles.columnsWrapper}>
        <ProductsList productsToDispaly={resultsToDisplay}/>
        <ShopingList />
      </div>
    </ div>
  );
}

export default App;
