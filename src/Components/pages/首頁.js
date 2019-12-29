import React from "react";
import {Link}  from "react-router-dom";
import "../../css/container排版.css";
import "../../css/遊戲排版.css"
import NaviBar from "../tools/naviBar"
import Carousels from '../tools/carousels';
import GameTtile from '../tools/gameTitle';
import ImgText from "../tools/imgText";
import titleImg from '../../img/gameTitle.jpg';
import { relative } from "path";
import com1 from "../../img/周邊1.jpg";
import com2 from "../../img/周邊2.jpg";
import com3 from "../../img/周邊3.jpg";
  
class Article1 extends React.Component{
    constructor(props){
        super(props);
    }

    
    render(){           
        return (
            <div>
                <NaviBar/>
                <Carousels/>
                <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
                    <div className="Mycontainer" id="MainContainer" style={{paddingTop:"20px"}}>
                        <GameTtile contact={{img:titleImg}}></GameTtile>
                        <div className="GameContainer">
                            <Link className="gameCard" to={{pathname:"/gmaeInfo",state:{price:"123",img:com1}}}>
                                <ImgText contact={{img:com1,text:"123",style:"1"}}/>
                            </Link>
                            
                            <Link className="gameCard" to={{pathname:"/gmaeInfo",state:{price:"456",img:com2}}}>
                                <ImgText contact={{img:com2,text:"456",style:"1"}}/>
                            </Link>

                            <Link className="gameCard" to={{pathname:"/gmaeInfo",state:{price:"789",img:com3}}}>
                              <ImgText contact={{img:com3,text:"789",style:"1"}}/>
                            </Link>

                            <Link className="gameCard" to={{pathname:"/gmaeInfo",state:{price:"123",img:com1}}}>
                                <ImgText contact={{img:com1,text:"123",style:"1"}}/>
                            </Link>
                            
                            <Link className="gameCard" to={{pathname:"/gmaeInfo",state:{price:"456",img:com2}}}>
                                <ImgText contact={{img:com2,text:"456",style:"1"}}/>
                            </Link>

                            <Link className="gameCard" to={{pathname:"/gmaeInfo",state:{price:"789",img:com3}}}>
                              <ImgText contact={{img:com3,text:"789",style:"1"}}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Article1;