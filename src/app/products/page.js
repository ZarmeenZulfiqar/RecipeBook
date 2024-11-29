'use client';

import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
// Dynamically import Lottie component to disable SSR
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import recipeAnimation from './animations/recipeAnimation.json'; // Your animation data file




const Products = async () => {
  // Fetch data from Strapi API
  const res = await fetch('http://localhost:1337/api/products?populate=*');
  // Ensure the fetch is successful
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  const data = await res.json();

  const products = data.data;

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
        <h1 className="flex justify-center text-4xl font-extrabold text-gray-900 mb-6">My Recipe Book</h1>
          <div className="flex justify-center">
            <Lottie
              animationData={recipeAnimation}
              loop={true}       // Loop the animation
              autoplay={true}   // Start the animation automatically
              style={{ width: '20%', height: '200px' }} // You can adjust size here
            />
          </div>
          <div className="flex flex-wrap -m-4">
            {products.map((product) => {

              return (
                <div key={product.id} className="xl:w-1/4 md:w-1/2 p-4">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <img
                      className="h-40 rounded w-full object-cover object-center mb-6"
                      src={`http://localhost:1337${product.image.url}`}
                      alt={product.title}
                    />
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Category</h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{product.title}</h2>
                    <p className="leading-relaxed text-base">{product.description}</p>
                    <Link href={`/products/${product.slug}`}>
                    <button className="text-white bg-amber-800 border-0 py-2 px-4 focus:outline-none hover:bg-amber-700 rounded text-sm mt-10 sm:mt-0">
                    Recipe
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
