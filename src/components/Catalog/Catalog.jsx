import React from 'react';
import cake from '../../assets/product.jpg';
import './CatalogStyles.css'
import { catalogData } from '../../fakeData';
function Catalog() {
    return (
        <div className='catalog'>
            <h1 className='catalog-title'>Catalog</h1>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                {
                    catalogData.map((item) => {
                        return (
                            <div style={{ border: '1px solid rebeccapurple', margin: '30px 20px', borderRadius: '10px' }}>
                                <img src={item.image} alt="Not Found" style={{ height: '250px', width: '250px', borderRadius: '10px' }} />
                                <p className='item-title'>{item.title}</p>
                                <p className='price-text'>{item.price}</p>
                                <button className='add-to-cart-button'> ADD TO CART</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Catalog;