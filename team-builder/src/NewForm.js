import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

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
    <FormGroup>
      <Label style={{ fontSize: "large" }}>Add New Members:</Label>
      <Form onSubmit={submit} style={{ width: "40%", margin: "0 auto" }}>
        <Label>Enter Name:</Label>
        <Input
          onChange={handleChange}
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={newMember.name}
        ></Input>
        <br />
        <Label>Enter Role:</Label>
        <Input
          onChange={handleChange}
          type="text"
          id="role"
          name="role"
          placeholder="What's your role?"
          value={newMember.role}
        ></Input>
        <br />
        <Label>Enter Email:</Label>
        <Input
          onChange={handleChange}
          type="text"
          id="email"
          name="email"
          placeholder="Let's communicate"
          value={newMember.email}
        ></Input>
        <Button style={{ margin: "0.5%" }}>Submit</Button>
      </Form>
    </FormGroup>
  );
};

export default NewForm;
