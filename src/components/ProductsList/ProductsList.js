import React from "react";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import { useState } from 'react';



// const AddProducts = (event) => {
// console.log("itemssss " + event.target)
// }


function ProductsList(props) {
  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>

        <p>Products list</p>
        {/* <b>{props.productsToDispaly}</b>  */}

        {props.productsToDispaly.map((product) =>
          <li key={product.nazwa}
            onClick={() => props.AddProduct(product)}>
            {`${product.nazwa}`}
          </li>)}
      </header>
    </div>
  );
}

export default ProductsList;
