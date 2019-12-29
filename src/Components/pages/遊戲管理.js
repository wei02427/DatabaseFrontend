import React from "react";
import "../../css/container排版.css";
import NaviBar from "../tools/naviBar"
import { relative } from "path";
import GameTable from "../tools/遊戲表格"
import Button from 'react-bootstrap/Button';
  
class GameMange extends React.Component{
    constructor(props){
        super(props);
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
                <NaviBar/>
                <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
                    <div className="Mycontainer" id="MainContainer" style={{paddingTop:"20px"}}>
                        <div className="TitleDiv" style={CenterStyle}>
                            <h2 style={{color:"white",paddingTop:"170px"}}>遊戲管理</h2>
                        </div>

                        <GameTable/>

                        <div className="ButtonDiv" style={CenterStyle}>
                            <Button variant="success" style={gameBoxStyle}>查看遊戲庫</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GameMange;