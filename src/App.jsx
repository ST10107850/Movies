import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import HomePage from "./Pages/HomePage";
import MoviesPage from "./Pages/MoviesPage";
import DetailPage, { detailLoader } from "./Pages/DetailPage";
import SeriesPage from "./Pages/SeriesPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/series" element={<SeriesPage />} />
        <Route
          path="/movies/:id"
          element={<DetailPage />}
          loader={detailLoader}
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
