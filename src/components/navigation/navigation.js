import { Component } from "react";
import "../navigation/navigation.scss";
class Navigation extends Component {
  constructor(props) {
    super(props);

    this.scrollToSection = this.scrollToSection.bind(this);
  }
  
  scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
      window.scrollTo({
        behavior: 'smooth',
        top: section.offsetTop,
      });
      this.setState({ activeLink: sectionId });
    }
  }
 

  render(){
    // const { sectionRefs } = this.props;
    return (
    <nav className="navigation">
      <ul>
        <li><a href="/">home</a></li>
        <li><a href="#" onClick={() => this.scrollToSection('#section1')}>about</a></li>
        <li><a href="#" onClick={() => this.scrollToSection('#section2')}>experience</a></li>
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