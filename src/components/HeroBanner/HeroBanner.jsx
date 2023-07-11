import React from 'react';
import './HeroBanner.css';
import { bannerData } from '../../fakeData';
function HeroBanner() {
    return (
        <div className='banner'>
            <div className='cards-wrapper'>
                {
                    bannerData.map((item) => {
                        return (
                            <div className='hero-item'>
                                <img src={item.image} className='hero-banner-image' alt={item.imageAlt} />
                                <div>
                                    <h1 className='card-heading'>{item.title}</h1>
                                    <p className='card-typography' >{item.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default HeroBanner