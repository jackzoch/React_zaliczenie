import commonColumnsStyles from "../../common/styles/Columns.module.scss";





function ShopingList(props) {



  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Shoping List</p>
          {props.uploadList.map((product) => <li key={product.TimeStamp} onClick={()=>props.removeProduct(product)}>{`${product.nazwa}  ${product.kategoria} ${product.produktSpozywczy}`}</li>)}

      </header>
    </div>
  );
}

export default ShopingList;
