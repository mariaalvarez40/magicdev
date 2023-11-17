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
        behavior: 'instant',
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
        <li>Logo</li>
        <li><button onClick={() => this.scrollToSection('#section1')}>about</button></li>
        <li><button onClick={() => this.scrollToSection('#section2')}>experience</button></li>
        <li><button onClick={() => this.scrollToSection('#section3')}>contact</button></li>
      </ul>
  </nav>

    );
  }

}
export default Navigation; 
