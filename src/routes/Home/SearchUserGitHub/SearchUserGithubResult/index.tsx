import "./styles.css";
import { useNavigate, useParams } from "react-router-dom";
import * as userService from "../../../../services/user-service"
import { useEffect, useState } from "react";
import { userDTO } from "../../../../models/userDTO";

export default function SearchUserGitHubResult() {
  const params = useParams();

  const navigate = useNavigate();

  const[user, setUser] = useState<userDTO>();

  useEffect(()=>{

    userService.findByUsername(params.user)
    .then(response => {
      console.log(response);
      
      setUser(response.data)
    })
    .catch(()=> {
      navigate("/");
    })

  },[user])

  return (
    <div className="gapi-user-container">
      <div className="gapi-user-result-container">
        <div className="gapi-user-result-left">
          <img src={user?.avatar_url} alt="imagem do github" />
        </div>

        <div className="gapi-user-result-right">
          <h2>Informações</h2>
          <ul>
            <li>
              <p>Perfil: <span className="gapi-user-result-right-infos">{user?.url}</span></p>
            </li>
            <li>
              <p>Seguidores:<span className="gapi-user-result-right-infos"> {user?.followers}</span></p>
            </li>
            <li>
              <p>Localidade: <span className="gapi-user-result-right-infos">{user?.location}</span></p>
            </li> 
            <li>
              <p>Nome: <span className="gapi-user-result-right-infos">{user?.name}</span></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
