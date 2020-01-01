import React from "react";
import { Form, Button, Col, Badge } from "react-bootstrap"
import "../../css/container排版.css"
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

class CreateGame extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: null,
            gameId: null,
            authorId: null,
            gameType: "精選推薦",
            price: null,
            photo: null,
            description: null,
            release_state: false,
            selectGameType: props.gameType,
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleInSubmit = this.handleInSubmit.bind(this)
    }

    handleInputChange(e) {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    changeGameType(e) {
        let gameType = e.target.value;
        if (!gameType) return;
        this.setState({
            selectGameType: gameType,
        });
    }

    handleInSubmit(e) {
        let url = 'http://localhost:9000/insert';
        fetch(url, {
            method: 'POST',
            // headers 加入 json 格式
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            // body 將 json 轉字串送出
            // body: JSON.stringify({
            //     email: this.state.Account,
            //     password: this.state.Password,
            // })
        }).then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data)
            if (data.err !== null) {
                // localStorage.setItem('token', data.token)
                // console.log(localStorage.getItem('token'))
            }
            else {
                throw data.err
            }
        }).catch((err) => {
            console.log('錯誤:', err);
        })

        console.log(`遊戲名稱：${this.state.name}`);
        console.log(`遊戲ID：${this.state.gameId}`);
        console.log(`製造商ID：${this.state.authorId}`);
        console.log(`遊戲種類：${this.state.selectGameType}`);
        console.log(`遊戲價錢：${this.state.price}`);
        console.log(`遊戲照片：${this.state.photo}`);
        console.log(`遊戲介紹：${this.state.description}`);
        console.log(`遊戲發布狀態：${this.state.release_state}`);
        this.props.history.push("/gameBox");
    }

    render() {
        var buttonStyle = {
            width: "100px",
            marginTop: "50px",
            marginBottom: "20px",
            marginRight: "10px",
            marginLeft: "10px"
        }

        var CenterStyle = {
            width: "100%",
            display: "flex",
            justifyContent: "center"
        }

        //接收遊戲庫的動作，可能是新增遊戲/編輯遊戲
        var gameChange = this.props.match.params;
        //接收該遊戲的發布狀態
        var isRelease = this.props.location.state.isRelease;
        return (
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <div className="Mycontainer">
                    {   //若這頁是新增遊戲頁面，顯示新增遊戲的標題，否則顯示編輯遊戲的標題
                        gameChange.action === "createNew"
                            ? (
                                <div className="TitleDiv" style={CenterStyle}>
                                    <h2 style={{ color: "white", paddingTop: "30px", paddingBottom: "30px" }}>新增遊戲：加入新遊戲到遊戲庫</h2>
                                </div>
                            ) : (
                                <div className="TitleDiv" style={CenterStyle}>
                                    {   //若該遊戲還沒上架，顯示未上架，否則顯示上架中
                                        isRelease === false
                                            ? <h2 style={{ color: "white", paddingTop: "30px", paddingBottom: "30px" }}>編輯遊戲：更改遊戲資料
                                        <Badge variant="danger">未上架</Badge>
                                            </h2>
                                            : <h2 style={{ color: "white", paddingTop: "30px", paddingBottom: "30px" }}>編輯遊戲：更改遊戲資料
                                        <Badge variant="success">上架中</Badge>
                                            </h2>
                                    }
                                </div>
                            )
                    }


                    <Form style={{ justifyContent: "center" }} onSubmit={this.handleInSubmit}>
                        <Form.Row style={{ justifyContent: "center" }}>
                            <Form.Group as={Col} md="4" >
                                <Form.Label className="FormText">遊戲名稱</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    placeholder="紫色恐怖"
                                    onChange={this.handleInputChange.bind(this)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group as={Col} md="4">
                                <Form.Label className="FormText">遊戲類型</Form.Label>
                                <div className="select-Box">
                                    <span>
                                        <select
                                            id="select-type"
                                            type="text"
                                            onChange={this.changeGameType.bind(this)}
                                            value={this.state.selectGameType}
                                            name="gameType"
                                        >
                                            <option>---種類---</option>
                                            <option value="精選推薦">精選推薦</option>
                                            <option value="休閒類型">休閒類型</option>
                                            <option value="冒險類型">冒險類型</option>
                                            <option value="競速類型">競速類型</option>
                                            <option value="策略類型">策略類型</option>
                                            <option value="運動類型">運動類型</option>
                                        </select>
                                    </span>
                                </div>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row style={{ justifyContent: "center" }}>

                            <Form.Group as={Col} md="4" >
                                <Form.Label className="FormText">遊戲ID</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="gameId"
                                    placeholder="123123"
                                    onChange={this.handleInputChange.bind(this)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4">
                                <Form.Label className="FormText">製造商ID</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="authorId"
                                    placeholder="456456"
                                    onChange={this.handleInputChange.bind(this)}
                                    required
                                />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row style={{ justifyContent: "center" }}>
                            <Form.Group as={Col} md="4" >
                                <Form.Label className="FormText">遊戲價格(NT)</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="price"
                                    placeholder="1000"
                                    onChange={this.handleInputChange.bind(this)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4" >
                                <Form.Label className="FormText">遊戲圖片(url)</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="photo"
                                    placeholder="https://xxxxxx.jpg"
                                    onChange={this.handleInputChange.bind(this)}
                                    required
                                />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row style={{ justifyContent: "center" }}>
                            <Form.Group as={Col} md="8">
                                <Form.Label className="FormText">遊戲介紹</Form.Label>
                                <div className="introduce-box" >
                                    <textarea className="TextAreaInput" ref="txt" maxlength="100" name="description" onChange={this.handleInputChange.bind(this)} placeholder="這遊戲真的好玩啦沒在蓋" />
                                </div>
                            </Form.Group>
                        </Form.Row>

                        {   //如果這頁是新增遊戲的頁面，顯示新增遊戲頁面的按鈕組，否則顯示編輯遊戲頁面的按鈕組
                            gameChange.action === "createNew"
                                ? (
                                    <div className="ButtonDiv" style={CenterStyle}>
                                        <Link to="/gameBox">
                                            <Button variant="danger" style={buttonStyle}>取消</Button>
                                        </Link>

                                        <Button variant="success" type="submit" style={buttonStyle}>新增</Button>
                                    </div>
                                )
                                : (
                                    <div className="ButtonDiv" style={CenterStyle}>
                                        <Link to="/gameBox">
                                            <Button variant="secondary" style={buttonStyle}>取消</Button>
                                        </Link>

                                        <Button variant="info" type="submit" style={buttonStyle}>更新</Button>

                                        {   //如果還沒上架，第三顆按鈕顯示上架，否則顯示下架
                                            isRelease === false
                                                ? <Button variant="success" type="submit" style={buttonStyle}>上架</Button>
                                                : <Button variant="danger" type="submit" style={buttonStyle}>下架</Button>
                                        }
                                    </div>
                                )
                        }
                    </Form>
                </div>
            </div>
        );
    }
}
export default CreateGame;