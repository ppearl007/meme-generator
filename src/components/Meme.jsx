import { useState } from "react";
import memesData from "../../public/memesData";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const getImage = () => {
    const randomIndex = Math.floor(Math.random() * memesData.data.memes.length);
    const url = memesData.data.memes[randomIndex].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  console.log(meme);

  return (
    <main>
      <div className="form">
        <div className="container">
          <div className="input-text">
            <label htmlFor="top-text">Top text</label>
            <input
              id="top-text"
              type="metext"
              className="form-input"
              placeholder="Top text"
              value={meme.topText}
              onChange={handleChange}
              name="topText"
            ></input>
          </div>
          <div className="input-text">
            <label htmlFor="bottom-text">Bottom text</label>
            <input
              id="bottom-text"
              type="text"
              className="form-input"
              placeholder="Bottom text"
              value={meme.bottomText}
              onChange={handleChange}
              name="bottomText"
            ></input>
          </div>
        </div>
        <button className="form-button" onClick={getImage}>
          Get a new meme image
        </button>
      </div>
      <div className="meme">
        <img className="meme-image" src={meme.randomImage} name="randomImage" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
};

export default Meme;
