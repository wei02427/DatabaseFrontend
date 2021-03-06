import React from "react";
import { Form, Button, Col, Badge } from "react-bootstrap"
import "../../css/container排版.css"
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

class CreateGame extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            gameID: this.props.location.state.gameId,
            name: this.props.location.state.name,
            authorName: this.props.location.state.authorName,
            gameType: this.props.location.state.gameType,
            price: this.props.location.state.price,
            photo: this.props.location.state.photo,
            description: this.props.location.state.description,
            release_state: this.props.location.state.release_state,
            selectGameType: props.gameType,
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleInSubmit = this.handleInSubmit.bind(this)
        this.ChangeReleaseState = this.ChangeReleaseState.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    //若欄位值改變
    handleInputChange(e) {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }
    //若遊戲種類改變
    changeGameType(e) {
        let gameType = e.target.value;
        if (!gameType) return;
        this.setState({
            selectGameType: gameType,
        });
    }

    //改變release狀態
    ChangeReleaseState() {
        this.setState({
            release_state: !this.state.release_state
        });
    }

    handleInSubmit(e) {
        console.log(localStorage.getItem('token'))
        let url = 'https://ntutsting.herokuapp.com/insert';
        fetch(url, {
            method: 'POST',
            mode: 'cors',
            // headers 加入 json 格式
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }),
            //body 將 json 轉字串送出
            body: JSON.stringify({
                aid: this.state.authorName,
                name: this.state.name,
                type: this.state.gameType,
                price: this.state.price,
                photo: this.state.photo,
                description: this.state.description,
                time: new Date().getDate()
            })
        }).then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data)
            if (data.err !== null) {
                console.log(data.staus)
            }
            else {
                throw data.err
            }
        }).catch((err) => {
            console.log('錯誤:', err);
        })

        // console.log(`遊戲名稱：${this.state.name}`);
        // console.log(`遊戲ID：${this.state.gameId}`);
        // console.log(`製造商ID：${this.state.authorId}`);
        // console.log(`遊戲種類：${this.state.selectGameType}`);
        // console.log(`遊戲價錢：${this.state.price}`);
        // console.log(`遊戲照片：${this.state.photo}`);
        // console.log(`遊戲介紹：${this.state.description}`);
        // console.log(`遊戲發布狀態：${this.state.release_state}`);
        this.props.history.push("/gameBox");
    }

    handleChange(event) {
        console.log(localStorage.getItem('token'))
        let url = 'https://ntutsting.herokuapp.com/testAPI';
        fetch(url, {
            method: 'POST',
            mode: 'cors',
            // headers 加入 json 格式
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }),
            //body 將 json 轉字串送出
            body: JSON.stringify({
                gid: this.state.gameID,
                field: ['name', 'price', 'photo', 'description'],
                value: [this.state.name, this.state.price, this.state.photo, this.state.description]
            })
        }).then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data)
            if (data.err !== null) {
                console.log(data.staus)
            }
            else {
                throw data.err
            }
        }).catch((err) => {
            console.log('錯誤:', err);
        })
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
        var gameChange = this.props.match.params.action;
        console.log(`Action :${gameChange}`)
        //接收該遊戲的發布狀態
        var isRelease = this.props.location.state.isRelease;
        console.log(`Release : ${isRelease}`)
        return (
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <div className="Mycontainer">
                    {   //若這頁是新增遊戲頁面，顯示新增遊戲的標題，否則顯示編輯遊戲的標題
                        gameChange === "createNew"
                            ? (
                                <div className="TitleDiv" style={CenterStyle}>
                                    <h2 style={{ color: "white", paddingTop: "30px", paddingBottom: "30px" }}>新增遊戲：加入新遊戲到遊戲庫</h2>
                                </div>
                            ) : (
                                <div className="TitleDiv" style={CenterStyle}>
                                    {   //若該遊戲還沒上架，顯示未上架，否則顯示上架中
                                        this.state.release_state == 0
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
                                {
                                    gameChange === "createNew"
                                        ? <Form.Control type="text" name="name" placeholder="紫色恐怖" onChange={this.handleInputChange.bind(this)} required />
                                        : <Form.Control defaultValue={this.state.name} type="text" name="name" placeholder="紫色恐怖" onChange={this.handleInputChange.bind(this)} required />
                                }
                            </Form.Group>

                            <Form.Group as={Col} md="4">
                                <Form.Label className="FormText">遊戲類型</Form.Label>
                                <div className="select-Box">
                                    <span>
                                        {
                                            gameChange === "createNew"
                                                ? (
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
                                                ) : (
                                                    <select
                                                        id="select-type"
                                                        type="text"
                                                        onChange={this.changeGameType.bind(this)}
                                                        value={this.state.gameType}
                                                        name="gameType"
                                                        defaultValue={this.state.gameType}
                                                    >
                                                        <option>---種類---</option>
                                                        <option value="精選推薦">精選推薦</option>
                                                        <option value="休閒類型">休閒類型</option>
                                                        <option value="冒險類型">冒險類型</option>
                                                        <option value="競速類型">競速類型</option>
                                                        <option value="策略類型">策略類型</option>
                                                        <option value="運動類型">運動類型</option>
                                                    </select>
                                                )
                                        }
                                    </span>
                                </div>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row style={{ justifyContent: "center" }}>
                            <Form.Group as={Col} md="4">
                                <Form.Label className="FormText">製造商名稱</Form.Label>
                                {
                                    gameChange === "createNew"
                                        ? <Form.Control type="text" name="authorName" placeholder="遊戲橘子" onChange={this.handleInputChange.bind(this)} required />
                                        : <Form.Control defaultValue={this.state.authorName} type="text" name="authorName" onChange={this.handleInputChange.bind(this)} required readOnly />
                                }
                            </Form.Group>
                            <Form.Group as={Col} md="4" >
                            </Form.Group>
                        </Form.Row>

                        <Form.Row style={{ justifyContent: "center" }}>
                            <Form.Group as={Col} md="4" >
                                <Form.Label className="FormText">遊戲價格(NT)</Form.Label>
                                {
                                    gameChange === "createNew"
                                        ? <Form.Control type="text" name="price" placeholder="1000" onChange={this.handleInputChange.bind(this)} required />
                                        : <Form.Control defaultValue={this.state.price} type="text" name="price" placeholder="1000" onChange={this.handleInputChange.bind(this)} required />
                                }
                            </Form.Group>
                            <Form.Group as={Col} md="4" >
                                <Form.Label className="FormText">遊戲圖片(url)</Form.Label>
                                {
                                    gameChange=== "createNew"
                                        ? <Form.Control type="text" name="photo" placeholder="https://xxxxxx.jpg" onChange={this.handleInputChange.bind(this)} required />
                                        : <Form.Control defaultValue={this.state.photo} type="text" name="photo" placeholder="https://xxxxxx.jpg" onChange={this.handleInputChange.bind(this)} required />
                                }
                            </Form.Group>
                        </Form.Row>

                        <Form.Row style={{ justifyContent: "center" }}>
                            <Form.Group as={Col} md="8">
                                <Form.Label className="FormText">遊戲介紹</Form.Label>
                                <div className="introduce-box" >
                                    {
                                        gameChange === "createNew"
                                            ? <textarea className="TextAreaInput" ref="txt" maxlength="100" name="description" onChange={this.handleInputChange.bind(this)} placeholder="這遊戲真的好玩啦沒在蓋" />
                                            : <textarea className="TextAreaInput" defaultValue={this.state.description} ref="txt" maxlength="100" name="description" onChange={this.handleInputChange.bind(this)} placeholder="這遊戲真的好玩啦沒在蓋" />
                                    }

                                </div>
                            </Form.Group>
                        </Form.Row>

                        {   //如果這頁是新增遊戲的頁面，顯示新增遊戲頁面的按鈕組，否則顯示編輯遊戲頁面的按鈕組
                            gameChange === "createNew"
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

                                        <Button variant="info" type="button" onClick={this.handleChange} style={buttonStyle}>更新</Button>

                                        {   //如果還沒上架，第三顆按鈕顯示上架，否則顯示下架
                                            this.state.release_state == 0
                                                ? <Button variant="success" onClick={this.ChangeReleaseState} style={buttonStyle}>上架</Button>
                                                : <Button variant="danger" onClick={this.ChangeReleaseState} style={buttonStyle}>下架</Button>
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