import React,{Component} from 'react';
import "./item.css";


class Items extends Component{



	render(){




const {items} = this.props;

const f = (s) => {


return  ( 

<div className='test' key={Math.random()*10}>
<div>{s.id}</div>
<div>{s.name}</div>
<div>{s.age}</div>
<div>__________</div>
</div>
		)

}

const theitems =items.map(f);



		return(

<div>
<p>{theitems}</p>
</div>
			)
	}
}


export default Items;