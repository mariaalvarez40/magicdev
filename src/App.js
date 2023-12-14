import About from './components/about/about';
import Banner from './components/banner/banner';
import Contact from './components/contact/contact';
import Experience from './components/experience/experience';
import Footer from './components/footer/footer';
import Navigation from './components/navigation/navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />
      <About />
      <Experience />
      <Contact />
      <Footer year="2023" copyright="All Rights Reserved"/>
    </div>
  );
}

export default App;
