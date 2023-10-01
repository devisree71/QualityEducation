import Logo from "./images2/logo.jpg";
import { useNavigate } from "react-router";
import './LOGIN/login';
import "./First.css";
function First() {
  const navigate = useNavigate();
  return (
    <div className="page">
      <div className="logo">
        <img  src={Logo} alt="" />
      </div>
      <div className="get-started-button">
        <button className="started-button" onClick={() => navigate("/login")}>
          GET STARTED
        </button>
      </div>
    </div>
  );
}
export default First;