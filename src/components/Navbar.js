import React from 'react'

const Navbar = () => {
  const menuList = ['여성','남성','신생아/유아','아동','스포츠','세일']
  return (
    <div className='navbar'>
      <div className='login-container'>로그인</div>
      <div className='logo-container'>
        <img src="https://www2.hm.com/hm-logo.png" alt="" />
      </div>
      <ul className='menu-list'>
        {
        menuList.map((menu, index) => {
          return <li key={index}>{menu}</li>
        })
        }
        <div className='search-input'>
          <input placeholder='search' />
        </div>
      </ul>
    </div>
  )
}

export default Navbar
