import React from 'react';
import LiuItem from './MessageItem';
class LiuList extends React.Component{
    render(){
        let todos=this.props.data;
        let todoItems=todos.map(item=>{
        return <LiuItem deleteItem={this.props.deleteItem} key={item.id} data={item}/>
        });

        return (
        <table className="MessageList">
            <tbody className="MessageItems">
                {todoItems}
            </tbody>
        </table>
        );
    }
}
export default LiuList;