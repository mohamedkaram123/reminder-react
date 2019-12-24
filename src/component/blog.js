import React ,{Component} from "react";
import axios from 'axios';

class Blog extends Component{

	state = {

		users:[]
	}
	componentDidMount(){

		axios.get("https://jsonplaceholder.typicode.com/users")
		.then(res=>{

			
			this.setState({
				users:res.data
			})
			
		})

	}



render(){

	console.log(this.props);
const {users} =this.state;

	const f =(item)=>{
		return(
			<div key={item.id}>
			<div className="users">
				<p>name: {item.name}</p>
				<p>username: {item.username}</p>
				</div>
			</div>
		)
	}

	const userslist = users.map(f);
return(

<div>
<h2>Blog me</h2>
<p>{userslist}</p>
</div>


	)

}


}

export default Blog;
