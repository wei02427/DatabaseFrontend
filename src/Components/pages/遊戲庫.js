import React from "react";
import "../../css/container排版.css";
import NaviBar from "../tools/naviBar"
import {Link}  from "react-router-dom";
import GameTable from "../tools/遊戲表格"
import Button from 'react-bootstrap/Button';
  
class GameBox extends React.Component{
    constructor(props){
        super(props);
        this.GetGamesByType = this.GetGamesByType.bind(this)
    }
    GetGamesByType(e){
        var gameType = e.target.value;
        console.log(gameType);
    }
    
    render(){
    var buttonStyle={
        width:"100px",
        marginTop:"50px",
        marginBottom:"20px",
        marginRight:"10px",
        marginLeft:"10px"
    }

    var CenterStyle={
        width:"100%",
        display:"flex",
        justifyContent:"center"
    }

        return (
            <div>
                <NaviBar GetGamesByType = {this.GetGamesByType}/>
                <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
                    <div className="Mycontainer" id="MainContainer" style={{paddingTop:"20px"}}>
                        <div className="TitleDiv" style={CenterStyle}>
                            <h2 style={{color:"white",paddingTop:"170px"}}>遊戲庫：管理所有遊戲發布狀態</h2>
                        </div>

                        <GameTable contact={{tableType:"gameBox"}}/>

                        <div className="ButtonDiv" style={CenterStyle}>
                            <Link to ="/gmaeManage">
                                <Button variant="info" style={buttonStyle}>返回</Button>
                            </Link>

                            <Link to ={{pathname:"/changeGameData/createNew",state:{isRelease:false}}}>
                                <Button variant="success" style={buttonStyle}>新增</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GameBox;