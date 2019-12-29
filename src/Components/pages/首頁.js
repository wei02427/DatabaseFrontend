import React from "react";
import { Link } from "react-router-dom";
import "../../css/container排版.css";
import "../../css/遊戲排版.css"
import Carousels from '../tools/carousels';
import GameTtile from '../tools/gameTitle';
import ImgText from "../tools/imgText";
import titleImg from '../../img/gameTitle.jpg';
import { relative } from "path";

class Article1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { list: [] }
    }

    componentWillMount() {
        const that = this;
        
        fetch('https://ntutsting.herokuapp.com/testAPI', {
            method: 'get',
            mode: 'cors',
        })
            .then(function (data) {
                console.log('callapi')
                return data.json()
            })
            .then(function (data) {
                let lists = data.map((element) => <Link className="gameCard" to={{ pathname: "/gmaeInfo", state: { price: element.price, img: element.photo,description: element.description} }}>
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
    render() {

        return (
            <div>
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
