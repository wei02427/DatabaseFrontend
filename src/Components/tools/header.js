import React from "react";
import {Link}  from "react-router-dom";
import HeaderTop from "./headerTop"
import "../../css/headerStyle.css"

class Header extends React.Component{
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
            <div classNam="header">
                <HeaderTop contact={{state:this.props.contact.state}}/>

                <nav className="navbar">
                    <ul class="navi_content">                
                        <li >
                            <Link className="naviText" to="/">精選推薦</Link>
                        </li>  

                        <li >
                            <Link className="naviText" to="/">休閒類型</Link>
                        </li>

                        <li >
                            <Link className="naviText" to="/">冒險類型</Link>
                        </li>

                        <li >
                            <Link className="naviText" to="/">競速類型</Link>
                        </li>

                        <li >
                            <Link className="naviText" to="/">策略類型</Link>
                        </li>

                        <li >
                            <Link className="naviText" to="/">運動類型</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;