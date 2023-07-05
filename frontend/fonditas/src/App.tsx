import { Routes, Route, Outlet } from 'react-router-dom';
import FormDish from './pages/Administrator/Dish/FormDish';
import FormCategory from './pages/Administrator/Category/FormCategory';
import Dishes from './pages/Administrator/Dish/Dishes';
import Categorys from './pages/Administrator/Category/Categorys';
import Home from './pages/Home/Home';
import AppBarNavigate from './components/AppBarNavigate/AppBarNavigate';
import NoMatch from './components/ErrorPage/NoMatch';

function Admin() {
  return (
    <div>
      <AppBarNavigate />
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="admin" element={<Admin />}>
        <Route path="dish" element={<Dishes />} />
        <Route path="category" element={<Categorys />} />
        <Route path="dish/new" element={<FormDish />} />
        <Route path="category/new" element={<FormCategory />} />
      </Route>
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;
