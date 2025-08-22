import React, { useState } from "react";

function BasicForm() {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    const updateFormData = (prev) => {
      const updatedData = { ...prev };
      updatedData[name] = value;
      return updatedData;
    };

    setFormData(updateFormData);
  };
  const handleSubmit = (e) => {
    console.log("Form data:", formData);
    e.preventDefault();
    if (formData.password.length < 8) {
      console.log("Invalid password!!!");
    } else {
      console.log("Valid password!!!");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label></label>
      <input
        name="userName"
        onChange={onChangeHandler}
        placeholder="Enter user name"
      />
      <label></label>
      <input
        name="password"
        onChange={onChangeHandler}
        placeholder="Enter password name"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default BasicForm;
