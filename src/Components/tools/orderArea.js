import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class OrderArea extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        var gameId = this.props.contact.ID
        return(
            <div className="orderArea">
                <h5 className="orderText">購買遊戲</h5>
                <div className="priceArea"></div>
                <p className="priceText">NT$：{this.props.contact.price}</p>
                <Link to={{pathname:"/Cart",state:{CartGameID:gameId}}}>
                    <Button variant="success">加入購物車</Button>
                </Link>
            </div>
        );
    }
}

export default OrderArea;