import {Routes, Route} from "react-router-dom";
import Home from "../Home";
import LoginForm from "../Auth/LoginForm";
import SignUpForm from "../Auth/SignUpForm";
import Companies from "../Company/Companies"
import CompanyDetails from "../Company/CompanyDetails";
import Jobs from "../Job/Jobs";
import Profile from "../User/Profile";
import ProfileForm from "../User/ProfileForm";
import PrivateRoute from "./PrivateRoute";

const Router = ({login, signup}) => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<LoginForm login={login}/>} />
                <Route path='/signup' element={<SignUpForm signup={signup} />} />
                <Route 
                    path='/companies' 
                    element={
                        <PrivateRoute>
                            <Companies />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path='/companies/:handle' 
                    element={
                        <PrivateRoute>
                            <CompanyDetails />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path='/jobs' 
                    element={
                        <PrivateRoute>
                            <Jobs />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path='/profile' 
                    element={
                        <PrivateRoute>
                            <Profile />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path='/profile/edit' 
                    element={
                        <PrivateRoute>
                            <ProfileForm />
                        </PrivateRoute>
                    } 
                />
                <Route path='*' element={<p>404</p>}/>
            </Routes>
        </>
    )
};

export default Router;