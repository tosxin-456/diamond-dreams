import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import AdminWrapper from './layout/AdminWrap';

import Navbar from "./layout/Navbar";
import AcademyWrap from './pages/academy/Academy';
import Dashboard from './pages/admin/Dashbpard';
import Login from './pages/admin/Login';
import BlogWrap from './pages/blog/Blog';
import CartWrapper from './pages/cart/Cart';
import ContactWrap from './pages/contacts/Contact';
import Home from "./pages/home/Hompage";
import PlanWrap from './pages/planning/Planning';
import ShopWrap from './pages/shop/Shop';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path='Shop' element={<ShopWrap/>}/>
        <Route path='Blog' element={<BlogWrap/>} />
        <Route path='Contact' element={<ContactWrap/>} />
        <Route path='Academy' element={<AcademyWrap/>} />
        <Route path='Planning' element={<PlanWrap/>} />
        <Route path='Cart' element={<CartWrapper/>} />
      </Route>
      <Route path='Admin' element={<AdminWrapper/>}>
        <Route index element={<Login/>} />
        <Route path='Dashboard' element={<Dashboard/>} />
      </Route>
    </Route>
  )
)

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
