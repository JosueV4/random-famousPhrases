import './index.css';
import { useState } from 'react';
import Phrase from './components/Phrase';
import phrases from './assets/phrases.json';
import backgrounds from './assets/background.json';

function App() {
  const [indexPhrase, setIndexPhrase] = useState(0);
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const changePhrase = () => {
    /* Background random image */
    const newBackgroundIndex = Math.floor(Math.random() * backgrounds.length);
    setBackgroundIndex(newBackgroundIndex);

    /* random Phrases  */
    const newPhrase = Math.floor(Math.random() * phrases.length);

    setIndexPhrase(newPhrase);
  };

  const backgroundImg = {
    backgroundImage: `url(${backgrounds[backgroundIndex].img})`,
  };

  return (
    <div className="App bg-cover bg-center min-h-full text-center" style={backgroundImg}>
      <h1 className="text-5xl	text-white pt-12 max-w-md  mx-auto">
        GALLETAS DE LA FORTUNA
      </h1>
      <Phrase phrase={phrases[indexPhrase]} changePhrase={changePhrase} />
    </div>
  );
}

export default App;
