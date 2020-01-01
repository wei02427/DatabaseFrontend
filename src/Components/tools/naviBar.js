import React from "react";
import {Link}  from "react-router-dom";
import "../../css/headerStyle.css"

class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectType:"recommend",
        }
        this.handleselectType=this.handleselectType.bind(this);
    }

    handleselectType(e){
        this.setState({selectType:e.target.value});
        console.log(`你選擇的是${this.state.selectType}`)
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
                            <button className="naviText" value="recommend" type="button" onClick={this.handleselectType}>精選推薦</button>
                        </li>  

                        <li >
                            <button className="naviText" value="Leisure" type="button" onClick={this.handleselectType}>休閒推薦</button>
                        </li>

                        <li>
                            <button className="naviText" value="adventure" type="button" onClick={this.handleselectType}>冒險類型</button>
                        </li>

                        <li >
                            <button className="naviText" value="Speed" type="button" onClick={this.handleselectType}>競速類型</button>
                        </li>

                        <li >
                            <button className="naviText" value="Strategy" type="button" onClick={this.handleselectType}>策略類型</button>
                        </li>

                        <li >
                            <button className="naviText" value="sports" type="button" onClick={this.handleselectType}>運動類型</button>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navbar;