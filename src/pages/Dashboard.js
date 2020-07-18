import React, { useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  useEffect(() => {
    const loadPokemonData = async () => {
      const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon');
    };

    loadPokemonData();
  }, []);

  return (
    <div>
      <h1>Teste</h1>
    </div>
  );
};

export default Dashboard;
