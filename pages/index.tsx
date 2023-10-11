import React, { useEffect } from 'react';

import { client } from '@/lib/client';
import { Service, FooterBanner, HeroBanner, Review, Carousel, LogoCarousel } from '@/components';

const Home = ({ landingPage, services, products, reviews }: any) => {
  // reviews for the purchase process. show users a pop up when they purchase something to collect this data

  return (
    <>
      <HeroBanner heroBanner={landingPage} />

      <div className='products-heading'>
        <h2>Checkout What people are excited about!</h2>
        <p>Inspirational and stuff here</p>
      </div>

      <div>
        <Carousel featuredProducts={products} />
      </div>

      <div className='products-heading'>
        <h2>Checkout our Services</h2>
        <p>Let's dive in!</p>
      </div>

      <div className='products-container'>
        {services?.map((service: any) => <Service key={service._id} service={service} />)}
      </div>

      <LogoCarousel logos={landingPage.logos} />

      <FooterBanner footerBanner={landingPage} />

      <div className='products-heading'>
        <h2>What Do our Client's Say?</h2>
      </div>
      {/* <script src="https://js.paystack.co/v1/inline.js"></script>
      <script src="pages/api/payment.js"></script> */}
      
      <div className='products-container'>
        {reviews?.map((review: any) => <Review key={review._id} review={review} />)}
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const landing_page_query = '*[_type == "landingPage"][0]';
  const landingPage = await client.fetch(landing_page_query);

  const service_query = '*[_type == "service"]';
  const services = await client.fetch(service_query);

  // filter to only all featured products
  const product_query = '*[_type == "product" && featured == true]';
  const products = await client.fetch(product_query);

  // const bannerQuery = '*[_type == "banner"]';
  // const bannerData = await client.fetch(bannerQuery);

  const review_query = '*[_type == "review"]';
  const reviews = await client.fetch(review_query);

  return {
    props: { landingPage, services, products, reviews }
  }
}

export default Home