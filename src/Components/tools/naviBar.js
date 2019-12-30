import React from "react";
import {Link}  from "react-router-dom";
import "../../css/headerStyle.css"

class Navbar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        var TopLogoStyle={
            marginLeft:"0",
            display:"flex",
            justifyContent: "center",
	        alignItems: "center"
        };

        return (
            <div classNam="navBar">
                <nav className="navbar">
                    <ul class="navi_content">                
                        <li >
                            <button className="naviText">精選推薦</button>
                        </li>  

                        <li >
                            <Link className="naviText" to="/gmaeManage">休閒類型</Link>
                        </li>

                        <li >
                            <Link className="naviText" to="/orderRecoder">冒險類型</Link>
                        </li>

                        <li >
                            <Link className="naviText" to="/personalInfo">競速類型</Link>
                        </li>

                        <li >
                            <button className="naviText">策略類型</button>
                        </li>

                        <li >
                            <button className="naviText">運動類型</button>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navbar;