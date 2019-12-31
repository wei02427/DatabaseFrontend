import React from "react";
import Article from "../tools/article";
import OrderArea from "../tools/orderArea";
import Messageboard from "../tools/留言板/MessageBoard";
import "../../css/container排版.css";
import "../../css/購買&評論區.css";
import "../../css/gotop.css"
import gmae1 from "../../img/周邊1.jpg";
import { relative } from "path";
  
class GameInfo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            show:false
        }
        this.handleScroll = this.handleScroll.bind()
    }

    componentWillMount(){
        window.addEventListener('scroll',this.handleScroll,true);
    }
    handleScroll(){
        let scrollTop = document.documentElement.scrollTop;
        if(scrollTop>100){
            this.setState({
                show:true
            })
        }else{
            this.setState({
                show:false
            })
        }
    }

    backTop(){
        document.documentElement.scrollTop = 0;
    }
    
    render(){
        var data = this.props.location.state;
        var gamePrice=data.price;
        var gameImg=data.img;
        var gmaeText="這是一款真正好玩的遊戲，很多很多介紹.....";
        return (
            <div>
                <div style={{width:"100%",display:"flex",justifyContent:"center"} }>
                    <div className="Mycontainer" id="MainContainer" style={{paddingTop:"20px"}}>
                        <Article contact={{img:gameImg,title:"遊戲介紹:",text:gmaeText,style:1}}/>
                        <OrderArea contact={{price:gamePrice}}/>
                        <hr></hr>
                        <Messageboard/>
                    </div>
                </div>
            </div>
        );
    }
}

export default GameInfo;