import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'

const ProductAll = () => {
  const [productList, setProductList] = useState([])
  const getProducts = () => {
    fetch('http://localhost:3001/products')
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setProductList(res);
    });
  }
  useEffect(()=>{
    getProducts()
  },[])
  return (
    <div className='product-all'>
      {
        productList.map((product)=>{
          return <ProductCard item={product} key={product.id} />
        })
      }
    </div>
  )
}

export default ProductAll
