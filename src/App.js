import React, { Component } from 'react';

import {Add_Remender,Delete_Reminder,Clear_Reminder} from './action creator/index';
import {connect} from 'react-redux';
import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



//import {connect} from 'react-redux';
//import Child from "./child";
//import Items from "./component/item";
//import Home from "./component/Home";
//import About from "./component/About";
//import Nav from "./component/Nav";
//import {BrowserRouter ,Route ,Switch} from 'react-router-dom';
//import Blog from "./component/blog";
//import Routee from "./component/route";
//import Col from "./component/col";
//stateful component
//store data
import theimg from '../r2.png';


class App extends Component {

state={
  text:'',
  date:''
}

 rmenderlist=()=>{

  const {remenders} = this.props;

  const f =(item)=>{
   
    return(
      <div key={item.id} className="list">
              <button className='btn btn-danger bt' onClick={()=>this.props.Delete_Reminder(item.id)}><span className='x'>x</span></button>
        <div className="font"  ><span>{item.text}</span></div>
        <div className="font" ref={(date)=>{this.datename= date}}>{moment(new Date(item.date)).fromNow()}</div>
       
        
      </div>
    )
  }


  const listitem = remenders.map(f);
return listitem;

}

render() {

  console.log(this.props)
    return (
<div className='App'>
<div>


  
  <img src={theimg} className='img'/>
  <h2>what sould you do? </h2>
</div>
<input type='text'  className='form-control' value={this.state.text} ref={(input)=>{this.textname= input}} onChange={(e)=>{this.setState({text:e.target.value})


}}/>
<DatePicker
className='form-control'

ref={(date)=>{this.datename1= date}}
value={this.state.date}
      selected={this.state.date}
      onChange={date => {this.setState({date})}}
      showTimeSelect
      timeFormat="HH:mm"
      timeCaption="time"
      dateFormat="MMMM d, yyyy h:mm aa"
    />
<button ref={(button)=>{this.buttonname= button}} className='btn btn-primary btn-block' onClick={()=>{

  if(this.textname.value ===""){
   

   // console.log("text");
  }else if(this.datename1.props.value === ""){
   // console.log("date");

  }

  else{ 
    
   // console.log("yes");
   this.props.Add_Remender(this.state.text,this.state.date)
this.setState({text:'',date:''})

}}}>AddReminder</button>
{this.rmenderlist()}
<button className='btn btn-danger btn-block' onClick={()=>this.props.Clear_Reminder()}>ClearReminder</button>

</div>


    );
    
  }
}

/*const mydispatch = (dispatch)=>{
  return{
    Add:()=>dispatch(Add_Remender())
  }
}
/*const myprops = (state)=>{
  return {
    count:state.count
  }
} 

const action1 ={type:'increase'};
const action2 ={type:'decrease'};

const myaction=(dispatch)=>{
  return{
    increase:()=>dispatch(action1),
    decrease:()=>dispatch(action2)
  }
}
*/
const remendres =(state)=>{
  
  return{
    remenders:state
  }
}


export default connect(remendres,{Add_Remender,Delete_Reminder,Clear_Reminder})(App);