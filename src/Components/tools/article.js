import React from 'react'

class Article extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        var h4Style={
            paddingBottom:"10px",
            paddingTop:"40px"
        }
        
        var h4Style2={
            paddingTop:"20px"
        }

        if(this.props.contact.img==="no"){            //沒圖只有文
            return (
                <div>
                    <h4 style={h4Style}>{this.props.contact.title}</h4>
                    <div class="textContent">{this.props.contact.text}</div>
                </div>
            )
        }else if(this.props.contact.style===1){       //上圖下文(左圖右文)
            return (
                <div className="airtycleRow">
                    <div className="airtycleRow_partA">
                        <img style={{width:"100%"}} src={this.props.contact.img}/>
                    </div >
                    
                    <div className="airtycleRow_partB">
                        <h5 style={h4Style2}>{this.props.contact.title}</h5>
                        <div class="textContent" dangerouslySetInnerHTML={{__html: this.props.contact.text}}></div>
                    </div>                    
                </div>
            )
        }else if(this.props.contact.style===2){       //上圖下文(左文右圖)
            return (
                <div className="airtycleRow2">
                    <div className="airtycleRow_partC">
                        <img style={{width:"100%"}} src={this.props.contact.img}/>
                    </div >
                    
                    <div className="airtycleRow_partD">
                        <h4 style={h4Style2}>{this.props.contact.title}</h4>
                        <div class="textContent" dangerouslySetInnerHTML={{__html: this.props.contact.text}}></div>
                    </div>                    
                </div>
            )
        }else if(this.props.contact.style===3){       //上影片下文(左影片右文)
            return(
                <div className="videoRow2">
                    <div className="videoRow_part2">
                        <iframe src={this.props.contact.video}
                            scrolling="no" allowFullScreen="true" allowtransparency="true" class="video2"></iframe>
                    </div>

                    <div className="videoRowText">
                        <h4 style={h4Style}>{this.props.contact.title}</h4>
                        <div class="textContent" dangerouslySetInnerHTML={{__html: this.props.contact.text}}></div>
                    </div>
                </div>
            )
        }
    }
}

export default Article;