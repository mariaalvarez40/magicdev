import { Component } from "react";

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
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
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