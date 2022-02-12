import ProductsList from './components/ProductsList/ProductsList';
import ShopingList from './components/ShopingList/ShopingList';
import AddProducts from './components/AddProducts/AddProducts';
import ProductsFilters from './components/ProductsFilters/ProductsFilters';
import styles from './App.module.scss';
import products from './common/consts/produkty'
import { useState } from 'react';

function App() {
    let variableProductsList = products;

    function AppendProductsList(item) {
        variableProductsList.push(item)
    }

    let isFinished = true

    const [basicList, setBasicList] = useState(products);
    const [resultsToDisplay, setResultsToDisplay] = useState(products);
    const [shopingList, setShopingList] = useState([]);

    function containsObject(obj, list) {
        var i;
        for (i = 0; i < list.length; i++) {
            if (list[i].TimeStamp === obj.TimeStamp) {
                return true;
            }
        }

        return false;
    }

    function guidGenerator() {
        // return Date.now()
        var S4 = function () {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
    }

    var addProductToShoppingList = (product) => {
        let generatedUniqueID = guidGenerator();
        product.TimeStamp = generatedUniqueID;
        // if (containsObject(product, [...shopingList])) {
        //     return
        // } else {
            setShopingList([...shopingList, product]);
        // }
    }


    var removeProductFromShoppingList = (product) => {
        console.log("shop " + product);
        let tempArray = [...shopingList];

        // const idToRemove = 5;
        //const filtered = tempArray.filter((item) => item.TimeStamp !== product.TimeStamp);

        var filtered = tempArray.filter(function (el) { return el.TimeStamp != product.TimeStamp; });
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
