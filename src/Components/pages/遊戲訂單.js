import React from "react";
import "../../css/container排版.css";
import {Button} from "react-bootstrap"
  
class OrderPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            orderID:this.props.location.state.id,
            orderPrice:this.props.location.state.price,
            orderTime:this.props.location.state.time,
            orderList :this.props.location.state.cartList
        }
        this.handleInClick=this.handleInClick.bind(this)
        this.handleCheck=this.handleCheck.bind(this)
    }

    handleInClick(e){
        console.log(`訂單ID：${this.state.orderID}`);
        console.log(`訂單總價：${this.state.orderPrice}`);
        console.log(`訂單建立時間：${this.state.orderTime}`);
        this.props.history.push("/");
    }

    handleCheck(){
        for(var i=0;i<this.state.orderList.length;i++){
            if(this.state.orderList[i].checked===true){
                console.log(this.state.orderList[i].Name)
            }
        }
    }
    
    render(){
    var CenterStyle={
        width:"100%",
        display:"flex",
        justifyContent:"center"
    }

    var buttonStyle={
        width:"100px",
        marginTop:"50px",
        marginBottom:"20px",
        marginRight:"10px",
        marginLeft:"10px"
    }

    var orderStyle={
        display:"flex",
        width:"70%",
        marginLeft:"15%",
        marginTop:"50px",
        flexDirection:"column",
        alignItems:"center",
        backgroundColor:"steelblue",
        color:"white",
        padding:"30px"
    }
    var d=new Date()
    var price = this.props.location.state.price
    var d = new Date()
        return (
            
            <div>
                <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
                    <div className="Mycontainer" id="MainContainer" style={{paddingTop:"20px"}}>
                        <div className="TitleDiv" style={CenterStyle}>
                            <h1 style={{color:"white",paddingTop:"120px"}}>購買成功，訂單已建立。</h1>
                        </div>

                        <div className="orderDetail" style={orderStyle}>
                            <h3 className="orderID" style={{marginBottom:"15px",marginTop:"15px"}}>訂單編號：{this.state.orderID}</h3>
                            <h3 className="orderPrice" style={{marginBottom:"15px",marginTop:"15px"}}>總價錢：{this.state.orderPrice}</h3>
                            <h3 className="orderTime" style={{marginBottom:"15px",marginTop:"15px"}}>下訂時間：{d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()}</h3>
                        </div>

                        <div className="ButtonDiv" style={CenterStyle}>
                            <Button variant="success" onClick={this.handleInClick} style={buttonStyle}>回首頁</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderPage;