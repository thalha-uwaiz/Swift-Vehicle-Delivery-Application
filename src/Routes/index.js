import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';
import Homepage from '../Pages/Homepage';
import WelcomePage from '../Pages/WelcomePage';
import SignUpPage from '../Pages/SignUpPage';
import EnableLocation from '../Pages/EnableLocation/EnableLocation';
import SignUpWithEmail from '../Pages/SignUpWithEmail';
import VerifyOTP from '../Pages/VerifyOTP';
import SetPassword from '../Pages/SetPassword';
import SignIn from '../Pages/SignIn';
import SetNewPassword from '../Pages/SetNewPassword';
import SignInWithEmail from '../Pages/SignInWithEmail';
import CompleteYourProfile from '../Pages/CompleteYourProfile';
import HomeScreenTransport from '../Pages/HomeScreenTransport/HomeScreenTransport';
import Favourties from '../Pages/Favourties';
import Offer from '../Pages/Offer';
import History from '../Pages/History';
import HelpAndSupport from '../Pages/HelpAndSupport';
import Referal from '../Pages/Referal';





const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path='/' element={<Homepage />} > </Route>
            <Route path='/Enablelocation' element={<EnableLocation />} > </Route>
            <Route path='/Welcomepage' element={<WelcomePage />} > </Route>
            <Route path='/Signuppage' element={<SignUpPage />} > </Route>
            <Route path='/SignUpWithEmail' element={<SignUpWithEmail />} > </Route>
            <Route path='/Verifyotp' element={<VerifyOTP />} > </Route>
            <Route path='/Setpassword' element={<SetPassword />} > </Route>
            <Route path='/Signin' element={<SignIn />} > </Route>
            <Route path='/Setnewpassword' element={<SetNewPassword />} > </Route>
            <Route path='/SignInwithEmail' element={<SignInWithEmail />} > </Route>
            <Route path='/Completeyourprofile' element={<CompleteYourProfile />} > </Route>
            <Route path='/HomeScreenTransport' element={<HomeScreenTransport />} > </Route>
            <Route path='/Favourties' element={<Favourties />} > </Route>
            <Route path='/Offer' element={<Offer />} > </Route>
            <Route path='/History' element={<History />} > </Route>
            <Route path='/HelpAndSupport' element={<HelpAndSupport />} > </Route>
            <Route path='/Referal' element={<Referal />} > </Route>
            
        </Route>
    ));

const MyRoutes = () => {
    return (
        <RouterProvider router={router}>

        </RouterProvider>
    );
};

export default MyRoutes;
