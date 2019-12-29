import React from "react";
import {Form,Button, FormGroup, FormLabel} from "react-bootstrap"
import {Link}  from "react-router-dom";
import {Divider} from "semantic-ui-react"
import "../../css/container排版.css"
import "../../css/Account登入排版.css"


class SignIn extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
                <div className="Mycontainer">
                    <Form style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                        
                        <Form.Group controlId="formBasicAccount"style={{width:"25%",alignItems:"center"}}>
                        <Form.Label className="FormText">帳戶名稱:</Form.Label>
                            <Form.Control 
                                type="Account" 
                                placeholder="Account" 
                                required    
                            />
                            <Form.Control.Feedback type="invalid" className="FormText">
                                Please enter your Account
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword"style={{width:"25%",alignItems:"center"}} >
                        <Form.Label className="FormText">密碼</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Password" 
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
                                <Link className="FormText" to ="/signUp">Sign up</Link>
                            </Button>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        );
            
        
    }
}
export default SignIn;
