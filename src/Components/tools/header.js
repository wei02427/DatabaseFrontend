import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import {Button} from "react-bootstrap"
import {Link}  from "react-router-dom";
import "../../css/headerStyle.css"
import Logo from "../../img/logo.png";


class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={logState:this.props.contact.logState};
        this.LogOut=this.LogOut.bind(this)
        this.UserLogIn=this.UserLogIn.bind(this)
        this.ManagerLogIn=this.ManagerLogIn.bind(this)
    }

    //登出
    LogOut(){
        localStorage.clear()
        this.setState({
            logState:"noUser"});
    }

    //登入一般使用者
    UserLogIn(){
        this.setState({
            logState:"userLogIn"});
    }

    //登入管理員
    ManagerLogIn(){
        this.setState({
            logState:"ManagerLogIn"});
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

        if(this.state.logState === "noUser"){
            return (
                <div className="header">
                        <Link className="LogoBox" to="/">
                            <img className="TopLogo" src={Logo}></img>
                        </Link>

                        <Link to ="/" onClick={this.UserLogIn}>
                            <Button variant="danger" >使用者(測試)</Button>
                        </Link>

                        <Link to ="/">
                            <Button variant="success" onClick={this.ManagerLogIn}>管理員(測試)</Button>
                        </Link>
                        
                        <Link className="naviText" id="TopText" to="/signIn">會員登入</Link>
                </div>
            );
        }else if(this.state.logState === "userLogIn"){
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
                                    <Link style={dropdownTextStyle} to="/orderRecoder">交易紀錄</Link>
                                </Dropdown.Item>

                                <Dropdown.Item>
                                    <Link style={dropdownTextStyle} onClick={this.LogOut} to="/">登出</Link>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <p className="UserText">XXX玩家，你好！</p>
                </div>
            );
        }else if(this.state.logState === "ManagerLogIn"){
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
                                    <Link style={dropdownTextStyle} onClick={this.LogOut} to="/">登出</Link>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <p className="UserText">XXX管理員，你好！</p>
                </div>
            );
        }
    }
}

export default Header;