import React, {useState, useEffect} from "react"

//config 
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL, } from "../config"
//component 
import HeroImage  from '../components/HeroImage'
import Grid from '../components/Grid/index'
import Thumb from '../components/Thumb'
import Spinner from './Spinner'
import SearchBar from './SearchBar'

//Hook 
import {useHomeFetch} from '../Hooks/useHomeFetch'
//Image 
import NoImage from '../images/no_image.jpg'


const Home = () => {
const {state, loading, error, setSearchTerm} = useHomeFetch();
console.log(state)
   return (
<>
{
    state.results[0] ?
    <HeroImage 
    image = {`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
    title= {state.results[0].original_title}
    text= {state.results[0].overview}
    /> 
    : null
}
<SearchBar setSearchTerm ={setSearchTerm} />
<Grid header = 'popular Movies '>
    {state.results.map(movie => (
        <Thumb 
        key = {movie.id}
        clickable
        image = {
            movie.poster_path
            ? IMAGE_BASE_URL+ POSTER_SIZE + movie.poster_path 
            : NoImage 
        }
        movieId = {movie.id} />

        
    ))}
</Grid>
<Spinner />
</>
   )
}

export default Home 