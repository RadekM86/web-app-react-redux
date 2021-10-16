import React, {useState} from 'react';
import Pokemon from '../components/Pokemon';
import Pagination from "../components/Pagination";
import './PokemonPage.css'

export default function PokemonPage() {
  const [offset, setOffset] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  return (
    <div className="pokemon-page">
      <Pokemon offset={offset * pageSize} pageSize={pageSize} />
      <Pagination
        offset={offset}
        setOffset={setOffset}
        pageSize={pageSize}
        setPageSize={setPageSize}
      />
    </div>
  );
}
