import { useState } from "react";
import memesData from "../../public/memesData";

const Meme = () => {
  const [memeImage, setMemeImage] = useState("");

  const getImage = () => {
    const randomIndex = Math.floor(Math.random() * memesData.data.memes.length);
    setMemeImage(memesData.data.memes[randomIndex].url);
  };

  return (
    <main>
      <div className="form">
        <div className="container">
          <div className="input-text">
            <label htmlFor="top-text">Top text</label>
            <input
              id="top-text"
              type="text"
              className="form-input"
              placeholder="Shut up"
            ></input>
          </div>
          <div className="input-text">
            <label htmlFor="bottom-text">Bottom text</label>
            <input
              id="bottom-text"
              type="text"
              className="form-input"
              placeholder="And take my money"
            ></input>
          </div>
        </div>
        <button className="form-button" onClick={getImage}>
          Get a new meme image
        </button>
      </div>
      <div>
        <img className="meme-image" src={memeImage} />
        <p>{memeImage}</p>
      </div>
    </main>
  );
};

export default Meme;
