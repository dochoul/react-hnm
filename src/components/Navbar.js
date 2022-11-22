import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const menuList = ['여성','남성','신생아/유아','아동','스포츠','세일']
  const navigate = useNavigate()
  const goToLogin = () => {
    navigate('/login');
  }
  const searchKeyword = async(event) => {
    if(event.key === 'Enter') {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`)
    }
  }
  return (
    <div className='navbar'>
      <div className='login-container'>
        <button onClick={goToLogin}>로그인</button>
      </div>
      <div className='logo-container'>
        <img src="https://www2.hm.com/hm-logo.png" alt="" />
      </div>
      <ul className='menu-list'>
        {
        menuList.map((menu, index) => {
          return <li key={index}>{menu}</li>
        })
        }
        <div className='search-input' onKeyPress={searchKeyword}>
          <input placeholder='search' />
        </div>
      </ul>
    </div>
  )
}

export default Navbar
