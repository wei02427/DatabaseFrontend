import React from "react";
import "../../css/container排版.css";
import NaviBar from "../tools/naviBar"
import {Link}  from "react-router-dom";
import GameTable from "../tools/遊戲表格"
import Button from 'react-bootstrap/Button';
  
class GameMange extends React.Component{
    constructor(props){
        super(props);
        this.GetGamesByType = this.GetGamesByType.bind(this)
    }

    GetGamesByType(e){
        var gameType = e.target.value;
        console.log(gameType);
    }
    
    render(){
    var gameBoxStyle={
        width:"200px",
        marginTop:"50px"
    }

    var CenterStyle={
        width:"100%",
        display:"flex",
        justifyContent:"center"
    }

        return (
            <div>

                <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
                    <div className="Mycontainer" id="MainContainer" style={{paddingTop:"20px"}}>
                        <div className="TitleDiv" style={CenterStyle}>
                            <h2 style={{color:"white",paddingTop:"170px"}}>遊戲管理：管理架上遊戲</h2>
                        </div>

                        <GameTable contact={{tableType:"manage"}}/>
                        
                        <Link className="ButtonDiv" style={CenterStyle} to ="/gameBox">
                            <Button variant="success" style={gameBoxStyle}>查看遊戲庫</Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default GameMange;