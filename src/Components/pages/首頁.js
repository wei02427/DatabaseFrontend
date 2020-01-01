import React from "react";
import { Link } from "react-router-dom";
import "../../css/container排版.css";
import "../../css/遊戲排版.css"
import NaviBar from "../tools/naviBar"
import Carousels from '../tools/carousels';
import GameTtile from '../tools/gameTitle';
import ImgText from "../tools/imgText";
import titleImg from '../../img/gameTitle.jpg';
import { relative } from "path";
import { type } from "os";

class Article1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { list: [] }
        this.GetGamesByType = this.GetGamesByType.bind(this)
    }

    GetGamesByType(e) {
        var gameType = e.target.value;
        console.log(gameType);
        this.loadData(gameType)
    }

    loadData(type) {
        const that = this;
        const url='https://ntutsting.herokuapp.com/testAPI'
        fetch(url, {
            method: 'post',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                type: type
            })
        })
            .then(function (data) {

                return data.json()
            })
            .then(function (data) {
                let lists = data.map((element) => <Link className="gameCard" to={{ pathname: "/gmaeInfo", state: { price: element.price, img: element.photo, description: element.description, gameID: element.gameID } }}>
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
    render() {

        return (
            <div>
                <NaviBar GetGamesByType={this.GetGamesByType} />
                <Carousels />
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div className="Mycontainer" id="MainContainer" style={{ paddingTop: "20px" }}>
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

export default Article1;
