import { useState } from "react";
import ButtonPrimary from "../../../components/ButtonPrimary";
import { Outlet, useNavigate } from "react-router-dom";

type FormData = {
    user: string;
}

export default function SearchUserGitHub() {

    const[formData, setFormData] = useState<FormData>({
        user: ""
    });

    const navigate = useNavigate();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleInputChange(event: any) {
        const value = event.target.value;
        const name = event.target.name;
        setFormData({...formData, [name]: value})
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      function handleFormSubmit(event: any) {
        event.preventDefault();
        navigate(`/search-user/${formData.user}`)
      }

    return (
        <>
           <div className="gapi-container gapi-search-user-container">
                <h2>Encontre um perfil Github</h2>
                <form onSubmit={handleFormSubmit}>

                    <input
                    type="text" 
                    value={formData.user}
                    placeholder="Usuário Github"
                    onChange={handleInputChange}
                    name="user"/>

                <ButtonPrimary text="Encontrar"/>
                </form>
            </div> 
            <Outlet />
        </>
    );
}
