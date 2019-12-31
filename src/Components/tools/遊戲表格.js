import React from "react";
import { relative } from "path";
import '../../css/遊戲表格樣式.css'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Form from "react-bootstrap/FormControl";
import { Checkbox } from "semantic-ui-react";
  
class GameTable extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isBuy:[],
            CartName:["魔物獵人","刺客教條:兄弟會"],
            CartType:["動作遊戲","動作遊戲"],
            CartPrice:[1800,900],
            
        }
    }
    
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    render(){

        
        if(this.props.contact.tableType==="manage"){
            return (
                <div className="gameTable">
                    <table>
                        <thead>
                            <tr className="tableHead">
                                <td width="150px" align='center' className="headField">名稱</td>
                                <td width="150px" align='center' className="headField">種類</td>
                                <td width="150px" align='center' className="headField">價格</td>
                                <td width="150px" align='center' className="headField">廠商</td>
                                <td width="150px" align='center' className="headField">管理</td>
                            </tr>
                        </thead>
                        <tbody>
                             <tr>
                                <td width="150px" align='center' className="bodyField">刺客教條</td>
                                <td width="150px" align='center' className="bodyField">冒險類型</td>
                                <td width="150px" align='center' className="bodyField">777</td>
                                <td width="150px" align='center' className="bodyField">刺客大聯盟</td>
                                <td width="150px" align='center' className="bodyField">
                                    <Button variant="danger" className="tableButton">下架</Button>
                                </td>
                            </tr>
    
                            <tr>
                                <td width="150px" align='center' className="bodyField">跑跑卡丁車</td>
                                <td width="150px" align='center' className="bodyField">競速類型</td>
                                <td width="150px" align='center' className="bodyField">888</td>
                                <td width="150px" align='center' className="bodyField">遊戲橘子</td>
                                <td width="150px" align='center' className="bodyField">
                                    <Button variant="danger" className="tableButton">下架</Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        }else if(this.props.contact.tableType==="gameBox"){
            return (
                <div className="gameTable">
                    <table>
                        <thead>
                            <tr className="tableHead">
                                <td width="150px" align='center' className="headField">名稱</td>
                                <td width="150px" align='center' className="headField">種類</td>
                                <td width="150px" align='center' className="headField">價格</td>
                                <td width="150px" align='center' className="headField">遊戲情況</td>
                                <td width="150px" align='center' className="headField">管理</td>
                            </tr>
                        </thead>
                        <tbody>
                             <tr>
                                <td width="150px" align='center' className="bodyField">跑跑薑餅人</td>
                                <td width="150px" align='center' className="bodyField">競速類型</td>
                                <td width="150px" align='center' className="bodyField">777</td>
                                <td width="150px" align='center' className="bodyField">未上架</td>
                                <td width="150px" align='center' className="bodyField">
                                    <Link to={{pathname:"/changeGameData/editGame",state:{isRelease:false}}}>
                                        <Button variant="secondary" className="tableButton">編輯</Button>
                                    </Link>
                                </td>
                            </tr>
    
                            <tr>
                                <td width="150px" align='center' className="bodyField">跑跑卡丁車</td>
                                <td width="150px" align='center' className="bodyField">競速類型</td>
                                <td width="150px" align='center' className="bodyField">888</td>
                                <td width="150px" align='center' className="bodyField">上架中</td>
                                <td width="150px" align='center' className="bodyField">
                                    <Link to={{pathname:"/changeGameData/editGame",state:{isRelease:true}}}>
                                        <Button variant="secondary" className="tableButton">編輯</Button>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        }else if(this.props.contact.tableType==="orderRecoder"){
            return (
                <div className="gameTable">
                    <table>
                        <thead>
                            <tr className="tableHead">
                                <td width="150px" align='center' className="headField">訂單編號</td>
                                <td width="150px" align='center' className="headField">時間</td>
                                <td width="150px" align='center' className="headField">總價</td>
                            </tr>
                        </thead>
                        <tbody>
                             <tr>
                                <td width="150px" align='center' className="bodyField">106590017</td>
                                <td width="150px" align='center' className="bodyField">2019.12.8</td>
                                <td width="150px" align='center' className="bodyField">550</td>
                            </tr>
    
                            <tr>
                                <td width="150px" align='center' className="bodyField">106590028</td>
                                <td width="150px" align='center' className="bodyField">2020.3.6</td>
                                <td width="150px" align='center' className="bodyField">700</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        }else if(this.props.contact.tableType==="Cart"){
            return (
                <div className="gameTable">
                    <table>
                        <thead>
                            <tr className="tableHead">
                                <td width="150px" align='center' className="headField">勾選購買</td>
                                <td width="150px" align='center' className="headField">名稱</td>
                                <td width="150px" align='center' className="headField">種類</td>
                                <td width="150px" align='center' className="headField">價格</td>
                            </tr>
                        </thead>
                        <tbody>
                             <tr>
                             <td width="150px" align='center' className="bodyField">
                                    <input
                                        name= "isBuy"
                                        type = "checkbox"
                                        checked={this.state.isBuy[0]}
                                        onChange={this.handleInputChange}
                                        />
                                </td>
                                <td width="150px" align='center' className="bodyField">{this.state.CartName[0]}</td>
                                <td width="150px" align='center' className="bodyField">{this.state.CartType[0]}</td>
                                <td width="150px" align='center' className="bodyField">{this.state.CartPrice[0]}</td>
                            </tr>
    
                            <tr>
                                
                                <td width="150px" align='center' className="bodyField">
                                    <input
                                        name= "isBuy"
                                        type = "checkbox"
                                        checked={this.state.isBuy[1]}
                                        onChange={this.handleInputChange}
                                        />
                                </td>
                                <td width="150px" align='center' className="bodyField">{this.state.CartName[1]}</td>
                                <td width="150px" align='center' className="bodyField">{this.state.CartType[1]}</td>
                                <td width="150px" align='center' className="bodyField">{this.state.CartPrice[1]}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        }
    }
}

export default GameTable;