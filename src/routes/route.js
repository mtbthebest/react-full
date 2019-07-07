import React from 'react'
import {createBrowserHistory} from "history";

const history = createBrowserHistory()
const Route =({path, component}) =>{
    const pathname = window.location.pathname;
    console.log(pathname, path)
    if(pathname.match(path)){
        return React.createElement(component)
    }
    else{
        return null;
    }
};
export default Route
