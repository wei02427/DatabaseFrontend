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
        fetch ("https://ntutsting.herokuapp.com/testAPI",{
            method: 'get',
            mode: 'cors',
        })
            .then(function (data) {
                console.log('callapi')
                return data.json()
        })
            .then(function(data){
                let ManageLists=data.map((element)=>{
                    element.state===1?(
                        <tr>
                            <td width="150px" align='center' className="bodyField">element.name</td>
                            <td width="150px" align='center' className="bodyField">element.type</td>
                            <td width="150px" align='center' className="bodyField">{element.price}</td>
                            <td width="150px" align='center' className="bodyField">element.AuthorName</td>
                            <td width="150px" align='center' className="bodyField">
                                <Button variant="danger" value={element.state} className="tableButton">下架</Button>
                            </td>
                        </tr>)
                        :(console.log(`未上架`))
                    
                })
                    that.setState({
                         ManageList:[...that.state.ManageList,ManageLists]
                    })
        })
        .catch(function (err) {
            console.log(err)
        })
        
    }

    handleReleaseDown(event){   //刪除
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
     
            const that = this;
            fetch ("https://ntutsting.herokuapp.com/testAPI",{
                method: 'get',
                mode: 'cors',
            })
                .then(function (data) {
                    console.log('callapi')
                    return data.json()
            })
                .then(function(data){
                    let GameBoxLists=data.map((element)=>{
                        <tr>
                            <td width="150px" align='center' className="bodyField">element.Name</td>
                            <td width="150px" align='center' className="bodyField">element.Type</td>
                            <td width="150px" align='center' className="bodyField">{element.price}</td>
                            {
                                element.state===true
                                ? <td width="150px" align='center' className="bodyField">上架中</td>
                                : <td width="150px" align='center' className="bodyField">未上架</td>
                            }
                            
                            <td width="150px" align='center' className="bodyField">
                            <Link to={{pathname:"/changeGameData/editGame",state:{isRelease:element.state}}}>
                                <Button variant="secondary" className="tableButton">編輯</Button>
                            </Link>
                            </td>
                        </tr>
                    })
                        that.setState({
                            GameBoxList:[...that.state.GameBoxList,GameBoxLists]
                        })
            })
            .catch(function (err) {
                console.log(err)
            })




           /*var GameBoxitem={
                Game_id:"7788",
                Name:"跑跑薑餅人",
                Type:"競速類型",
                Price:777,
                isRelease:false
            }
            this.state.GameBoxList.push(GameBoxitem);*/

           
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
                            {this.state.ManageList}
                             
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
                               this.state.GameBoxList
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