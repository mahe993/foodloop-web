import { createRoutesFromElements, createBrowserRouter, Route } from 'react-router-dom';
import FLLandingPage from '../pages/landingPage/FLLandingPage';
import FLErrorPage from '../pages/errorPage/FLErrorPage';
import FLFoodListPage from '../pages/foodListPage/FLFoodListPage';
import FLFoodListIndex from '../pages/foodListPage/FLFoodListIndex';
import FLFoodListListing from '../pages/foodListPage/FLFoodListListing';
import FLInvalidPage from '../pages/errorPage/FLInvalidPage';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<FLLandingPage />} errorElement={<FLErrorPage />} path="/" />
            <Route element={<FLFoodListPage />} errorElement={<FLErrorPage />} path="/foodloop">
                <Route element={<FLFoodListIndex />} errorElement={<FLErrorPage />} path="" />
                <Route element={<FLFoodListListing />} errorElement={<FLErrorPage />} path=":id" />
            </Route>
            <Route element={<FLInvalidPage />} errorElement={<FLErrorPage />} path="/invalid" />
        </>,
    ),
);

export default router;
