import React from "react";
import {Form,Button, Col, Row} from "react-bootstrap"
import Birthday from "../tools/DateSelect"
import DatePicker from "react-datepicker"
import "../../css/container排版.css"

import "react-datepicker/dist/react-datepicker.css";

class SignUp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Account:null,
            Password:null,
            Repeat:null,
            FirstName:"",
            SecondName:"",
            Phone:null,
            Email:"",
            creditNum:"",
            creditDate:"",
            creditCVC:"",
            creditUser:"",
            selectCard:props.card,
        }
    }

    handleInputChange(e){
        const { name, value } = e.target;
        
        this.setState({ [name]: value });
      }
      
    customValidator(control) {         
        console.log(this.state.value.password)
        return {isEqual: control.value == this.state.value.password}
      }

    selectCard(e){
        let card = e.target.value;
        this.setState({
            selectCard : card,
        });
    }

    render(){
        return(
            <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
                <div className="Mycontainer">
                    
                    <Form  style={{justifyContent:"center"}}>
                    <Form.Row>
                        <Form.Group as={Col} md="4" >
                            <Form.Label className="FormText">輸入帳號</Form.Label>
                                <Form.Control
                                   type="text" 
                                   name="Account"
                                   placeholder="Account" 
                                   minLength="8"
                                   maxLength="16"
                                   onChange={this.handleInputChange.bind(this)}
                                   required
                                />
                        </Form.Group>
                        <Form.Group as={Col} md="4">
                            <Form.Label className="FormText">輸入密碼</Form.Label>
                                <Form.Control
                                    type="password" 
                                    name="Password"
                                    placeholder="password" 
                                    minLength="8"
                                    maxLength="16"
                                    onChange={this.handleInputChange.bind(this)}
                                    required
                                />
                        </Form.Group>
                        <Form.Group as={Col} md="4" >
                            <Form.Label className="FormText">再輸入一次輸入密碼</Form.Label>
                                <Form.Control
                                   type="password" 
                                   name="Repeat"
                                   minLength="8"
                                   maxLength="16"
                                   placeholder="passwordAgain" 
                                   onChange={this.handleInputChange.bind(this)}
                                   onInput={this.customValidator.bind(this)}
                                   required
                                />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="4" >
                            <Form.Label className="FormText">姓</Form.Label>
                                <Form.Control
                                   type="name" 
                                   placeholder="First Name" 
                                   name="FirstName"
                                   onChange={this.handleInputChange.bind(this)}
                                   required
                                />
                        </Form.Group>
                        <Form.Group as={Col} md="4" >
                            <Form.Label className="FormText">名</Form.Label>
                                <Form.Control
                                   type="name" 
                                   placeholder="last Name" 
                                   name="SecondName"
                                   onChange={this.handleInputChange.bind(this)}
                                   required
                                />
                        </Form.Group>
                        <Form.Group as={Col} md="4">
                        <Form.Label className="FormText">Phone</Form.Label>
                                <Form.Control
                                   type="tel" 
                                   pattern="09+[0-9]{8}"
                                   name="phone"
                                   placeholder="09XXXXXXXX" 
                                   title="09XXXXXXXX"
                                   onChange={this.handleInputChange.bind(this)}
                                   required
                                />
                        </Form.Group>

                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="6">
                        <Form.Label className="FormText">Email</Form.Label>
                                <Form.Control
                                   type="Email" 
                                   name="Email"
                                   pattern="[a-zA-Z0-9]+@+gmail+.+com"
                                   placeholder="Ex:123456789@gmail.com" 
                                   title="請輸入gmail"
                                   required
                                />
                        </Form.Group>
                        <Form.Group as={Col} md="6">
                        <Form.Label className="FormText">地址</Form.Label>
                                <Form.Control
                                   type="Text" 
                                   placeholder="address" 
                                   required
                                />
                        </Form.Group>
                        
                    </Form.Row>
                    <Form.Row>
                        <Form.Group>
                            <Form.Label className="FormText">生日</Form.Label>
                            <Birthday/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as ={Col}>
                        <Form.Label className="FormText">信用卡</Form.Label>
                        <span>
                             <select
                                    id = "select-Card"
                                    onChange="selectCard"
                                    value={this.state.selectCard}
                                >
                                    <option value="VISA">VISA</option>
                                    <option value="JCP">JCP</option>
                                    <option value="MasterCard">MasterCard</option>
                            </select>
                        </span>
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as ={Col} md="4">
                            <Form.Control 
                                   type="text" 
                                   name="creditNum"
                                   pattern="[0-9]{16}"
                                   minLength="16"
                                   maxLength="16"
                                   placeholder="卡號" 
                                   required
                                />
                        </Form.Group>
                        <Form.Group as={Col} md="2">
                            <Form.Control 
                                   type="text" 
                                   name="creditCVC"
                                   pattern="[0-9]{3}"
                                   minLength="3"
                                   maxLength="3"
                                   placeholder="CVC" 
                                   required
                                />
                        </Form.Group>
                        <Form.Group as={Col} md="2">
                            <Form.Control 
                                   type="text" 
                                   name="creditDate"
                                   pattern="[0-9]{2}+/+[0-3]{1}+[0-9]{1}"
                                   placeholder="YY/MM" 
                                   required
                                />
                        </Form.Group>
                        <Form.Group as={Col} md="4">
                            <Form.Control md="4"
                                   type="text" 
                                   name="creditUser"
                                   placeholder="UserName" 
                                   required
                                />
                        </Form.Group>
                    </Form.Row>
                    <Button type="submit">送出</Button>
                    </Form>
                    
                </div>
            </div>
            

        );
    }
}
export default SignUp;