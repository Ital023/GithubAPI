import { useParams } from "react-router-dom";

export default function SearchUserGitHubResult() {
    const params = useParams();

    return (
        <h2>{params.user}</h2>
    );
}
