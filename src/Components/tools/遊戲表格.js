import React from "react";
import { relative } from "path";
import '../../css/遊戲表格樣式.css'
import Button from 'react-bootstrap/Button';
  
class GameTable extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
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
                                <Button variant="danger" className="dowmButton">下架</Button>
                            </td>
                        </tr>

                        <tr>
                            <td width="150px" align='center' className="bodyField">跑跑卡丁車</td>
                            <td width="150px" align='center' className="bodyField">競速類型</td>
                            <td width="150px" align='center' className="bodyField">888</td>
                            <td width="150px" align='center' className="bodyField">遊戲橘子</td>
                            <td width="150px" align='center' className="bodyField">
                                <Button variant="danger" className="dowmButton">下架</Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default GameTable;