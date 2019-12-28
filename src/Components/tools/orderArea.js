import React from 'react'
import Button from 'react-bootstrap/Button';

class OrderArea extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="orderArea">
                <h5 className="orderText">購買遊戲：</h5>
                <div className="priceArea"></div>
                <p className="priceText">NT$：{this.props.contact.price}</p>
                <Button variant="success">加入購物車</Button>
            </div>
        );
    }
}

export default OrderArea;