import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeBody from "./routes/Home/HomeBody";
import Home from "./routes/Home";
import SearchUserGitHub from "./routes/Home/SearchUserGitHub";
import SearchUserGitHubResult from "./routes/Home/SearchUserGitHub/SearchUserGithubResult";
import UserNotFound from "./routes/Home/UserNotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomeBody />} />
          <Route path="search-user" element={<SearchUserGitHub />}>
            <Route path=":user" element={<SearchUserGitHubResult />} />
            <Route path="user-notFound" element={<UserNotFound />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
