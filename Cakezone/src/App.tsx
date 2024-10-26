import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Header from "./Components/Header/header";
import Home from "./Components/Home/home";
import RootLayout from "./Layouts/rootLayout";
import Products from "./Components/Products/products";

function App(){

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
          <Route index element={<Home />} />
          <Route path="menu&pricing" element={<Products />} />
          {/* <Route path="whyus" element={<WhyUS />} />
          <Route path="testimonial" element={<Testimonial />} />
          <Route path="contact" element={<Contact />} /> */}
      </Route>
    )
  )


  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App;
