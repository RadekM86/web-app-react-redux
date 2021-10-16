import React, { useState, useEffect } from "react";
import Box from "./Box";
import "./Pokemon.css";

const OnePokemon = ({ name }) => {
  const [image, setImage] = useState({});
  const [front, setFront] = useState(true);
  useEffect(() => {
    const fetchKantoPokemon = () => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response) => response.json())
        .then((pok) => {
          console.log(pok);
          setImage({
            front: pok.sprites.front_default,
            back: pok.sprites.back_default,
          });
        });
    };
    fetchKantoPokemon();
  }, [name]);
  return (
    <Box>
      {name}
      <br />
      <img
        src={front ? image.front : image.back}
        alt={name}
        onMouseEnter={() => setFront(false)}
        onMouseOut={() => setFront(true)}
      />
    </Box>
  );
};

export default function Pokemon({ offset, pageSize = 10 }) {
  const [state, setState] = useState([]);
  useEffect(() => {
    const fetchKantoPokemon = () => {
      fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${pageSize}&offset=${offset}`
      )
        .then((response) => response.json())
        .then((allpokemon) => setState(allpokemon.results));
    };
    fetchKantoPokemon();
  }, [offset, pageSize]);
  return (
    <div className="pokemon-container">
      {state.map((pok) => (
        <OnePokemon name={pok.name} />
      ))}
    </div>
  );
}
