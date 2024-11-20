import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
  } from "react-router-dom";
  import MainLayout from "./layouts/MainLayout";
  import HomePage from "./pages/HomePage";
  import NotFoundPage from "./pages/NotFoundPage";
  import ErrorBoundary from "./components/ErrorBoundary";
import Eligibility from "./pages/Eligibility";
import Contact from "./pages/Contact";
import Services from "./components/Services";
  
  // Create routes with individual ErrorBoundary wrapped around components
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <ErrorBoundary>
                <HomePage />
              </ErrorBoundary>
            }
          />
          <Route
            path="*"
            element={
              <ErrorBoundary>
                <NotFoundPage />
              </ErrorBoundary>
            }
          />
          <Route
            path="contact"
            element={
              <ErrorBoundary>
                <Contact />
              </ErrorBoundary>
            }
          />
          <Route
            path="eligibility"
            element={
              <ErrorBoundary>
                <Eligibility />
              </ErrorBoundary>
            }
          />
          <Route
            path="services"
            element={
              <ErrorBoundary>
                <Services />
              </ErrorBoundary>
            }
          />
        </Route>
      </>
    )
  );
  
  const Routes = () => {
    return <RouterProvider router={router} />;
  };
  
  export default Routes;
  