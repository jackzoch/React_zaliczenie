import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import React from "react";
import { useState } from 'react';




function ShopingList(props) {
  const [isBookmarked, setIsBookmarked] = useState(true);

  const removeBookmark = (product,event) => {
    event.preventDefault();
    console.log(product);
  }
  

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Shoping List</p>
        {props.uploadList.map((product) => <li key={product.TimeStamp} myid={product.TimeStamp} 
        style ={isBookmarked ? { textDecorationLine: 'none' } : { textDecorationLine: 'line-through' }}
        onClick={() => props.removeProduct(product)} onContextMenu={(event)=> removeBookmark(product,event)}>{`${product.nazwa}  ${product.kategoria} ${product.produktSpozywczy}`}</li>)}

      </header>
    </div>
  );
}

export default ShopingList;
