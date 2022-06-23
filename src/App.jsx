import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Movies from "./Pages/Movies/Movies";
import Private from "./Private/Private";

function App() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  let loginTrue = {
    username: "alimardon",
    password: "20022812",
  };

  const isAuth = () => {
    setLogin(
      loginTrue.username === userName && loginTrue.password === password
    );
  };

  return (
    <>
      <BrowserRouter>
        <Header
          isAuth={isAuth}
          login={login}
          username={userName}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
        />

        <Routes>
          <Route path="/" element={<Private login={login} />}>
            <Route path="/" element={<Movies />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
