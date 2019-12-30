import React from "react";
import "../../css/個資排版.css"
import "../../css/container排版.css"
import portrait from "../../img/head.png"


class information extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Account:"zx9951956",
            FirstName:"maple",
            SecondName:"Yin",
            Tel:"0978345279",
            Email:"zx9951956@gamil.com",
            address:"Taiwan",
        }
    }
    render(){
        return(
            <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
                <div className="Mycontainer">
                    <div className="InformationTop">
                        <div className="head-Box">
                            <img  className="head-portrait" src={portrait}></img>
                        </div>
                        <div className = "IDText">
                            <h5>{this.state.Account}</h5>
                        </div>
                    </div>
                    <div className="Information-column">
                        <div className="Back">
                            <div className = "Text">
                                <h5>姓名 : {this.state.FirstName} {this.state.SecondName}</h5>
                            </div>
                        </div>
                        <div className="Back">
                            <div className = "Text">
                                <h5>電話 : {this.state.Tel}</h5>
                            </div>
                        </div>
                        <div className="Back">
                            <div className = "Text">
                                <h5>Email : {this.state.Email} </h5>
                            </div>
                        </div>
                        <div className="Back">
                            <div className = "Text">
                                <h5>地址 : {this.state.address} </h5>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default information;