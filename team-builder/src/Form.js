import React, { useState } from "react";

const Form = () => {
  const [newMember, setNewMember] = useState({
    name: "",
    role: "",
    email: "",
  });
  const handleChange = (e) => {
    setNewMember({ ...newMember, [e.target.name]: e.target.value });
    console.log(newMember);
  };
  return (
    <div>
      <form>
        <label>name</label>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={newMember.name}
        ></input>
        <label>role</label>
        <input
          onChange={handleChange}
          type="text"
          name="role"
          value={newMember.role}
        ></input>
        <label>email</label>
        <input
          onChange={handleChange}
          type="text"
          name="email"
          value={newMember.email}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
