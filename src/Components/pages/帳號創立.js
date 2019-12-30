import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap"
import Birthday from "../tools/DateSelect"
import DatePicker from "react-datepicker"
import "../../css/container排版.css"


import "react-datepicker/dist/react-datepicker.css";

class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Account: null,
            Password: null,
            identity: "0",
            FirstName: "",
            SecondName: "",
            Phone: null,
            Email: "",
            Address: "",
            card: "VISA",
            creditNum: "",
            creditDate: "",
            creditCVC: "",
            creditUser: "",
            selectCard: props.card,
            selectidentity: props.identity,
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handInsubmit = this.handInsubmit.bind(this)
    }

    handleInputChange(e) {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    handInsubmit(e) {
        let url = 'http://localhost:9000/register';
        fetch(url, {
            method: 'POST',
            // headers 加入 json 格式
            headers: {
                'Content-Type': 'application/json'
            },
            // body 將 json 轉字串送出
            body: JSON.stringify({
                fname: this.state.FirstName,
                lname: this.state.SecondName,
                email: this.state.Email,
                phone: this.state.Phone,
                password: this.state.Password,
                credit: this.state.creditNum,
                birthday: '1999-5-5',
                address: this.state.Address,
                account: this.state.Account
            })
        }).then((response) => {
            return response.json();
        }).then((data) => {
            localStorage.setItem('token', data.token)
            console.log(localStorage.getItem('token'))
        }).catch((err) => {
            console.log('錯誤:', err);
        })
        // fetch('http://localhost:9000/register', {
        //     method: 'post',
        //     //mode: 'cors',
        //     headers:{
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(
        //         fname = this.state.FirstName,
        //         lname = this.state.SecondName,
        //         email = this.state.Email,
        //         phone = this.state.Phone,
        //         password = this.state.Password,
        //         credit = this.state.creditNum,
        //         birthday = '1999-5-5',
        //         address = this.state.Address,
        //         account = this.state.Account
        //     )

        // })
        //     .then(function (data) {
        //         return data.json()
        //     })
        //     .then(function (data) {
        //         localStorage.setItem('token', data.token)
        //         console.log(localStorage.getItem('token'))
        //     })
        //     .catch(function (err) {
        //         console.log(err)
        //     })

        console.log(`輸入的帳號是: ${this.state.Account}`);
        console.log(`輸入的密碼是: ${this.state.Password}`);
        console.log(`輸入的身分是: ${this.state.selectidentity}`);
        console.log(`輸入的姓是: ${this.state.FirstName}`);
        console.log(`輸入的名是: ${this.state.SecondName}`);
        console.log(`輸入的地址是: ${this.state.Address}`);
        console.log(`輸入的電話是: ${this.state.Phone}`);
        console.log(`輸入的EMAIL是: ${this.state.Email}`);
        console.log(`輸入的卡類是: ${this.state.selectCard}`)
        console.log(`輸入的卡號是: ${this.state.creditNum}`);
        console.log(`輸入的卡期是: ${this.state.creditDate}`);
        console.log(`輸入的CVC是: ${this.state.creditCVC}`);
        console.log(`輸入的卡主是: ${this.state.creditUser}`);
        this.props.history.push("/SignIn");
    }

    changeCard(e) {
        let card = e.target.value;
        if (!card) return;
        this.setState({
            selectCard: card,
        });
    }
    changeidentity(e) {
        let identity = e.target.value;
        if (!identity) return;
        this.setState({
            selectidentity: identity,
        });
    }

    render() {
        return (
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <div className="Mycontainer">

                    <Form style={{ justifyContent: "center" }} onSubmit={this.handInsubmit}>
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
                            <Form.Group as={Col} md="4">
                                <Form.Label className="FormText">選擇您的身分</Form.Label>
                                <div class="select-box">
                                    <span>
                                        <select
                                            onChange={this.changeidentity.bind(this)}
                                            id="Identity"
                                            type="Text"
                                            name="identity"
                                            value={this.state.selectidentity}

                                        >
                                            <option>--身分--</option>
                                            <option value="1">一般使用者</option>
                                            <option value="2">管理者</option>
                                        </select>
                                    </span>
                                </div>
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
                                    name="Phone"
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
                                    onChange={this.handleInputChange.bind(this)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="6">
                                <Form.Label className="FormText">地址</Form.Label>
                                <Form.Control
                                    type="Text"
                                    placeholder="address"
                                    name="Address"
                                    onChange={this.handleInputChange.bind(this)}
                                    required
                                />
                            </Form.Group>

                        </Form.Row>
                        <Form.Row>
                            <Form.Group>
                                <Form.Label className="FormText">生日</Form.Label>
                                <Birthday />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label className="FormText">信用卡</Form.Label>
                                <div class="select-box">
                                    <span>
                                        <select
                                            onChange={this.changeCard.bind(this)}
                                            id="select-Card"
                                            type="Text"
                                            name="card"
                                            value={this.state.selectCard}
                                        >
                                            <option>--卡類--</option>
                                            <option value="VISA">VISA</option>
                                            <option value="JCP">JCP</option>
                                            <option value="MasterCard">MasterCard</option>
                                        </select>
                                    </span>
                                </div>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="4">
                                <Form.Control
                                    type="text"
                                    name="creditNum"
                                    pattern="[0-9]{16}"
                                    minLength="16"
                                    maxLength="16"
                                    placeholder="卡號"
                                    onChange={this.handleInputChange.bind(this)}
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
                                    onChange={this.handleInputChange.bind(this)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="2">
                                <Form.Control
                                    type="text"
                                    name="creditDate"
                                    pattern="[0-9]{2}+/+[0-9]{2}"
                                    onChange={this.handleInputChange.bind(this)}
                                    placeholder="YY/MM"
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4">
                                <Form.Control md="4"
                                    type="text"
                                    name="creditUser"
                                    placeholder="UserName"
                                    onChange={this.handleInputChange.bind(this)}
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