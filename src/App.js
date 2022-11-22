import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import ProductAll from './pages/ProductAll';
//import ProductDetail from './pages/ProductDetail';
import PrivateRoute from './route/PrivateRoute';

//1. 전체상품페이지, 로그인, 상세페이지
//1-1. 네비게이션바
//2. 전체상품페이지에서는 전체 상품을 볼 수 있다
//3. 로그인 버튼을 누르면 로그인 페이지로 간다
//4. 상품 디테일을 눌렀으나 로그인이 되어 있지 않으면 로그인 페이지가 나와야 한다
//5. 로그인이 되어 있을 경우에는 디테일 페이지를 볼 수 있다
//6. 로그아웃 버튼을 클릭하면 로그아웃 된다.
function App() {
  const [authenticate, setAuthenticate] = useState(false)
  // useEffect(()=>{
  //   console.log('로그인 성공');
  // },[authenticate])
  return (
    <div>
      <Routes>
        <Route path='/' element={<ProductAll/>}>ProductAll</Route>
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate} />}>Login</Route>
        <Route path='/product/:id' element={<PrivateRoute authenticate={authenticate} />}>ProductDetail</Route>
      </Routes>
    </div>
  );
}

export default App;
