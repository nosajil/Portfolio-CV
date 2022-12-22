import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirstPage from './components/FirstPage';
import Navbar from './components/Navbar';
import Presentation from './components/Presentation';
import Projets from './components/Projets';
import SecondPage from './components/SecondPage';
import Slider from './components/Slider';
import './sass/App.scss';
import Form from './components/Form';

const App = () => {
  return (
    // <BrowserRouter>
    //     <div className="App">
    //       <Navbar />
    //       <div className="contenu">
    //       <Routes>
    //         <Route path={'/'} element={<FirstPage/>}/>

    //         <Route path={'/presentation'} element={<SecondPage/>}/>

    //       </Routes>
    //       </div>
    //     </div>
    // </BrowserRouter>
    <div className="App">
        <Navbar />
        <div className="body-wrapper">
            <video autoPlay muted loop id="myVideo">
              <source src={`${process.env.PUBLIC_URL}/video/background_video2.mp4`}/>
            </video>
          <FirstPage />
          <Presentation />
          <SecondPage />
          <Projets />
          <Form />
        </div>
    </div>
  );
}

export default App;
