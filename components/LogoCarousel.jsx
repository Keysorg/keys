import React from 'react';
import { urlFor } from '@/lib/client';

const LogoCarousel = ({ logos }) => {
    return (
        <div className='logos'>
            <div className='logos-slide'>
                {logos.map((item) => (
                    <img src={urlFor(item)} alt="partner-logo" />
                ))}
            </div>

            <div className='logos-slide'>
                {logos.map((item) => (
                    <img src={urlFor(item)} alt="partner-logo" />
                ))}
            </div>
        </div>
    )
}

export default LogoCarousel