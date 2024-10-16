import troll from "../assets/troll-face.png";

const Header = () => {
  return (
    <header className="header">
      <img src={troll} className="header-image" />
      <h1>Meme Generator</h1>
    </header>
  );
};

export default Header;
