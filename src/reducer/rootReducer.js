import {Add,Delete,Clear} from '../type';
import {bake_cookie,read_cookie} from 'sfcookies';
let riminders=[];
const riminder = (state=[],action)=>{
  state =read_cookie("reminders");

if(action.type === Add){
    riminders.push({text:action.text,date:action.date,id:Math.random()})
    bake_cookie('reminders',riminders);
    console.log(riminders[0])
    return riminders;
}else if(action.type === Delete){
    riminders = state.filter(reminder =>reminder.id !== action.id )
    bake_cookie('reminders',riminders);
    //console.log(action)
    return riminders
   
}else if(action.type === Clear){

    riminders=[]
    bake_cookie('reminders',riminders);
    return riminders
}
else{
    return state
}
    
}

export default riminder;