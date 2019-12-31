import React from "react";
import { HashRouter as Router, Route,Switch, BrowserRouter, } from "react-router-dom";
import Header from './Components/tools/header'
import Footer from "./Components/tools/footer"
import Home from "./Components/pages/首頁"
import GmaeInfo from './Components/pages/遊戲資訊'
import GmaeManage from './Components/pages/遊戲管理'
import GameBox from './Components/pages/遊戲庫'
import SignIn from './Components/pages/帳號登入'
import SignUp from './Components/pages/帳號創立'
import OrderRecoder from './Components/pages/購買紀錄'
import ChangeGameData from './Components/pages/編輯&新增遊戲'
import PersonalInfo from './Components/pages/個人資料'
import Cart from './Components/pages/購物車'
import OrderPage from './Components/pages/遊戲訂單'
import "./css/gotop.css"

class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <BrowserRouter>
                <Router>
                    <div> 
                        <Header contact={{logState:"noUser"}}/>
                        <Route exact path="/" component={Home}/>
                        <Route path="/gmaeInfo" component={GmaeInfo}/>
                        <Route path="/gmaeManage" component={GmaeManage}/>
                        <Route path="/gameBox" component={GameBox}/>
                        <Route path="/signIn" component={SignIn}/>
                        <Route path="/signUp" component={SignUp}/>
                        <Route path="/orderRecoder" component={OrderRecoder}/>
                        <Route path="/changeGameData/:action" component={ChangeGameData}/>
                        <Route path="/personalInfo" component={PersonalInfo}/>
                        <Route path="/Cart" component={Cart}/>
                        <Route path="/orderPage" component={OrderPage}/>
                        <div className="goTop">TOP</div>
                        <Footer/>
                    </div>
                </Router>
            </BrowserRouter>
        )
    }
}
export default App;

