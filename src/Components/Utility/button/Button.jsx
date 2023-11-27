import { useContext } from "react";
import "./button.css";
import { ItemsContext } from "../../../context/ItemContext";
import { Link } from "react-router-dom";

function ButtonFatch({ action }) {
  return (
    <div className="button">
      <button> {action}</button>
    </div>
  );
}

export default ButtonFatch;
