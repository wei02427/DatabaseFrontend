import React from "react";
import { relative } from "path";
import '../../css/遊戲表格樣式.css'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Form from "react-bootstrap/FormControl";
import "../../css/container排版.css"
import { Checkbox } from "semantic-ui-react";
import { DH_UNABLE_TO_CHECK_GENERATOR } from "constants";

class GameTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            CartList: [],
            ManageList: [],
            GameBoxList: [],
            willBuyList: [],
            money: 0,
        };
        this.handleCartReset = this.handleCartReset.bind(this);
        this.deleteChecked = this.deleteChecked.bind(this);
        this.handleManageReset = this.handleManageReset.bind(this);
        this.handleReleaseDown = this.handleReleaseDown.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleGameBoxReset = this.handleGameBoxReset.bind(this);
        this.handleManageReset();
        this.handleCartReset();
        this.handleGameBoxReset();
    }
    //#region 購物車相關
    handleInputChange(event) {   //改變 CratItem的checked
        console.log( event.target.checked , event.target.value);
        if(event.target.checked==true){
            this.state.willBuyList.push(event.target.value)
            console.log(this.state.willBuyList)
        }
        else if(event.target.checked==false){
            for(var i=0;i<this.state.willBuyList.length;i++){
                if(this.state.willBuyList[i]==event.target.value){
                     this.state.willBuyList.splice(i,1);
                     i--;
                }
                
            }
            console.log(this.state.willBuyList)
        }
        this.setState({willBuyList:this.state.willBuyList})
        
    }

    handleCartReset() {          //購物車資料

        const that = this;
        var allmoney=0;
        const url="https://ntutsting.herokuapp.com/testAPI"
        this.setState({CartList:[]})
        fetch(url, {
            method: 'post',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                type: 'type',
                state: 'release_state'
            })

        })
            .then(function (data) {
                return data.json()
            })
            .then(function (data) {
                
                let CartLists = data.map((element) => 
                        <tr>
                            {
                                allmoney+=element.price,
                                console.log(allmoney)
                            }
                            <td width="150px" align='center' className="bodyField">{element.name}</td>
                            <td width="150px" align='center' className="bodyField">{element.type}</td>
                            <td width="150px" align='center' className="bodyField">{element.price}</td>
                            <td width="150px" align='center' className="bodyField">
                                <Button variant="danger" value={element.state} className="tableButton">刪除</Button>
                            </td>
                        </tr>,
                )
                that.setState({
                    CartList: [...that.state.CartList, CartLists]
                })
            })
            .catch(function (err) {
                console.log(err)
            })
    }

    

    deleteChecked(event) {     //刪除CartItem

        for (var i = 0; i < this.state.CartList.length; i++) {
            console.log(`Delete ${this.state.CartList[i].checked}`);
            if (this.state.CartList[i].checked === true) {

                this.state.CartList.splice(i, 1);
                i--;
            }
        }

        this.setState({ CartList: this.state.CartList });
    }
    //#endregion
    //#region 上架遊戲表相關
    handleManageReset() {          //上架遊戲中資料
        const that = this;
        const url="https://ntutsting.herokuapp.com/testAPI"
        this.setState({ManageList:[]})
        fetch(url, {
            method: 'post',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                type: 'type',
                state: 'release_state'
            })

        })
            .then(function (data) {
                return data.json()
            })
            .then(function (data) {
                
                let ManageLists = data.map((element) => 
                        <tr>
                            <td width="150px" align='center' className="bodyField">{element.name}</td>
                            <td width="150px" align='center' className="bodyField">{element.type}</td>
                            <td width="150px" align='center' className="bodyField">{element.price}</td>
                            <td width="150px" align='center' className="bodyField">{element.AuthorName}</td>
                            <td width="150px" align='center' className="bodyField">
                                <Button variant="danger" value={element.state} className="tableButton">下架</Button>
                            </td>
                        </tr>
                )
                that.setState({
                    ManageList: [...that.state.ManageList, ManageLists]
                })
            })
            .catch(function (err) {
                console.log(err)
            })

    }

    handleReleaseDown(event) {   //刪除
        for (var i = 0; i < this.state.ManageList.length; i++) {
            if (this.state.ManageList[i].Game_id == event.target.value) {
                this.state.ManageList[i].isRelease = false;
                this.state.ManageList.splice(i, 1);
                i--;
            }
        } this.setState({ ManageList: this.state.ManageList });
    }

    //#endregion
    //#region 所有可控的遊戲列表
    handleGameBoxReset() {
        const that = this;
        const url="https://ntutsting.herokuapp.com/testAPI"
        this.setState({GameBoxList:[]})
        fetch(url, {
            method: 'post',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                type: 'type',
                state: 'release_state'
            })

        })
            .then(function (data) {
                return data.json()
            })
            .then(function (data) {
                let GameBoxLists = data.map((element) => 
                    <tr>
                    <td width="150px" align='center' className="bodyField">{element.name}</td>
                    <td width="150px" align='center' className="bodyField">{element.type}</td>
                    <td width="150px" align='center' className="bodyField">{element.price}</td>
                    {
                        element.state==1?(<td width="150px" align='center' className="bodyField">上架中</td>)
                        :((<td width="150px" align='center' className="bodyField">未上架</td>))
                    }
                    <td width="150px" align='center' className="bodyField">
                        <Link to={{pathname:"/changeGameData/editGame",state:{name:element.name,authorName:element.AuthorName,gameType:element.type,price:element.price,photo:element.photo,description:element.description,release_state:element.state}}}>
                            <Button variant="secondary" className="tableButton">編輯</Button>
                        </Link>
                    </td>
                </tr>
                )
                that.setState({
                    GameBoxList: [...that.state.GameBoxList, GameBoxLists]
                })
            })
            .catch(function (err) {
                console.log(err)
            })

    }
    //#endregion



    render() {
        if (this.props.contact.tableType === "manage") {
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
                            {this.state.ManageList}

                        </tbody>
                    </table>
                </div>
            );
        } else if (this.props.contact.tableType === "gameBox") {
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
                            {
                                this.state.GameBoxList
                            }
                        </tbody>
                    </table>
                </div>
            );
        } else if (this.props.contact.tableType === "orderRecoder") {
            return (
                <div className="gameTable">
                    <table>
                        <thead>
                            <tr className="tableHead">
                                <td width="150px" align='center' className="headField">訂單編號</td>
                                <td width="150px" align='center' className="headField">時間</td>
                                <td width="150px" align='center' className="headField">總價</td>
                                <td width="150px" align='center' className="headField">查看</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td width="150px" align='center' className="bodyField">106590017</td>
                                <td width="150px" align='center' className="bodyField">2019.12.8</td>
                                <td width="150px" align='center' className="bodyField">550</td>
                                <td width="150px" align='center' className="bodyField">
                                    <Button variant="danger" value={element.state}  className="tableButton">查看</Button>
                                </td>
                            </tr>

                            <tr>
                                <td width="150px" align='center' className="bodyField">106590028</td>
                                <td width="150px" align='center' className="bodyField">2020.3.6</td>
                                <td width="150px" align='center' className="bodyField">700</td>
                                <td width="150px" align='center' className="bodyField">
                                    <Button variant="danger" value={element.state} className="tableButton">查看</Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        } else if (this.props.contact.tableType === "Cart") {

            return (
                <div width="300px" align='center' className="bodyField">
                    <div className="gameTable">
                        <table>
                            <thead>
                                <tr className="tableHead">
                                    <td width="150px" align='center' className="headField">名稱</td>
                                    <td width="150px" align='center' className="headField">總類</td>
                                    <td width="150px" align='center' className="headField">價格</td>
                                    <td width="150px" align='center' className="headField">刪除</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.CartList
                                }
                            </tbody>
                        </table>
                    </div>
                    <Link to={{ pathname: "/orderPage", state: { id: "1561561", price: this.state.money, time: "拿後端", cartList: this.state.CartList } }} >
                        <Button style={{ backgroundColor: "green" }} className="Carttable" type="Submit">確認購買</Button>
                    </Link>
                </div>

            );
        }
    }
}

export default GameTable;