import * as React from 'react';
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import './App.css';
import DashboardPage from './components/dashboard/dashboard';
import LoginPage from './components/login/login';
import RegistrationPage from './components/registration/registration';

export const AppHTMLStructure = () => {
    return (
        <Router>
            <>
                <Redirect from="/" to="registration" />
                <Route path="/login" component={LoginPage} />
                <Route path="/registration" component={RegistrationPage} />
                <Route path="/dashboard" component={DashboardPage} />
            </>
        </Router>

    )
};