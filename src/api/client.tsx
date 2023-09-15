import axios from 'axios';

export const client = axios.create({
    baseURL: "https://selos-app-8f3cb258b0ca.herokuapp.com",
    headers: {
      'Access-Control-Allow-Origin': '*', // Permite a origem http://localhost:3000
      'Content-Type': 'application/json', // Define o tipo de conteúdo da solicitação
    },
})