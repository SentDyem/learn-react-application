import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import StorePicker from "./StorePicker";
import App from "../components/App";
import NotFoundPage from '../components/NotFoundPage';

const Router = () =>
    (
        <BrowserRouter>
            <Switch>
                <Route exact path = "/" component = {StorePicker} />
                <Route path = "/store/:storeId" component = {App} />
                <Route component={NotFoundPage} />
            </Switch>
        </BrowserRouter>
    );
export default Router;