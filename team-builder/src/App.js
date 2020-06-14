import React, { useState } from "react";
import "./App.css";
import { Card, Label } from "reactstrap";
import NewForm from "./components/NewForm.js";

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
      <h1>Forms Project</h1>
      <NewForm addTeamMember={addTeamMember} />
      {team.map((obj, i) => (
        <Card
          key={i++}
          style={{
            width: "40%",
            margin: "1% auto",

            backgroundColor: "dodgerBlue",
            color: "white",
          }}
        >
          <Label key={i}>Name: {obj.name} </Label>
          <Label>Role: {obj.role} </Label>
          <Label>Email: {obj.email} </Label>
        </Card>
      ))}
    </div>
  );
}

export default App;
