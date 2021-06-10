import './NotFound.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound(){
    return(
        <div className='not-found'>
            <h1>Error 404</h1>
            <h2>Página Não Encontrada!</h2>
            <Link to='/'>Página Principal</Link>
        </div>
    )
}