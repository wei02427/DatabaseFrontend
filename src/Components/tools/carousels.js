import React from "react";
import {Link}  from "react-router-dom";
import '../../css/carouselStyle.css';
import {Carousel} from 'react-bootstrap';
import ImgMain from '../../img/投影封面.jpg';

class Carousels extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){   
        return (
            <div className="CarouselControler">
                <Carousel fade={true}>
                    <Carousel.Item>
                        <div className="image" style={{backgroundImage: "url("+ImgMain+")"}}></div>
                    </Carousel.Item>

                    {/* <Carousel.Item>
                        <Link className="linkText" style={{marginLeft:"0"}} to="/signup/online">
                            <div className="image" style={{backgroundImage: "url("+ImgMain2+")"}}></div>
                        </Link>
                    </Carousel.Item> */}
                </Carousel> 
            </div>
        );
    }
}

export default Carousels;