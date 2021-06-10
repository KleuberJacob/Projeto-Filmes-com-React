import './Favoritos.css'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function Favoritos(){

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        const listaFilmes = localStorage.getItem('filmes')

        const ListaJSON = JSON.parse(listaFilmes) || []

        setFilmes(ListaJSON)

    }, [])

    function excluir(id){
        let filtroFilmes = filmes.filter((filme) => {
            return (filme.id !== id)
        })

        setFilmes(filtroFilmes)
        localStorage.setItem('filmes', JSON.stringify(filtroFilmes))
        toast.success('Filme Excluido com sucesso!')
    }

    return(
        <div className='meus-filmes'>
            <h1>Meus Filmes Favoritos</h1>

            {filmes.length === 0 && <span>Nenhum filme favorito Salvo!</span> } 

            <ul>
                {filmes.map((filme) => {
                        return(
                            <li key={filme.id}>                                
                                <span>{filme.nome}</span> 
                                <div className='botao'>
                                    <Link to={`/filme/${filme.id}`}>Ver Detalhes</Link>
                                    <button onClick={ () => excluir(filme.id) }>Excluir</button>
                                </div>                               
                            </li>
                            
                        )
                    })}
            </ul>            
        </div>
    )
}