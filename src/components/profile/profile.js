import { Component } from "react";

class Profile extends Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props);
        return (   
            <h1>{this.props.name} </h1>
        );
    }
}
  
  export default Profile;