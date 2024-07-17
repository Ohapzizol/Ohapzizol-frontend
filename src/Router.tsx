import { Routes, Route } from 'react-router-dom';
import { HomePage, LoginPage, SignupPage, WritePage } from './pages';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/write' element={<WritePage />} />
    </Routes>
  );
};

export default Router;
