import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const {id} = useParams()
  const [product, setProduct] = useState(null)
  const getProductDetail = async() => {
    let response = await fetch(`https://my-json-server.typicode.com/dochoul/react-hnm/products/${id}`)
    let data = await response.json()
    console.log(data);
    setProduct(data);
  }
  useEffect(()=>{
    getProductDetail()
  },[])
  return (
    <div className='product-detail'>
      <img src={product?.img} alt="" />
      <div>{product?.title}</div>
      <div>{product?.price}</div>
    </div>
  )
}

export default ProductDetail
