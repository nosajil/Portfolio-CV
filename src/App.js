import FirstPage from './components/FirstPage';
import Nav from './components/Nav';
import Presentation from './components/Presentation';
import Projets from './components/Projets';
import Competences from './components/competences';
import './sass/App.scss';
import Contact from './components/Contact';
import { BrowserRouter } from 'react-router-dom';
import Particles from 'particlesjs';

const App = () => {
  window.onload = function() {Particles.init({
    selector: '.background',
    speed: .1,
    sizeVariations: 1,
    maxParticles: 10000,
    connectParticules: true,

    // color: ['#1B1464', '#404B69', '#5758BB'],
    color: ['#ffffff', '#898a8d', '#5758BB'],
    responsive: [{
      breakpoint: 768,
      options: {
        color: ['#ffffff', '#898a8d', '#5758BB'],
        connectParticules: true,
        maxParticles: 2500,
      }
    }]
    

  });
};

  return (
    <BrowserRouter>
      <div className="App">
          <Nav />
          <div className="body-wrapper">
              {/* <video autoPlay muted loop id="myVideo">
                <source src={`${process.env.PUBLIC_URL}/video/background_video2.mp4`}/>
              </video> */}
            <FirstPage />
            <Presentation />
            <Competences />
            <Projets />
            <Contact />
          </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
