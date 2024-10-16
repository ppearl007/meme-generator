import troll from "../assets/troll-face.png";

const Header = () => {
  return (
    <nav className="header">
      <img src={troll} className="header-image" />
      <h1>Meme Generator</h1>
    </nav>
  );
};

export default Header;
