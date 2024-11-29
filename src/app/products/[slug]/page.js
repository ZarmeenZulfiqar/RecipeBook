'use client';
import dynamic from 'next/dynamic';
// Dynamically import Lottie component to disable SSR
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import loadingAnimation from '../animations/loadingAnimation.json'; // Your animation data file


import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Use useParams to get the slug from URL


const Slug = () => {
  const { slug } = useParams(); // Extract slug from URL parameters
  const [product, setProduct] = useState(null); // State to hold the product data
  const [loading, setLoading] = useState(true); // Loading state for async request

  useEffect(() => {

    // Fetch the product data using the slug
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:1337/api/products?populate=*`);


        if (!res.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await res.json();

        // Find the specific product by slug
        const foundProduct = data.data.find(product => product.slug === slug);


        if (foundProduct) {
          setProduct(foundProduct); // Set the found product data
        } else {
          throw new Error('Product not found');
        }
      } catch (error) {
        console.error('Error:', error); // Log any errors that occur during fetching
      } finally {
        setLoading(false); // Stop loading after data is fetched
      }
    };

    // Only fetch data if the slug is available
    if (slug) {
      fetchProduct();
    }
  }, [slug]); // Re-run if the slug changes

  if (loading) {
    return (
      <div>
        <Lottie 
        animationData={loadingAnimation} 
        loop={true}       // Loop the animation
        autoplay={true}   // Start the animation automatically
        style={{ width: '100%', height: '400px' }} // You can adjust size here
      />
      </div>
    );
  }

  if (!product) {
    return <div>Product not found</div>; // Show if no product is found
  }

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img 
              alt="ecommerce" 
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" 
              src={`http://localhost:1337${product.image.url}`} 
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>
              <div className="flex mb-4">
                
              </div>
              <p className="leading-relaxed">{product.Recipe}</p>

              </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Slug;
