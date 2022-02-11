import React from 'react';
import styles from '../../common/styles/Headers.module.scss';


class ProductsFilters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchPhrase: '',
            searchOnlyFood: false,
            searchCategory: ''
        }
    }

    handleSearchPhraseChange = (event) => {
        this.setState({ searchPhrase: event.target.value }, () => this.filterProducts());
    }

    handleOnlyFood = (event) => {
        this.setState({ searchOnlyFood: event.target.checked }, () => this.filterProducts());
    }

    handleSelectCategory = (event) => {
        this.setState({ searchCategory: event.target.value }, () => this.filterProducts());
    }

    filterProducts = () => {
        const { products } = this.props;
        const { searchPhrase, searchOnlyFood, searchCategory } = this.state;

        // odfiltrowanie zgodnych wyników
        let filteredProducts = products.filter((product) => product.nazwa.includes(searchPhrase));
        if (searchOnlyFood) {
            filteredProducts = filteredProducts.filter((product) => product.produktSpozywczy === true);
        }
        if (searchCategory) {
            filteredProducts = filteredProducts.filter((product) => product.kategoria === searchCategory);
        }
        // przekazanie wyfiltrowanych pojazdów do komponentu rodzica (App)
        this.props.sendFilteredProductsToParentComponent(filteredProducts);
    }

    handleResetFilters = () => {
        this.setState({
            searchPhrase: '',
            searchOnlyFood: false,
            searchCategory: ''
        },() => {
            this.filterProducts();
        });
    }

    getUniqueCategories = () => {
        const { products } = this.props;
        const categoriesList = products.map((product) => product.kategoria)
        const uniqueCategoriesList = [...new Set(categoriesList)];
        return uniqueCategoriesList
    }

    render() {
        const uniqueCategories = this.getUniqueCategories();
        const { searchPhrase, searchOnlyFood, searchCategory } = this.state;
        return (
            <div className={styles.HeaderWrapper}>
                <input value={searchPhrase} onChange={this.handleSearchPhraseChange}></input>
                Tylko produkty spożywcze
                <input type='checkbox' onChange={this.handleOnlyFood} value={searchOnlyFood} ></input>
                 Kategoria
                <select value={searchCategory} onChange={this.handleSelectCategory}>
                    <option key={'all'} value={''}>Kategoria</option>
                    {uniqueCategories.map((kateogoria) =><option key={kateogoria} value={kateogoria}>{kateogoria}</option>)}
                </select>
                {/* <button onClick={this.filterProducts}>Wyszukaj</button> */}
                <button onClick={this.handleResetFilters}>Zresetuj filtry</button>
            </div>
          );
    }
  }


export default ProductsFilters;