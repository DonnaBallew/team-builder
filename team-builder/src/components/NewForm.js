import React, { useState } from "react";
import { Button } from "reactstrap";

const NewForm = (props) => {
  const [newMember, setNewMember] = useState({
    name: "",
    role: "",
    email: "",
  });
  const handleChange = (e) => {
    setNewMember({ ...newMember, [e.target.name]: e.target.value });
    console.log(newMember);
  };
  const submit = (e) => {
    e.preventDefault();
    props.addTeamMember(newMember);
    setNewMember({ name: "", role: "", email: "" });
  };
  return (
    <div>
      <label style={{ fontSize: "large" }}>Add New Members:</label>
      <form onSubmit={submit} style={{ width: "80% auto", margin: "1% auto" }}>
        <label style={{ padding: "1%" }}>Name: </label>
        <input
          onChange={handleChange}
          type="text"
          id="name"
          name="name"
          value={newMember.name}
        ></input>
        <label style={{ padding: "1%" }}>Role: </label>
        <input
          onChange={handleChange}
          type="text"
          id="role"
          name="role"
          value={newMember.role}
        ></input>
        <label style={{ padding: "1%" }}>Email: </label>
        <input
          onChange={handleChange}
          type="text"
          id="email"
          name="email"
          value={newMember.email}
        ></input>

        <Button style={{ margin: "0.5%" }}>Submit</Button>
      </form>
    </div>
  );
};

export default NewForm;
