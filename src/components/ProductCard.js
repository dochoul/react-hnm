import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
  const navigate = useNavigate()
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  }
  return (
    <div onClick={showDetail}>
      <img src={item?.img} alt="" />
      <p>{item?.title}</p>
      <p>{item?.price}</p>
      <p>{item?.new === true ? '신제품':''}</p>
    </div>
  )
}

export default ProductCard
