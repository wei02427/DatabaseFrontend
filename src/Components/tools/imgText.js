import React from "react";

class ImgText extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        var ImgTextStyle={
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        };
        
        if(this.props.contact.style==="1"){             //上圖下文字 (商品)
            return (
                <div className="game" style={ImgTextStyle}>
                    <img src={this.props.contact.img} className="gameImg"/>
                    <p Align="Right" className="gameText">{"NT$ "+this.props.contact.text}</p>
                </div>
            )
        }else if(this.props.contact.style==="2"){       //上文字下圖 (報名教學步驟))
            return(
                <div className="signUpStep">
                    <p class="stepText" dangerouslySetInnerHTML={{__html: this.props.contact.text}}></p>
                    <img class="stepImg" src={this.props.contact.img}/>        
                </div>
            )
        }else if(this.props.contact.style==="3"){       //上文字下圖(QRcode有連結)
            return(
                <div className="signUpStep">
                    <p class="stepText"  style={{color:"#F44336"}}>{this.props.contact.text}</p>
                    <a id="QRcode" href="http://bit.ly/樂台連結"><img style={{width:"100%",paddingTop:"10px"}} src={this.props.contact.img}/></a>
                </div>
            )
        }else if(this.props.contact.style==="4"){       //圖連結(贊助)
            return(
                <div className="sponorGroup">
                    <a href={this.props.contact.url} className="sponorImg"><img class="InerImg" src={this.props.contact.img}/></a>
                </div>
            )
        }
    }
}

export default ImgText;