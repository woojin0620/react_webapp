import Navi  from './nav';
import Carousel from './carousel';
import Gallery from './gallery';
import './main.css'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navi></Navi>
        <Carousel></Carousel>
        <Gallery propid='gallery' proptitle='' propfolder='gallery'></Gallery>
      </header>
    </div>
  );
}

export default App;
