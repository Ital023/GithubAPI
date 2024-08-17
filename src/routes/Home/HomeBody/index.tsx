import "./styles.css";
import ButtonPrimary from "../../../components/ButtonPrimary";
import { Link } from "react-router-dom";

export default function HomeBody() {
  return (
    <div className="gapi-container">

      <div className="gapi-homebody-title-container">
        <h2 className="gapi-homebody-title">Desafio Github API</h2>
      </div>

      <div className="gapi-homebody-subtitle-container">
        <h3 className="gapi-homebody-subtitle">
          DevSuperior - Escola de programação
        </h3>
      </div>

      <Link to={"search-user"}>
      <ButtonPrimary text="Começar" />
      </Link>
    </div>
  );
}
