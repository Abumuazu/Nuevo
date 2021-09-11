import React, {useState, useEffect, useRef} from 'react'
//image 
import searchIcon from '../../images/search-icon.svg'
//styles 
import {Wrapper, Content} from './SearchBar.styles';

const SearchBar = ({setSearchTerm}) => {
    const [state, setState] = useState('')
    const initial = useRef(true);
    useEffect(() => {
     if (initial.current) {  
         initial.current = false; 
         return;
     }
       
        const timer  = setTimeout(() => {
            setSearchTerm(state)
        }, 500)
     
        return () => clearTimeout(timer)
    }, [])
    return (
<Wrapper>
    <Content>
        <img src={searchIcon} alt = 'search Movie' />
        <input type = 'text' placeholer= 'Search Movie'
        onChange={e => setState(e.currentTarget.value) }
        value ={state}
        />
    </Content>
</Wrapper>
    )
}
export default SearchBar; 