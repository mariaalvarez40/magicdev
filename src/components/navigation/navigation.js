import { Component } from "react";
import "../navigation/navigation.scss";



class Navigation extends Component {

  // constructor(props){
  //   super(props);
  //   this.state = {property: 'load'};
  //   this.handleClick = this.handleClick.bind(this);
  // }

  
  render(){
    return (
    //   <div>
    //   <button onClick={this.handleClick}>Click me!</button>
    //   <div>{this.state.property}</div>
     
    // </div>
    <nav className="navigation">
      <ul>
        <li><a href="/">home</a></li>
        <li><a href="/about">about</a></li>
        <li><a href="/services">expertise</a></li>
        <li><a href="/contact">contact</a></li>
      </ul>
  </nav>

    );
  }
//   handleClick() {
//     this.setState({property: 'clicked'});
//  }
}
export default Navigation; 


// Example of Functional Component 
  // function NavBar(){
  //   return (
  //     <div className="navBar">
  //       <p className="text-3xl font-bold underline"> Top</p>
  //     </div>
  //   );
  // }
  // export default NavBar; 