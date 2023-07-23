import React, { useState } from 'react';
import './CartComponentStyles.css'
import { cartData } from '../../fakeData';





function CartComponent() {

    console.log(window.localStorage.getItem('cartItems'));
    const [cartItems, setCartItems] = useState(JSON.parse(window.localStorage.getItem('cartItems')) || []);

    function removeItemFromCart(item) {
        const newItems = cartItems.filter((product) => product.productId !== item.productId);
        window.localStorage.setItem('cartItems', JSON.stringify(newItems));
        setCartItems(newItems);
    }

    function buyNow(item) {
        alert('You are buying ' + item.title);
    }

    function getTotalPrice(data) {
        let result = 0;
        data.forEach(element => {
            result += parseFloat(parseFloat(element.price.split('$')[0]) * parseFloat(element.count));
        });
        return result.toFixed(2);
    }

    return (
        <div className='cart'>
            <h1 className='cart-title'>Shopping Cart</h1>
            {
                cartItems.length !== 0 ?
                    (
                        cartItems.map((item) => {
                            return (
                                <div className='cart-item' >
                                    <div>
                                        <img src={item.image} style={{ borderRadius: '10px', margin: '10px' }} alt={item.imageAlt} height={'150px'} width={'150px'} />
                                    </div>
                                    <div style={{ margin: '0px 20px' }}>
                                        <p>{item.title} | {item.price}</p>
                                        <p>Qty: {item.count}</p>
                                        <div>
                                            <button className='cart-button buy-button' onClick={() => buyNow(item)}>Buy Now</button>
                                            <button className='cart-button ' onClick={() => removeItemFromCart(item)}>Remove this</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    ) :
                    (
                        <div>Items added to cart will show up here</div>
                    )
            }
            <div style={{ width: '80%', borderBottom: '1px solid black' }}>
                <h4 style={{ textAlign: 'end' }}>Sub Total: {getTotalPrice(cartItems) || 0}</h4>
            </div>
        </div>
    )
}

export default CartComponent