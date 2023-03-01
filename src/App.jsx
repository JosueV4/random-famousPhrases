import './index.css';
import { useState } from 'react';
import Phrase from './components/Phrase';
import phrases from './assets/phrases.json';
import backgrounds from './assets/background.json';
import { getRandomNumber as random } from './utils/getRandom';

function App() {
  const [indexPhrase, setIndexPhrase] = useState(random(0, phrases.length - 1));
  const [backgroundIndex, setBackgroundIndex] = useState(
    random(0, backgrounds.length - 1),
  );

  const changePhrase = () => {
    /* Background random image */
    let newBackgroundIndex = random(0, backgrounds.length - 1);
    while (newBackgroundIndex === backgroundIndex) {
      newBackgroundIndex = random(0, backgrounds.length - 1);
    }
    setBackgroundIndex(newBackgroundIndex);

    /* random Phrases  */
    let newPhrase = random(0, phrases.length - 1);
    while (newPhrase === indexPhrase) {
      newPhrase = random(0, phrases.length - 1);
    }
    setIndexPhrase(newPhrase);
  };

  /* Background images */
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
