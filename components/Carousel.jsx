import React, { useRef, useState } from 'react';
import Link from 'next/link';

import { urlFor } from '@/lib/client'

const Carousel = ({ featuredProducts }) => {
    const carousel = useRef();
    const [count, setCount] = useState(0);

    const incrementCarousel = (delta) => {
        if (!carousel.current) return;

        // get current width of carousel item
        const width = carousel.current.offsetWidth;

        // scroll to the first item when it ends
        if (count + delta > featuredProducts.length - 1) {
            setCount(0);
            carousel.current.scrollTo(0, 0);
            return;
        } else if (count + delta < 0) {
            setCount(featuredProducts.length - 1)
            carousel.current.scrollTo(width * featuredProducts.length - 1, 0);
            return;
        }

        carousel.current.scrollTo(carousel.current.scrollLeft + width * delta, 0);

        setCount(prevCount => prevCount + delta)
    }

    return (
        <div className='carousel-container'>
            <div className='carousel-btn left-btn' onClick={() => incrementCarousel(-1)} />
            <div className='carousel-btn right-btn' onClick={() => incrementCarousel(1)} />

            <div className="carousel" ref={carousel}>
                {featuredProducts.map((product) => (
                    <div className='carousel-item' key={product._id}>
                        <img src={urlFor(product.image[0])} alt="item" />

                        <div>
                            <h1>{product.name}</h1>
                            <p>{product.details}</p>

                            <Link href={`/product/${product.slug.current}`}>
                                <button type="button">Get Tickets</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Carousel