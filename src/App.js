// import './App.css';
import Footer from './components/footer/footer';
import Navigation from './components/navigation/navigation';
import Profile from './components/profile/profile';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Profile test="fuck"/>
      <Footer year="2023" copyright="All Rights Reserved"/>
    </div>
  );
}

export default App;
