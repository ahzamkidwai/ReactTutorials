import React from "react";
import {Outlet} from "react-router-dom"

function mainHome(){
    return(
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default mainHome;