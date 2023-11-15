import { Component } from "react";

class Profile extends Component{
    constructor(){
        super();
        this.state = {
            counter: 0,
        };
        
    }
    increment(){
        this.setState({
            counter: this.state.counter + 1,
        })
    }
    decrement(){
        this.setState({
            counter: this.state.counter - 1,
        })
    }
    

    render(){
        
        const {test} = this.props
        return (<div>
             <h1>Count value: {this.state.counter} </h1>
             <button onClick={()=> this.increment()}>increment{test}</button>
             <button onClick={()=> this.decrement()}>decrement</button>
        </div>);
           
           
       
    }
}
  
  export default Profile;