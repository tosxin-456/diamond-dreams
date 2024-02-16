import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

import Navbar from "./layout/Navbar";
import AcademyWrap from './pages/academy/Academy';
import BlogWrap from './pages/blog/Blog';
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
