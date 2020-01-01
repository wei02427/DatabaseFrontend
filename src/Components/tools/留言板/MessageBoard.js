import React from 'react';
import LiuList from './MessageList';
import LiuForm from './MessageInput';

class LiuApp extends React.Component{
    constructor(props){
        super(props);
        this.ids=0;
        this.state={todos:[]};
        this.addItem=this.addItem.bind(this);
        this.deleteItem=this.deleteItem.bind(this);
    }

    //刪除某個留言
    deleteItem(id){
    let newtodos=this.state.todos.filter((item)=>{
        //回傳沒有要刪除的所有留言
        return !(item.id === id)
    });


    //重新設定留言串
    this.setState({
        todos:newtodos
    });
    }

    //新增留言
    addItem(value){
        //若現在沒有留言，則id為0
        if(this.state.todos.length === 0)
            this.ids = 0;
        
        //新增一則留言
        this.state.todos.reverse();
        this.ids = this.ids + 1;
        this.state.todos.unshift(
        {
            id:this.ids ,
            text:value,
            time:(new Date()).toLocaleString(),
            done:0
        })
        this.state.todos.reverse();

        //重新設定留言串
        this.setState({
            todos:this.state.todos});
    }

render(){
    var gameId=this.props.contact.ID;
    return (
        <div className="MessageBoard">
            <div className="MessageTitle">
            <h2 className="MessageTitleText">評論區</h2>
            </div>

            <div className="MessageInputArea">
                <LiuForm addItem={this.addItem}/>    
            </div>

            <div>
            <LiuList deleteItem={this.deleteItem} data={this.state.todos}/>
            </div>
        </div> 
        );
    }
}
export default LiuApp;