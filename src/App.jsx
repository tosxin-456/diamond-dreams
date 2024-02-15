import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import Navbar from "./layout/Navbar";
import BlogWrap from './pages/blog/Blog';
import Home from "./pages/home/Hompage";
import ShopWrap from './pages/shop/Shop';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path='Shop' element={<ShopWrap/>}/>
        <Route path='Blog' element={<BlogWrap/>} />
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
