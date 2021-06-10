import axios from 'axios'

//Base_URL = 'https://sujeitoprogramador.com/r-api/?api=filmes/'

const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com'
})

export default api