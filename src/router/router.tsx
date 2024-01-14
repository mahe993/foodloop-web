import { createRoutesFromElements, createBrowserRouter, Route } from 'react-router-dom';
import FLLandingPage from '../pages/landingPage/FLLandingPage';
import FLErrorPage from '../pages/errorPage/FLErrorPage';
import FLFoodListPage from '../pages/foodListPage/FLFoodListPage';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<FLLandingPage />} errorElement={<FLErrorPage />} path="/" />
            <Route element={<FLFoodListPage />} errorElement={<FLErrorPage />} path="/foodloop" />
        </>,
    ),
);

export default router;
