import "./styles.css";
import { userDTO } from "../../models/userDTO";

type Props = {
  user: userDTO;
};

export default function SearchUserGitHubResultComponent({ user }: Props) {
  return (
    <div className="gapi-user-container">
      <div className="gapi-user-result-container">
        <div className="gapi-user-result-left">
          <img src={user.avatar_url} alt="imagem do github" />
        </div>

        <div className="gapi-user-result-right">
          <h2>Informações</h2>
          <ul>
            <li>
              <p>
                Perfil:
                <span className="gapi-user-result-right-infos">
                  {" "}
                  {user.url}
                </span>
              </p>
            </li>
            <li>
              <p>
                Seguidores:
                <span className="gapi-user-result-right-infos">
                  {" "}
                  {user.followers}
                </span>
              </p>
            </li>
            <li>
              <p>
                Localidade:
                <span className="gapi-user-result-right-infos">
                  {" "}
                  {user.location}
                </span>
              </p>
            </li>
            <li>
              <p>
                Nome:
                <span className="gapi-user-result-right-infos">
                  {" "}
                  {user.name}
                </span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
