import logo from './logo.svg';
import './App.css';
import Random from './Random';
import Tag from './Tag';

function App() {
  return (
    <div className="flex flex-col background">
      <h1 className= "heading">RANDOM GIFS</h1>

      <div className="flex flex-col items-center">
        <Random />
        <Tag />
      </div>

    </div>
  );
}

export default App;
