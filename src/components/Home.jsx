import './Home.css'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import api from '../services/api' //api carrega consigo a URL base

function Home(){

    const [filmes, setFilmes] = useState([])

    useEffect(() => {

        async function loadMovies(){
            const response = await api.get('/r-api/?api=filmes/')
            //console.log(response)
            setFilmes(response.data)
        }

        loadMovies()

    }, [])

    return(
        <div className='container'>
            <div className='lista-filmes'>
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <strong>{filme.nome}</strong>
                            <img src={filme.foto} alt={filme.nome} />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>                        
                    )
                })}
            </div>            
        </div>
    )
}

export default Home