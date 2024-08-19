import
 { createBrowserRouter,
   createRoutesFromElements,
    Route,
    RouterProvider }
     from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import HomePage from "./Pages/HomePage";
import MoviesPage from "./Pages/MoviesPage";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
        <Route index element ={<HomePage/>}/>
        <Route path="/movies" element={<MoviesPage/>}/>
      </Route>
    )
  )
    return <RouterProvider router={router}/>
}

export default App;
