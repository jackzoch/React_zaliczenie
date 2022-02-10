import React from 'react';
//import styles from '../../common/styles/Headers.module.scss';
import { useState } from 'react';


function AddProducts(props) {

    const [productName, setName] = useState('')
    const [productCategory, setCategory] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        const message = `Cześć ${productName}, twój znak zodiaku to: ${productCategory}`;
        props.sendMessageToParentComponent(message)
    }

    const handleChange = (event) => {
        if (event.target.name === 'name') {
            setName(event.target.value)
        }
        if (event.target.name === 'Category') {
            setCategory(event.target.value)
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
                <input type="text" name="Category" value={productCategory} onChange={handleChange} />
            </label>
            <label>
                Produkt spożywczy:
                <input
                    name="isGoing"
                    type="checkbox"
                // checked={this.state.isGoing}
                // onChange={this.handleInputChange} 
                />
            </label>
            <input type="submit" value="Dodaj" />
        </form>
    );
};

export default AddProducts;