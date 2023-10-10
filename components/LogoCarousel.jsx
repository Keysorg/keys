import React from 'react';
import { urlFor } from '@/lib/client';

const LogoCarousel = ({ logos }) => {
    return (
        <div className='logos'>
            <div className='logos-slide'>
                {logos.map((item) => (
                    <img src={urlFor(item)} alt="" />
                ))}
            </div>

            <div className='logos-slide'>
                {logos.map((item) => (
                    <img src={urlFor(item)} alt="" />
                ))}
            </div>
        </div>
    )
}

export default LogoCarousel