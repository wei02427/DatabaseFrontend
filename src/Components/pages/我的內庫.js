import React from "react";
import {Link}  from "react-router-dom";
import "../../css/container排版.css";
import "../../css/遊戲排版.css"
import GameTtile from '../tools/gameTitle';
import ImgText from "../tools/imgText";
import titleImg from '../../img/gameTitle.jpg';
import { relative } from "path";

  
class UnderWear extends React.Component{
    constructor(props){
        super(props);
        this.state = { list: [] }
        this.GetGamesByType=this.GetGamesByType.bind(this)
    }

    GetGamesByType(e){
        var gameType = e.target.value;
        console.log(gameType);
        this.loadData(gameType)
    }
    loadData(type) {
        const that = this;
        const url='https://ntutsting.herokuapp.com/testAPI'
        this.setState({list:[]})
        fetch(url, {
            method: 'post',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                type: type,
                state:1
            })
        })
            .then(function (data) {

                return data.json()
            })
            .then(function (data) {
                let lists = data.map((element) => <Link className="gameCard" to={{ pathname: "/gmaeInfo/underWear", state: { price: element.price, img: element.photo, description: element.description, gameID: element.gameID } }}>
                    <ImgText contact={{ img: element.photo, text: element.price, style: "1" }} />
                </Link>)
                that.setState({
                    list: [...that.state.list, lists]
                })
            })

            .catch(function (err) {
                console.log(err)
            })
    }
    componentWillMount() {
        this.loadData('recommend')
    }
    render(){           
        var CenterStyle={
            width:"100%",
            display:"flex",
            justifyContent:"center"
        }

        return (
            <div>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div className="Mycontainer" id="MainContainer" style={{ paddingTop: "20px" }}>
                        <div className="TitleDiv" style={CenterStyle}>
                            <h2 style={{color:"white",paddingTop:"170px"}}>我的內庫：已擁有的遊戲</h2>
                        </div>
                        <GameTtile contact={{ img: titleImg }}></GameTtile>
                        <div className="GameContainer">
                            {this.state.list}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
        }
            
export default UnderWear;