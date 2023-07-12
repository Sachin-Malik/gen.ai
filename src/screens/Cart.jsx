import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import CartComponent from '../components/Cart/CartComponent';
function Cart() {
    return (
        <div>
            <div style={{ backgroundColor: '', paddingBottom: '40px' }}>
                <div style={{ height: '50px' }}>
                </div>
                <Navbar />
                <div>
                    <CartComponent />
                </div>
            </div>
        </div>
    )
}

export default Cart;