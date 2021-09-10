import Restc, {useState, useEffect, useRef} from 'react'
//image 
import searchIcon from '../../images/search-icon.svg'
//styles 
import {Wrapper, Content} from './SearchBar.styles';

const SearchBar = ({setSearchTerm}) => {
    const [state, setState] = useState('')
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