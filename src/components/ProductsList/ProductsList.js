import React from "react";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import produkty from "../../common/consts/produkty";
function ProductsList() {
  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Products list</p>
        <ui>
          {produkty.map((produkty) => <li key={produkty.nazwa}>{`${produkty.kategoria} ${produkty.produktSpozywczy}`}</li>)}
        </ui>
      </header>
    </div>
  );
}

export default ProductsList;
