import React from "react";
import "../../css/container排版.css";
import GameTable from "../tools/遊戲表格"
  
class OrderRecoder extends React.Component{
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
                <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
                    <div className="Mycontainer" id="MainContainer" style={{paddingTop:"20px"}}>
                        <div className="TitleDiv" style={CenterStyle}>
                            <h2 style={{color:"white",paddingTop:"120px"}}>您的購買紀錄</h2>
                        </div>

                        <GameTable contact={{tableType:"orderRecoder"}}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderRecoder;