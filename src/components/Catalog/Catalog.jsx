import React from 'react';
import './CatalogStyles.css'
import { catalogData } from '../../fakeData';




function Catalog({ showToast }) {

    function addItemToCart(clickedProduct) {
        if (window.localStorage.getItem('cartItems') !== null) {
            const products = JSON.parse(window.localStorage.getItem('cartItems'));
            console.log(products);
            let found = false;
            const updatedProducts = [];
            products.forEach((product) => {
                if (clickedProduct.productId === product.productId) {
                    let val = product.count;
                    console.log(product.count);
                    found = true;
                    updatedProducts.push({ ...product, count: val + 1 });
                } else {
                    updatedProducts.push({ ...product });
                }
            })
            if (!found) updatedProducts.push({ ...clickedProduct, count: 1 });
            window.localStorage.setItem('cartItems', JSON.stringify(updatedProducts));

        } else {
            window.localStorage.setItem('cartItems', JSON.stringify([{ ...clickedProduct, count: 1 }]));
        }
        showToast(clickedProduct.title);

    }

    return (
        <div className='catalog'>
            <h1 className='catalog-title'>Catalog</h1>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                {
                    catalogData.map((item) => {
                        return (
                            <div style={{ border: '1px solid rebeccapurple', margin: '30px 20px', borderRadius: '10px' }}>
                                <img src={item.image} alt="Not Found" className='catalog-image' />
                                <p className='item-title'>{item.title}</p>
                                <p className='price-text'>{item.price}</p>
                                <button onClick={() => addItemToCart(item)} className='add-to-cart-button'> ADD TO CART</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Catalog;