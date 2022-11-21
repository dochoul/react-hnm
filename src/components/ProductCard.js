import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div>
      <img src={item?.img} alt="" />
      <p>{item?.title}</p>
      <p>{item?.price}</p>
      <p>{item?.new === true ? '신제품':''}</p>
    </div>
  )
}

export default ProductCard
