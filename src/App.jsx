import { useEffect, useState } from "react";
import User from "./components/User";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "../src/assets/styles/App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=4")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
      });
  }, []);

  const handleClick = () => {
    fetch("https://randomuser.me/api/?results=4")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
      });
  };

  return (
    <div className="App">
      <Header/>
      <div className="users-container">
        {users.map((user) => {
          return <User name={user.name.first} img={user.picture.large} />;
        })}
      </div>
     <Footer handle={handleClick}/>
    </div>
  );
}

export default App;
