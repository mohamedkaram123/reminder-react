import React, { Component ,Fragment} from 'react';


class Col extends Component {




  render() {
    console.log("im render");
    return (

   <Fragment>
       <td>test1</td>
       <td>test2</td>
   </Fragment>

    );
  }
}

export default Col;