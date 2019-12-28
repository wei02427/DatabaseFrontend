import React from 'react';
import Button from 'react-bootstrap/Button';
class LiuForm extends React.Component{
    tijiao(event){
    event.preventDefault();
    }

    add(event){
        if(event.type==="keyup"&&event.keyCode!==13){
        return false;
        }

        let txt=this.refs.txt.value;
        if(txt==="") return false;
        this.props.addItem(txt);
        this.refs.txt.value="";
    }

    render(){
        var style={
            width:"100%",
            height:"100%",
            display:"flex",
            alignItems:"center"
        }

        return(
            <form style={{width:"100%",height:"100%"}} onSubmit={this.tijiao.bind(this)}>
                <div style={style}>
                        <textarea className="MessageInput" ref="txt" maxlength="100" onKeyUp={this.add.bind(this)} placeholder="撰寫新評論，最多100字"/>
                        <Button className="InputButton" variant="secondary" onClick={this.add.bind(this)}>發佈</Button>
                </div>
            </form>
        );
    }
}
export default LiuForm;