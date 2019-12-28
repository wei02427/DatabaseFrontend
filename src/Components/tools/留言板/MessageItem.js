import React from 'react';
class LiuItem extends React.Component{
    delete(){
    this.props.deleteItem(this.props.data.id);
    }

    render(){
        let {text,time,done,id}=this.props.data;
        return (
            <tr className="MessageItem">
                <td width="150px" align='center' className="MessageUser">玩家{id}</td>
                <td width="771px" className="Message">{text}<br/>{time}</td>
                {/* <td><button onClick={this.delete.bind(this)}>刪除留言</button></td> */}
            </tr>
        );
    }
}
export default LiuItem;