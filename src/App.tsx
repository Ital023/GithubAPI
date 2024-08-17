import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeBody from "./routes/Home/HomeBody";
import Home from "./routes/Home";
import SearchUserGitHub from "./routes/Home/SearchUserGitHub";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} >
          <Route index element={<HomeBody />}/>
          <Route path="search-user" element={<SearchUserGitHub/>}>
            <Route path=":user" element={}
          
          </Route>
          
        
        
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
