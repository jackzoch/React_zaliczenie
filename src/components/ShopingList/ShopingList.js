import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import React from "react";
import { useState } from 'react';




function ShopingList(props) {

  const [isBookmarked, setIsBookmarked] = useState([]);

  const bookmarkHandler = (product, event) => {
    event.preventDefault();
    const index = isBookmarked.indexOf(product.TimeStamp);
    console.log("act isbookmarked " + isBookmarked)
    console.log("index " + index);

    if (index !== -1) {
      setIsBookmarked(isBookmarked.filter((el)=>el != product.TimeStamp));
    } else {
      const addedProduct = [...isBookmarked, product.TimeStamp]
      setIsBookmarked([...addedProduct]);
    }
  }

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Shoping List</p>
        {props.uploadList.map((product) =>
          <li key={product.TimeStamp}
            myid={product.TimeStamp}
            style={isBookmarked.indexOf(product.TimeStamp) != -1 ? { textDecorationLine: 'line-through' } : { textDecorationLine: 'none' }}
            onClick={() => props.removeProduct(product)}
            onContextMenu={(event) => bookmarkHandler(product, event)}>
            {`${product.nazwa}  ${product.kategoria} ${product.produktSpozywczy}`}
          </li>)}
      </header>
    </div>
  );
}

export default ShopingList;
