import { useNavigate, useParams } from "react-router-dom";
import * as userService from "../../../../services/user-service"
import { useEffect, useState } from "react";
import { userDTO } from "../../../../models/userDTO";
import SearchUserGitHubResultComponent from "../../../../components/SearchUserGithubResultComponent";

export default function SearchUserGitHubResult() {
  const params = useParams();
  const username = params.user ?? "";

  const navigate = useNavigate();

  const[user, setUser] = useState<userDTO>();

  useEffect(()=>{

    userService.findByUsername(username)
    .then(response => {      
      setUser(response.data)
    })
    .catch(()=> {
      navigate("/");
    })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[username])

  return (
    <>
    {user && <SearchUserGitHubResultComponent user={user} />}
    </>
  );
}
