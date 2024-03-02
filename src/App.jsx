import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import AdminWrapper from './layout/AdminWrap';
import EnrollWrapper from './layout/EnrollmentWrap';

import Navbar from "./layout/Navbar";
import OrdersWrapper from './layout/OrdersWrap';
import ProductWrapper from './layout/ProductWrap';
import AcademyWrap from './pages/academy/Academy';
import AcceptedEnroll from './pages/admin/Accept';
import AccessoryCollection from './pages/admin/Acessories';
import BouquetCollection from './pages/admin/Bouquet';
import MagazineCollection from './pages/admin/Magazines';
import CreateBlog from './pages/admin/CreateBlog';
import Dashboard from './pages/admin/Dashbpard';
import DeliveredOrders from './pages/admin/DelOrders';
import GownCollection from './pages/admin/Gowns';
import Login from './pages/admin/Login';
import NewProduct from './pages/admin/NewProd';
import PendingEnrolls from './pages/admin/Pend';
import PendingOrders from './pages/admin/PendOrdes';
import BlogWrap from './pages/blog/Blog';
import CartWrapper from './pages/cart/Cart';
import ContactWrap from './pages/contacts/Contact';
import Home from "./pages/home/Hompage";
import PlanWrap from './pages/planning/Planning';
import ShopWrap from './pages/shop/Shop';
import ViewBlogs from './pages/admin/ViewBlog';
import ManagePost from './pages/admin/ManPost';

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
        <Route element={<ProductWrapper/>}>
          <Route path='Gowns' element={<GownCollection/>} />
          <Route path='Accessory' element={<AccessoryCollection/>} />
          <Route path='Bouquet' element={<BouquetCollection/>} />
          <Route path='Magazine' element={<MagazineCollection/>} />
        </Route>
        <Route element={<EnrollWrapper/> }>
          <Route path='Pending' element={<PendingEnrolls/>} />
          <Route path='Accepted' element={<AcceptedEnroll/>} />
        </Route>
        <Route element={<OrdersWrapper/>}>
          <Route path='Pending-orders' element={<PendingOrders/>} />
          <Route path='Delivered' element={<DeliveredOrders/>} />
        </Route>
        <Route path='New-Product' element={<NewProduct/>} /> 
        <Route path='Blog-options' element={<ViewBlogs/>} />
        <Route path='Add-post' element={<CreateBlog/>} />
        <Route path='Manage-post' element={<ManagePost/> } /> 
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
