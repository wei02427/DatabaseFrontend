import React from "react";
import { relative } from "path";
import '../../css/遊戲表格樣式.css'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Form from "react-bootstrap/FormControl";
import "../../css/container排版.css"
import { Checkbox } from "semantic-ui-react";
import { DH_UNABLE_TO_CHECK_GENERATOR } from "constants";
  
class GameTable extends React.Component{
    constructor(props){
        super(props);
        this.state={
            CartList:[],
            ManageList:[],
            GameBoxList:[],
            willBuyList:[],
            money:0,
        };
        this.handleCartReset=this.handleCartReset.bind(this);
        this.handleInputChange= this.handleInputChange.bind(this);
        this.deleteChecked = this.deleteChecked.bind(this);
        this.handleManageReset = this.handleManageReset.bind(this);
        this.handleReleaseDown = this.handleReleaseDown.bind(this);
        this.handleGameBoxReset = this.handleGameBoxReset.bind(this);
        this.handleManageReset();
        this.handleCartReset();
        this.handleGameBoxReset();
    }
    //#region 購物車相關
    handleCartReset(){          //購物車資料

        this.state.CartList=[];
        var NewCartGameId;
        
        var Cartitem={
            Game_id:NewCartGameId,
            Name:"魔物獵人",
            Type:"動作遊戲",
            Price:1800,
            checked:false,
        }
        this.state.CartList.push(Cartitem);

        Cartitem={
            Game_id:NewCartGameId,
            Name:"刺客教條:兄弟會",
            Type:"動作遊戲",
            Price:900,
            checked:false,
        }
        this.state.CartList.push(Cartitem);

        this.setState({CartList:this.state.CartList});
    }
    
    handleInputChange(event) {   //改變 CratItem的checked
        console.log("Game_id:"+event.target.id+" checked: "+event.target.checked);
        for(const each of this.state.CartList){
            if(each.Name == event.target.name){
                each.checked = event.target.checked;
                if(event.target.checked)
                {
                    let addList ={ID:event.target.Game_id,Check:event.target.checked};
                    this.state.willBuyList.push(addList)
                    console.log(addList)
                }
                else if(event.target.checked==false){
                    for(var i=0;i<willBuyList.length;i++){
                        if(willBuyList[i].ID ==event.target.Game_id){
                            this.state.CartList.splice(i,1);
                        }
                    }
                    console.log(addList)
                }
            }
            
        }
        this.setState({CartList:this.state.CartList});
      }

      deleteChecked(event){     //刪除CartItem
          
          for(var i=0;i<this.state.CartList.length;i++){
            console.log(`Delete ${this.state.CartList[i].checked}`);
              if(this.state.CartList[i].checked===true){
                
                  this.state.CartList.splice(i,1);
                  i--;
              }
          }

          this.setState({CartList:this.state.CartList});
      }
    //#endregion
    //#region 上架遊戲表相關
    handleManageReset(){          //上架遊戲中資料
        const that = this;

        let url="https://ntutsting.herokuapp.com/testAPI";
        fetch (url,{
            method: 'get',
            mode: 'cors',
        })
            .then(function (data) {
                console.log('callapi')
                return data.json()
        })
            .then(function(data){
                var Manageitem=data.map((element)=>
                        Game_id=element.gameID,
                        Name="刺客教條",
                        Type="冒險類型",
                        Price=element.price,
                        AuthorName="刺客大聯盟",
                        isRelease=element.state)
                that.setState({
                    ManageList:[...that.state.ManageList,Manageitem]
                })
        })
        .catch(function (err) {
            console.log(err)
        })

        /*this.state.ManageList=[];
        var Manageitem={
            Game_id:"8941",
            Name:"刺客教條",
            Type:"冒險類型",
            Price:777,
            AuthorName:"刺客大聯盟",
            isRelease:true
        }
        this.state.ManageList.push(Manageitem);

        Manageitem={
            Game_id:"2248",
            Name:"跑跑卡丁車",
            Type:"競速類型",
            Price:888,  
            AuthorName:"遊戲橘子",
            isRelease:true
        }
        this.state.ManageList.push(Manageitem);*/

        //this.setState({ManageList:this.state.ManageList});
    }

    handleReleaseDown(event){
        for(var i=0;i<this.state.ManageList.length;i++){
            if(this.state.ManageList[i].Game_id == event.target.value){
                this.state.ManageList[i].isRelease=false;
                this.state.ManageList.splice(i,1);
                i--;
            }
            
        }this.setState({ManageList:this.state.ManageList});
    }
        
    //#endregion
    //#region 所有可控的遊戲列表
        handleGameBoxReset(){
            this.state.GameBoxList=[];
            var GameBoxitem={
                Game_id:"7788",
                Name:"跑跑薑餅人",
                Type:"競速類型",
                Price:777,
                isRelease:false
            }
            this.state.GameBoxList.push(GameBoxitem);

            var GameBoxitem={
                Game_id:"8941",
                Name:"跑跑卡丁車",
                Type:"競速類型",
                Price:888,
                isRelease:true
            }
            this.state.GameBoxList.push(GameBoxitem);

            this.setState({GameBoxList:this.state.GameBoxList});
        }
    //#endregion

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
                            {
                            this.state.ManageList.map((Manageitem)=>
                                    <tr>
                                        <td width="150px" align='center' className="bodyField">{Manageitem.Name}</td>
                                        <td width="150px" align='center' className="bodyField">{Manageitem.Type}</td>
                                        <td width="150px" align='center' className="bodyField">{Manageitem.Price}</td>
                                        <td width="150px" align='center' className="bodyField">{Manageitem.AuthorName}</td>
                                        <td width="150px" align='center' className="bodyField">
                                            <Button variant="danger" value={Manageitem.Game_id} onClick={this.handleReleaseDown} className="tableButton">下架</Button>
                                        </td>
                                    </tr>
                                )
                            }   
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
                            {
                                this.state.GameBoxList.map((GameBoxitem)=>
                                        <tr>
                                            <td width="150px" align='center' className="bodyField">{GameBoxitem.Name}</td>
                                            <td width="150px" align='center' className="bodyField">{GameBoxitem.Type}</td>
                                            <td width="150px" align='center' className="bodyField">{GameBoxitem.Price}</td>
                                            {
                                                GameBoxitem.isRelease===true
                                                ? <td width="150px" align='center' className="bodyField">上架中</td>
                                                : <td width="150px" align='center' className="bodyField">未上架</td>
                                            }
                                            
                                            <td width="150px" align='center' className="bodyField">
                                            <Link to={{pathname:"/changeGameData/editGame",state:{isRelease:GameBoxitem.isRelease}}}>
                                                <Button variant="secondary" className="tableButton">編輯</Button>
                                            </Link>
                                            </td>
                                        </tr>
                                    )
                            }   
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
            <div width ="300px" align='center' className="bodyField">
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
                            {
                            this.state.CartList.map((Cartitem)=>
                                    <tr>
                                    <td width="150px" align='center' className="bodyField">
                                            <Checkbox
                                                id = {Cartitem.Game_id}
                                                name = {Cartitem.Name}
                                                onChange={this.handleInputChange}
                                                checked={Cartitem.checked}
                                                />
                                        </td>
                                        <td width="150px" align='center' className="bodyField">{Cartitem.Name}</td>
                                        <td width="150px" align='center' className="bodyField">{Cartitem.Type}</td>
                                        <td width="150px" align='center' className="bodyField">{Cartitem.Price}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>          
                <Button style={{backgroundColor:"red"}}  onClick={this.deleteChecked} className="Carttable" type="Button">刪除</Button>
                <Link  to ={{pathname:"/orderPage",state:{id:"1561561",price:this.state.money,time:"拿後端",cartList:this.state.CartList}}} >
                    <Button style={{backgroundColor:"green"}} className="Carttable" type="Submit">確認購買</Button>
                </Link>
            </div>
                
            );
        }
    }
}

export default GameTable;