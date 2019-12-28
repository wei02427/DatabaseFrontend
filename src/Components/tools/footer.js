import React from "react";
import "../../css/footerStyle.css";

class Footer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="footer">
                <div className="cpoyright">© 2019  資料庫設計 - 遊戲購買系統      Design  |  Group 5</div>
            </div>
            
        )
    }
}

export default Footer;