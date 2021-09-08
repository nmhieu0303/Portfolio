import './App.css';
import Education from './containers/Education';
import Experience from './containers/Experience';
import Greetings from './containers/Greetings';
import Profile from './containers/Profile';
import Projects from './containers/Projects';
import Skills from './containers/Skills';

function App() {
  return (
    <div className="App">
      <Greetings/>
      <Skills/>
      <Education/>
      <Experience/>
      <Projects/>
      <Profile/>
    </div>
  );
}

export default App;
