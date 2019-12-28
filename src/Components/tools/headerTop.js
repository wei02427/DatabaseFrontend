import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import {Link}  from "react-router-dom";
import "../../css/headerStyle.css"
import Logo from "../../img/logo.png";


class HeaderTop extends React.Component{
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

        if(this.props.contact.state === "noUser"){
            return (
                <div className="TopLogoBox">
                        <div className="LogoBox">
                            <img className="TopLogo" src={Logo}></img>
                        </div>
                        <Link className="naviText" id="TopText" to="/">會員登入</Link>
                </div>
            );
        }else if(this.props.contact.state === "logIn"){
            }return (
                <div className="TopLogoBox">
                        <div className="LogoBox">
                            <img className="TopLogo" src={Logo}></img>
                        </div>

                        <Dropdown className="dropDown">
                            <Dropdown.Toggle variant="info" id="dropdown-basic">查看資料</Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">購物車</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">個人資料</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">交易紀錄</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">登出</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <p className="UserText">XXX玩家，你好！</p>
                </div>
            );
    }
}

export default HeaderTop;