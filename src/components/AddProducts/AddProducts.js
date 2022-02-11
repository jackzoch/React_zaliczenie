import React from 'react';
//import styles from '../../common/styles/Headers.module.scss';
import { useState } from 'react';


function AddProducts(props) {

    const [productName, setName] = useState('')
    const [productCategory, setCategory] = useState('')
    const [isFood, setIsFood] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        const produ ={
                nazwa: productName,
                kategoria: productCategory,
                produktSpozywczy: isFood,
        };
       props.productToAdd(produ);
    }

    const handleChange = (event) => {
        if (event.target.name === 'name') {
            setName(event.target.value)
        }
        if (event.target.name === 'category') {
            setCategory(event.target.value)
        }
        if (event.target.name === 'isFood') {
            console.log(event)
            setIsFood(event.target.checked)
        }        
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Produkt:
                <input type="text" name="name" value={productName} onChange={handleChange} />
            </label>
            <label>
                Kateogoria:
                <input type="text" name="category" value={productCategory} onChange={handleChange} />
            </label>
            <label>
                Produkt spożywczy:
                <input type="checkbox" name="isFood" value={isFood} onChange={handleChange} />
            </label>
            <input type="submit" value="Dodaj" />
        </form>
    );
};

export default AddProducts;