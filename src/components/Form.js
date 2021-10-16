import React from "react";
import PropTypes from "prop-types";

const inputs = [
  { id: 1, label: "email", type: "email" },
  { id: 2, label: "password", type: "password" },
];

const Input = ({ item }) => {
  const handleChange = (event) => {};
  return (
    <div>
      <label>{item.label}</label>
      <input onChange={handleChange} type={item.type} key={item.id} />
    </div>
  );
};

const Form = ({ name }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const internalState = {
      email: event.target[0].value,
      password: event.target[1].value,
    };
    const fetchLogin = async () => {
      const result = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(internalState),
      });
      const token = await result.json();
      window.localStorage.setItem("auth-token", token.data);
    };
    fetchLogin();
  };
  return (
    <form onSubmit={handleSubmit}>
      {name}
      {inputs.map((element) => (
        <Input item={element} />
      ))}
      <input type="submit" />
    </form>
  );
};

Form.propTypes = {
  items: PropTypes.node,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Form;
