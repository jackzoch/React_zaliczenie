import React from "react";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import { useState } from 'react';



function ProductsList(props) {
  const [productsList, setProductsList] = useState('') 
  
  console.log("Lista produktóww : ")
  console.log(props.productsToDispaly)
  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>

        <p>Products list</p>
        {/* <b>{props.productsToDispaly}</b>  */}

        <ui>
          {props.productsToDispaly.map((product) => <li key={product.nazwa}>{`${product.nazwa}  ${product.kategoria} ${product.produktSpozywczy}`}</li>)}
        </ui>
      </header>
    </div>
  );
}

export default ProductsList;
