import React from 'react';
import axios from 'axios';

function Dashboard() {

const retorno = axios.get('https://pokeapi.co/api/v2/pokemon?limit=50')
return (
  <>
  <div>

  </div>
  </>
)
  


}
export default Dashboard;
