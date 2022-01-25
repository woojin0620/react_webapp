import React, { Component } from 'react';
import Listthumb from './listthumb';

class Gallery extends Component{
    constructor(props){
        super(props);
        this.state={
            imgfolder : this.props.propfolder,
        }
    }
   

    render(){
        return (
            <section id={this.props.propid} className='container-lg' >
                <div className='d-md-flex flex-row text-md-center'>
                        <h3 className=''>{this.props.proptitle}</h3>
                        <ul className='flex-grow-1 row m-0'>
                            <Listthumb col='col-md-12' colimg='1.png' imgsrcfolder={this.state.imgfolder}></Listthumb>                         
                            <Listthumb col='col-md-12' colimg='2.png' imgsrcfolder={this.state.imgfolder}></Listthumb>
                            <Listthumb col='col-md-12' colimg='3.png' imgsrcfolder={this.state.imgfolder}></Listthumb>
                            <dl>
                            <h2><img src='img/minicf.png' /> Coffee</h2>
                            </dl>
                            <Listthumb col='col-md-3' colimg='4.jpg' imgsrcfolder={this.state.imgfolder}></Listthumb>                          
                            <Listthumb col='col-md-3' colimg='5.jpg' imgsrcfolder={this.state.imgfolder}></Listthumb>
                            <Listthumb col='col-md-3' colimg='6.jpg' imgsrcfolder={this.state.imgfolder}></Listthumb>
                            <Listthumb col='col-md-3' colimg='7.jpg' imgsrcfolder={this.state.imgfolder}></Listthumb>
                        </ul>
                </div>
            </section>
            )
    }
 
}

export default Gallery;
