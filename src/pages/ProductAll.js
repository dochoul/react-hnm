import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

const ProductAll = () => {
  const [productList, setProductList] = useState([])
  const [query, setQuery] = useSearchParams()
  const getProducts = () => {
    let searchParams = query.get('q') || "";
    fetch(`https://my-json-server.typicode.com/dochoul/react-hnm/products?q=${searchParams}`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setProductList(res);
    });
  }
  useEffect(()=>{
    getProducts()
  },[query])
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
