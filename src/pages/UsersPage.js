import React, { useState, useEffect } from "react";
import ListItem from "../components/ListItem";
import List from "../components/List";
import { useDispatch } from 'react-redux';
import { increment, decrement } from "../actions";

export default function UsersPage() {
  const [listaUserów, setLista] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const authToken = window.localStorage.getItem("auth-token");
    const fetchUsers = async () => {
      const result = await fetch("/api/users", {
        headers: new Headers({
          "auth-token": authToken,
        }),
      });
      const lista = await result.json();
      setLista(lista);
    };
    if (!authToken) return;
    fetchUsers();
  }, []);
  return (
    <div>
      <List name="Lista użytkowników">
        {listaUserów.map((element) => (
          <ListItem key={element.id}>
            <strong>
              {element.name} {element.surname}
            </strong>{" "}
            <em>{element.email}</em>
          </ListItem>
        ))}
      </List>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
