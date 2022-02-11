import commonColumnsStyles from "../../common/styles/Columns.module.scss";

function ShopingList(props) {
  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Shoping List</p>
        <ui>
          {props.uploadList.map((product) => <li key={product.nazwa} >{`${product.nazwa}  ${product.kategoria} ${product.produktSpozywczy}`}</li>)}
        </ui>

      </header>
    </div>
  );
}

export default ShopingList;
