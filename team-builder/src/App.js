import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Form.js";

function App() {
  const [team, setTeam] = useState([
    { name: "Donna", role: "student", email: "donna@lambda.com" },
    { name: "John", role: "TL", email: "john@lambda.com" },
    { name: "Sara", role: "SL", email: "sara@lambda.com" },
  ]);
  const addTeamMember = (newTeamMember) => {
    setTeam([...team, newTeamMember]);
  };
  return (
    <div className="App">
      <Form />
      {team.map((obj) => (
        <div>
          <h1>{obj.name}</h1>
          <h1>{obj.role}</h1>
          <h1>{obj.email}</h1>
        </div>
      ))}
    </div>
  );
}

export default App;
