import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Index from "./pages"
import RootLayout from "./layout/rootLayout"



const router = createBrowserRouter([
  {
    path: "/",
   element: <RootLayout/>,

   children: 
   [
    {
      index: true, 
      element: <Index/>
    }
   ]

  }


])


function App() {
  return (
    <>
    <RouterProvider router = {router}/>
    </>
  )
}

export default App
