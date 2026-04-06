import logo from "../assets/loader.png";
import "../styles/Global/Loader.css"

export default function Loader() {
  return (
    <div className="loader-container">
      <img src={logo} alt="Loading" className="logo-spinner" />
    </div>
  );
}