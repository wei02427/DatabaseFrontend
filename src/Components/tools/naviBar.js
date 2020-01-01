import React from "react";
import {Link}  from "react-router-dom";
import "../../css/headerStyle.css"

class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectType:"recommend",
        }
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
                            <button className="naviText" value="recommend" type="button" onClick={this.props.GetGamesByType}>精選推薦</button>
                        </li>  

                        <li >
                            <button className="naviText" value="Leisure" type="button" onClick={this.props.GetGamesByType}>休閒推薦</button>
                        </li>

                        <li>
                            <button className="naviText" value="adventure" type="button" onClick={this.props.GetGamesByType}>冒險類型</button>
                        </li>

                        <li >
                            <button className="naviText" value="Speed" type="button" onClick={this.props.GetGamesByType}>競速類型</button>
                        </li>

                        <li >
                            <button className="naviText" value="Strategy" type="button" onClick={this.props.GetGamesByType}>策略類型</button>
                        </li>

                        <li >
                            <button className="naviText" value="sports" type="button" onClick={this.props.GetGamesByType}>運動類型</button>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navbar;