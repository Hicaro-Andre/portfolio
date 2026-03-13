import logo from "/src/assets/hico-logo.png";
import "/src/styles/Global/Loader.css"

export default function Loader() {
  return (
    <div className="loader-container">
      <img src={logo} alt="Loading" className="logo-spinner" />
    </div>
  );
}