import React from 'react';
import Button from '../components/Button';
import img from '../assets/bg-p.png';

const Phrase = ({ phrase, changePhrase }) => {
  return (
    <section className="text-2xl mt-16">
      <div
        className="w-11/12 h-64 mx-auto flex justify-center items-center px-10 bg-center bg-no-repeat bg-[length:500px] md:bg-[length:650px]"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <p className="px-14 text-lg min-w-96 md:w-10/12 md:px-10 lg:w-6/12 lg:px-0">
          {phrase.quote}
        </p>
      </div>
      <div>
        <Button handleClick={changePhrase} />
      </div>
      <p className="mt-16 bg-white bg-opacity-40 w-full px-3 py-2 mx-auto">
        Fuente: {phrase.author}
      </p>
    </section>
  );
};

export default Phrase;
