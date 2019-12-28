import React from "react";

class GameTtile extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        var titleStyle={
            marginLeft: "10%",
            width: "80%",
            paddingTop:"25px",
            paddingBottom:"25px"
        };

        return (
            <div style={titleStyle}>
                <img style={{width:"100%"}} src={this.props.contact.img}></img>
            </div>
        )
    }
}

export default GameTtile;