import {Add,Delete,Clear} from '../type';


export const Add_Remender=(text,date)=>{
    const action={
        type:Add,
        text,
        date
    }
    //console.log("Add",action)
    return action;
}

export const Delete_Reminder=(id)=>{

const action={
    type:Delete,
    id
}
return action;
}

export const Clear_Reminder=()=>{

    const action={
        type:Clear,
        
    }
    return action;
    }