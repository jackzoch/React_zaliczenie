import ProductsList from './components/ProductsList/ProductsList';
import ShopingList from './components/ShopingList/ShopingList';
import AddProducts from './components/AddProducts/AddProducts';
import ProductsFilters from './components/ProductsFilters/ProductsFilters';
import styles from './App.module.scss';
import products from './common/consts/produkty'
import { useState } from 'react';
import { PureComponent } from 'react/cjs/react.production.min';

function App() {
  let variableProductsList = products;

  function AppendProductsList(item) {
    variableProductsList.push(item)
  }



  const [basicList, setBasicList] = useState(products);
  const [resultsToDisplay, setResultsToDisplay] = useState(products);
  const [shopingList, setShopingList] = useState([]);

  var setShopingList2 = (product) => {
    console.log("shop " + product);
    setShopingList([...shopingList,product])
    console.log("sssss " + shopingList)
  }

  console.log(resultsToDisplay);
  return (
    <div className={styles.appWrapper}>
      <AddProducts productList={basicList} productToAdd={(p) => setBasicList([...basicList, p])} />
      <ProductsFilters products={basicList} sendFilteredProductsToParentComponent={setResultsToDisplay} />
      <div className={styles.columnsWrapper}>
        <ProductsList AddProduct={setShopingList2} productsToDispaly={resultsToDisplay} />
        <ShopingList uploadList={shopingList}/>
      </div>
    </ div>
  );
}

export default App;
