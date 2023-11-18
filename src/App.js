import About from './components/about/about';
import Contact from './components/contact/contact';
import Experience from './components/experience/experience';
import Footer from './components/footer/footer';
import Navigation from './components/navigation/navigation';
import Profile from './components/profile/profile';


function App() {
  return (
    <div className="App">
      <Navigation />
      <About />
      <Experience />
      <Contact />
      <Profile/>
      <Footer year="2023" copyright="All Rights Reserved"/>
    
    </div>
  );
}

export default App;
