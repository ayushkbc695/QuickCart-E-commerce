import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/Shopcontext'
import Title from '../components/Title'
import ProductItem from './ProductItem'

const LatestCollection = () => {

  const { products } = useContext(ShopContext);

  const [latestProducts, setLatestProducts] = useState([])

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [])

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl '>
        <Title text1={'LATEST'} text2={'COLLECTION'} />
        <p className='sm:w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 text-center'>
          Discover our latest e-commerce collection – trendy, affordable, and handpicked for your everyday lifestyle and style needs.
        </p>
      </div>

      {/* Rendering Product */}

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 '>
        {
          latestProducts.map((item, idx) => (
            <ProductItem key={idx} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))
        }
      </div>

    </div>
  )
}

export default LatestCollection