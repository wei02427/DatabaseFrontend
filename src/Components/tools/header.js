import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import {Button} from "react-bootstrap"
import {Link}  from "react-router-dom";
import "../../css/headerStyle.css"
import Logo from "../../img/logo.png";
import jwt_decode from 'jwt-decode';

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

        var dropdownTextStyle={
            color:"black",
            border:"0px",
            backgroundColor:"transparent"
        }

        var logState=this.props.contact.logState;
        if(logState === "noUser"){
            return (
                <div className="header">
                        <Link className="LogoBox" to="/">
                            <img className="TopLogo" src={Logo}></img>
                        </Link>
                        
                        <Link className="naviText" id="TopText" to="/signIn">會員登入</Link>
                </div>
            );
        }else if(logState === "userLogIn"){
            const decoded = jwt_decode(localStorage.getItem('token'));
            var userName = decoded.uid;
            return (
                <div className="header">
                        <Link className="LogoBox" to="/">
                            <img className="TopLogo" src={Logo}></img>
                        </Link>

                        <Dropdown className="dropDown">
                            <Dropdown.Toggle variant="info" id="dropdown-basic">查看資料</Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <Link style={dropdownTextStyle} to="Cart">購物車</Link>
                                </Dropdown.Item>
                                
                                <Dropdown.Item>
                                    <Link style={dropdownTextStyle} to="/personalInfo">個人資料</Link>
                                </Dropdown.Item>

                                <Dropdown.Item>
                                    <Link style={dropdownTextStyle} to="/underWear">我的內庫</Link>
                                </Dropdown.Item>

                                <Dropdown.Item>
                                    <Link style={dropdownTextStyle} to="/orderRecoder">交易紀錄</Link>
                                </Dropdown.Item>

                                <Dropdown.Item>
                                    <Link style={dropdownTextStyle} onClick={this.props.LogOut} to="/">登出</Link>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <p className="UserText">{userName}玩家，你好！</p>
                </div>
            );
        }else if(logState === "ManagerLogIn"){
            return (
                <div className="header">
                        <Link className="LogoBox" to="/">
                            <img className="TopLogo" src={Logo}></img>
                        </Link>

                        <Dropdown className="dropDown">
                            <Dropdown.Toggle variant="info" id="dropdown-basic">查看資料</Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <Link style={dropdownTextStyle} to="/gmaeManage">遊戲管理</Link>
                                </Dropdown.Item>

                                <Dropdown.Item>
                                    <Link style={dropdownTextStyle} onClick={this.props.LogOut} to="/">登出</Link>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

            <p className="UserText">管理員，你好！</p>
                </div>
            );
        }
    }
}

export default Header;