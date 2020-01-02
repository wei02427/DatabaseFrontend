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
import UnderWear from './Components/pages/我的內庫'
import "./css/gotop.css"

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            logPerson:"noUser"
        }
        this.changeLogState=this.changeLogState.bind(this)
        this.LogOut=this.LogOut.bind(this)
    }

    //登入身分判斷
    changeLogState(logIdent){
        var newLogPerson = this.state.logPerson;
        if(logIdent===true){
            newLogPerson = "ManagerLogIn";
            this.setState({logPerson:newLogPerson});
        }else{
            newLogPerson = "userLogIn";
            this.setState({logPerson:newLogPerson});
        }
    }

    //登出
    LogOut(){
        var newLogPerson = this.state.logPerson;
        newLogPerson = "noUser";
        this.setState({logPerson:newLogPerson});
    }

    render(){
        return (
            <BrowserRouter>
                <Router>
                    <div> 
                        <Header contact={{logState:this.state.logPerson}} LogOut={this.LogOut}/>
                        <Route exact path="/" component={Home}/>
                        <Route path="/gmaeInfo/:mode" component={GmaeInfo}/>
                        <Route path="/gmaeManage" component={GmaeManage}/>
                        <Route path="/gameBox" component={GameBox}/>
                        <Route path="/signIn" render={(props) => (<SignIn {...props} changeLogState={this.changeLogState.bind(this)} />)} />
                        <Route path="/signUp" component={SignUp}/>
                        <Route path="/orderRecoder" component={OrderRecoder}/>
                        <Route path="/changeGameData/:action" component={ChangeGameData}/>
                        <Route path="/personalInfo" component={PersonalInfo}/>
                        <Route path="/Cart" component={Cart}/>
                        <Route path="/orderPage" component={OrderPage}/>
                        <Route path="/underWear" component={UnderWear}/>
                        <div className="goTop">TOP</div>
                        <Footer/>
                    </div>
                </Router>
            </BrowserRouter>
        )
    }
}
export default App;

