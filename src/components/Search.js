import React, { useState } from 'react';
import "./Search.css";
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';

function Search({hidebuttons}) {

  const [{}, dispatch] = useStateValue();
  const [term, setTerm] = useState("");
  const navigate = useNavigate();
  const search =(e)=>{
      e.preventDefault();
      console.log(term);
      dispatch({
        type: actionTypes.SET_SEARCH_TERM,
        term: term,
      });
  
      navigate("/search");
  }
  return (
    <form className='search'>
          <div className="search__input">
            <SearchIcon className='searchicon'/>
               <input value={term} onChange={e => setTerm(e.target.value)}/>
              <MicIcon/> 
          </div>
        {
          !hidebuttons ? (<div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">Quest Search</Button>
          <Button type="submit" variant="outlined">I'm feeling Lucky</Button>
          </div>) : (<div className="search__buttons" style={{display:'none'}}>
          <Button type="submit" onClick={search} variant="outlined">Quest Search</Button>
          <Button type="submit" variant="outlined">I'm feeling Lucky</Button>
          </div>)
        }
    </form>
  )
}

export default Search;