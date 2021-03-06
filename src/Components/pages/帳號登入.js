import React from "react";
import { Form, Button, FormGroup, FormLabel } from "react-bootstrap"
import { Link } from "react-router-dom";
import { Divider } from "semantic-ui-react"
import "../../css/container排版.css"
import "../../css/Account登入排版.css"
import jwt_decode from 'jwt-decode';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Account: "",
            password: "",
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handInsubmit = this.handInsubmit.bind(this)
    }
    handleInputChange(e) {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }
    handInsubmit(e) {
        let url = 'https://ntutsting.herokuapp.com/login';
        fetch(url, {
            method: 'POST',
            // headers 加入 json 格式
            headers: {
                'Content-Type': 'application/json'
            },
            // body 將 json 轉字串送出
            body: JSON.stringify({
                email: this.state.Account,
                password: this.state.Password,
            })
        }).then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data)
            if (data.err !== null) {
                // console.log(jwt_decode(localStorage.getItem('token')).admin);
                localStorage.setItem('token', data.token);
                const decoded = jwt_decode(localStorage.getItem('token'));
                var logState = decoded.admin;
                if (logState === true)
                    this.props.changeLogState(true);
                else
                    this.props.changeLogState(false);

                this.props.history.push("/");
            }
            else {
                throw data.err
                console.log("密碼錯誤");
            }
        }).catch((err) => {
            console.log('錯誤:', err);

        })
        console.log(`輸入的帳號是: ${this.state.Account}`);
        console.log(`輸入的密碼是: ${this.state.password}`);
    }

    render() {
        return (
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <div className="Mycontainer">
                    <Form style={{ display: "flex", flexDirection: "column", alignItems: "center" }} onSubmit={this.handInsubmit}>

                        <Form.Group controlId="formBasicAccount" style={{ width: "25%", alignItems: "center" }}>
                            <Form.Label className="FormText">電子郵件:</Form.Label>
                            <Form.Control
                                type="Account"
                                name="Account"
                                minLength="8"
                                placeholder="E-mail"
                                onChange={this.handleInputChange.bind(this)}
                                required
                            />
                            <Form.Control.Feedback type="invalid" className="FormText">
                                Please enter your Account
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword" style={{ width: "25%", alignItems: "center" }} >
                            <Form.Label className="FormText">密碼</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                minLength="8"
                                placeholder="Password"
                                onChange={this.handleInputChange.bind(this)}
                                required
                            />
                            <Form.Control.Feedback type="invalid" className="FormText">
                                Please enter your password
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button variant="primary" type="Submit" >
                            Sign In
                        </Button>
                        <Divider className="divider"></Divider>
                        <FormGroup>
                            <FormLabel className="SignUp">沒有STING帳戶?</FormLabel>
                            <Button variant="primary" type="button" >
                                <Link className="FormText" to="/SignUp">
                                    Sign up
                                </Link>
                            </Button>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        );


    }
}
export default SignIn;
