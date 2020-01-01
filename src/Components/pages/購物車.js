import React from "react";
import "../../css/container排版.css";
import GameTable from "../tools/遊戲表格"

class Cart extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        var CenterStyle={
            width:"100%",
            display:"flex",
            justifyContent:"center"
        }
        var CartGameId=this.props.location.state.CartGameID
            return (
                <div>
                    <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
                        <div className="Mycontainer" id="MainContainer" style={{paddingTop:"20px"}}>
                            <div className="TitleDiv" style={CenterStyle}>
                                <h2 style={{color:"#FF6100",paddingTop:"120px"}}>Step.1的購物車清單</h2>
                                <h4 style={{color:"white",paddingTop:"125px"}}>→→→→</h4>
                                <h5 style={{color:"white",paddingTop:"125px"}}>Step.2 購買成功</h5>
                            </div>
    
                            <GameTable contact={{tableType:"Cart",NewCartGameId:CartGameId}}/>
                        </div>
                    </div>
                </div>
            );
    }
}
export default Cart;