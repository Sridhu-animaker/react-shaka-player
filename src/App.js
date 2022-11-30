import './App.css';
import 'shaka-player/dist/controls.css';
import { VideoPlayer } from './components/VideoPlayer';
import CustomPlayer from './components/CustomPlayer';

function App() {
  return (
    <div className="App">
      <h2>React Shaka Video Player</h2>
      <div className="container">
        <VideoPlayer />

        <CustomPlayer />
      </div>
    </div>
  );
}

export default App;
