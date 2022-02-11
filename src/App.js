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

  var addProductToShoppingList = (product) => {
    setShopingList([...shopingList, product])
  }

  var removeProductFromShoppingList = (product) => {
    console.log("shop " + product);
    let tempArray = [...shopingList];
    var filtered = tempArray.filter(function(el) { return el.nazwa != product.nazwa; }); 
    console.log(tempArray)
    console.log(filtered)
    setShopingList(filtered);
    // const index = tempArray.indexOf(product.nazwa)
    // debugger
    // if (index > -1) {
    //   tempArray.splice(index, 1)
    //   setShopingList([tempArray])
    // }
  }


  // console.log(resultsToDisplay);
  return (
    <div className={styles.appWrapper}>
      <AddProducts productList={basicList} productToAdd={(p) => setBasicList([...basicList, p])} />
      <ProductsFilters products={basicList} sendFilteredProductsToParentComponent={setResultsToDisplay} />
      <div className={styles.columnsWrapper}>
        <ProductsList AddProduct={addProductToShoppingList} productsToDispaly={resultsToDisplay} />
        <ShopingList uploadList={shopingList} removeProduct={removeProductFromShoppingList} />
      </div>
    </ div>
  );
}

export default App;
