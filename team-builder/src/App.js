import React, { useState } from "react";
import "./App.css";
import { Card, Label, Form } from "reactstrap";
import NewForm from "./NewForm.js";

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
      <NewForm addTeamMember={addTeamMember} />
      {team.map((obj) => (
        <Card
          style={{
            width: "40%",
            margin: "1% auto",

            backgroundColor: "dodgerBlue",
            color: "white",
          }}
        >
          <Label>Name: {obj.name} </Label>
          <Label>Role: {obj.role} </Label>
          <Label>Email: {obj.email} </Label>
        </Card>
      ))}
    </div>
  );
}

export default App;
