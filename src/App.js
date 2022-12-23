import FirstPage from './components/FirstPage';
// import Navbar from './components/Navbar';
import Nav from './components/Nav';
import Presentation from './components/Presentation';
import Projets from './components/Projets';
import SecondPage from './components/SecondPage';
import './sass/App.scss';
import Contact from './components/Contact';

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
        {/* <Navbar /> */}
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
  );
}

export default App;
