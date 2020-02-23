import React,{Component,useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddMapMarker from './addMarker';
import '../../styles/formstyles.css';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

const styledField = {
    width: '100%',
    borderColor: '#209bed'
};

const styledDataTime = {
    width: '97%',
    borderColor: '#209bed',
    marginLeft: '1.4%'
}

const buttonStyle = {
    width: '100%',
    background: '#209bed',
    color: 'white'
};


export default class AddPlace extends Component{
    constructor(props){
        super(props)
        this.state = {
            imgData: '',
            number: '',
            markerPosition: {
                lat: this.props.lat,
                lng: this.props.lng
              },
            comment: '',
            dataTime: ''
        };
    }

    handleSubmit = e => {
        let data = {
            imgData: '',
            number: document.querySelector('#outlined-basic').value,
            comment: document.querySelector('#outlined-multiline-static').value,
            markerPosition: {
                lat: document.querySelector('#x').textContent,
                lng: document.querySelector('#y').textContent,
            },
            number: document.querySelector('#date').value
        }
        console.log(data)
    };


    handleChange = e => {
        e.preventDefault();
        const {name, value} = e.target;
        switch(name) {
            case 'Number':
                this.setState({number: value});
                break;
            case 'Comment':
                this.setState({comment: value});    
                break;
            case 'DateTime':
                this.setState({dataTime: value});
                break;
        }
    }


    render(){
        return(
            <div className = './formBlock'>
                <form onSubmit = {this.handleSubmit} onChange = {this.handleChange} noValidate>                   
                        <AddMarker setMarkerPosition = {(position) =>{this.setState({markerPosition:position})}}/>
                    <div className = 'rightBox'>
                        <MaterialUIPickers name = 'DataTime' onChange = {this.handleChange}/>
                        <Number name = 'Number' onChange = {this.handleChange} placeholder = 'Number' onChange = {this.handleChange}/>
                        <Comment name = 'Comment' onChange = {this.handleChange} placeholder = '' onChange = {this.handleChange}/>
                        <CostumedButton onSubmit = {this.handleSubmit} />
                    </div>       
                </form>
            </div>
        )
    }

}

const Number = props => (
    <div className = 'Field'>
        <TextField 
            name = {props.name}
            onChange = {props.onChange}
            style={styledField}
            id="outlined-basic" 
            label={`${props.placeholder}`} 
            variant="outlined" 
        />
    </div>
);

const Comment = props => (
    <div className = 'Field'>
        <TextField
            name = {props.name}
            onChange = {props.onChange}
            style={styledField}
            id="outlined-multiline-static"
            label="Comment"
            multiline
            rows="17"
            defaultValue={`${props.placeholder}`}
            variant="outlined"
        />
    </div>
    );
  
const CostumedButton = props => (
    <div className = 'Field'>
        <Button 
        style={buttonStyle}
         variant="contained"
         onClick = {props.onSubmit}
         >
             submit
        </Button>
    </div>

)

const AddMarker = props => (
    <AddMapMarker/>
);

function MaterialUIPickers(props) {
    // The first commit of Material-UI
    const [selectedDate, handleDateChange] = useState(new Date());
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DateTimePicker 
      id = 'date'
      name = {props.name}
      onChange = {props.onChange}
      style = {styledDataTime} 
      value={selectedDate} 
      onChange={handleDateChange} />
    </MuiPickersUtilsProvider>
  );
  }