import FirstPage from './components/FirstPage';
import Nav from './components/Nav';
import Presentation from './components/Presentation';
import Projets from './components/Projets';
import SecondPage from './components/SecondPage';
import './sass/App.scss';
import Contact from './components/Contact';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
          <Nav />
          <div className="body-wrapper">
              <video autoPlay muted loop id="myVideo">
                <source src={`${process.env.PUBLIC_URL}/video/background_video2.mp4`}/>
              </video>
            <FirstPage />
            <Presentation />
            <SecondPage />
            <Projets />
            <Contact />
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
