import "./styles.css";
import { useParams } from "react-router-dom";
import imgTeste from "../../../../assets/imgTeste.png";

export default function SearchUserGitHubResult() {
  const params = useParams();

  return (
    <div className="gapi-user-container">
      <div className="gapi-user-result-container">
        <div className="gapi-user-result-left">
          <img src={imgTeste} alt="imagem do github" />
        </div>

        <div className="gapi-user-result-right">
          <h2>Informações</h2>
          <ul>
            <li>
              <p>Perfil: <span className="gapi-user-result-right-infos">https://api.github.com/users/acenelio</span></p>
            </li>
            <li>
              <p>Seguidores:<span className="gapi-user-result-right-infos"> 4379</span></p>
            </li>
            <li>
              <p>Localidade: <span className="gapi-user-result-right-infos">Uberlândia</span></p>
            </li> 
            <li>
              <p>Nome: <span className="gapi-user-result-right-infos">Nelio Alves</span></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
