import React from 'react';
import Capture from './Capture';
import sendData from './send';
import getData from './get';

class Camera extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            imgs: new Array()
        }
    }
    setImgs = (newImgs) => {
        // console.log(newImgs)
        // sendData({date:'2020-02-02',comment:'OlalaPapapa',place:'Vin',files:[JSON.stringify(newImgs)]})
        // getData((data)=>{console.log(data)});

        this.setState({
            imgs: newImgs
        })
    }
    render(){
        return(<Capture sentImg = {this.setImgs}/>)
    }
}

export default Camera;