const Meme = () => {
  return (
    <form className="form">
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
      <button className="form-button">Get a new meme image</button>
    </form>
  );
};

export default Meme;
