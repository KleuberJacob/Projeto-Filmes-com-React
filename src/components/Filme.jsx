import './Filme.css'
import { React, useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import api from '../services/api'
import { toast } from 'react-toastify'

export default function Filme(){
    const { id } = useParams()
    const history = useHistory()

    const [filme, setFilme] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        async function loadMovie(){
            const response = await api.get(`/r-api/?api=filmes/${id}`)

            if(response.data.length === 0) {
                history.replace('/')
                return
            }

            setFilme(response.data)
            setLoading(false)
        }

        loadMovie()

    }, [history, id])

    if(loading) {
        return(
            <div className='filme-info'>
                <h1>Carregando Filme...</h1>
            </div>
        )
    }

    function salvarFilme(){        
        const listaFilmes = localStorage.getItem('filmes')

        const filmesJSON = JSON.parse(listaFilmes) || []

        const hasFilme = filmesJSON.some((filmeSalvo) => filmeSalvo.id === filme.id )
        //Método some() JS compara e retorna um boolean(true/false)

        if(hasFilme) {
            toast.info('Esse filme já está Salvo!')
            return
        }

        filmesJSON.push(filme)
        localStorage.setItem('filmes', JSON.stringify(filmesJSON))
        toast.success('Filme Salvo com Sucesso!')

    }
    
    return(
        <div className='filme-info'>
            <h1>{filme.nome}</h1>
            <img src={filme.foto} alt={filme.nome} />
            <h2>Sinopse</h2>
            {filme.sinopse}
            <div className='botoes'>
                <button onClick={ salvarFilme }>Salvar</button>
                <button>                    
                    <a target='blank' href={`https://youtube.com/results?search_query=${filme.nome} Trailer`}>  Trailer
                    </a>                    
                </button>
            </div>
        </div>
    )
}