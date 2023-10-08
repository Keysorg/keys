import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { client, urlFor } from '@/lib/client';
import { Product, HeroBanner, FooterBanner } from '@/components';
import { useStateContext } from '@/context/StateContext';


const ServicePage = ({ service, products }: any) => {

    return (
        <>
            <HeroBanner heroBanner={service} />

            <div className='products-heading'>
                <h2>Checkout our {service.name} Catalog</h2>
                <p>Let's dive in!</p>
            </div>

            <div className='products-container service-products'>
                {products?.map((product: any) => <Product key={product._id} product={product} />)}
            </div>
        </>
    )
}

export const getStaticProps = async ({ params: { name } }: any) => {
    const serviceQuery = `*[_type == "service" && name == '${name}'][0]`
    const serviceProducts = `*[_type == "product" && service == '${name}']`;

    const service = await client.fetch(serviceQuery);
    const products = await client.fetch(serviceProducts);

    return {
        props: { service, products }
    }
}

export const getStaticPaths = async () => {
    const paths = [
        {
            params: {
                name: 'Events'
            }
        },
        {
            params: {
                name: 'Travel & Tour'
            }
        },
        {
            params: {
                name: 'Art'
            }
        }
    ]

    return {
        paths,
        fallback: 'blocking'
    }
}

export default ServicePage;