import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import SearchIcon from '@mui/icons-material/Search';
import FeedIcon from '@mui/icons-material/Feed';
import ImageIcon from '@mui/icons-material/Image';
import SellIcon from '@mui/icons-material/Sell';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './SearchPage.css';
import { useStateValue } from "../StateProvider";
import useGoogleSearch from '../useGoogleSearch';


function SearchPage() {
const [{ term }, dispatch] = useStateValue();
const {data} = useGoogleSearch(term);
console.log(data);
  return (
    <div className="searchPage">
        <div className="searchPage__header">
            <Link to="/">
                <img src="" alt=""></img>
            </Link>

        <div className="searchPage__headerBody">
            <Search hidebuttons/>
        <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
                
                <div className="searchPage__option">
                     <SearchIcon/>
                     <Link to="/all">All</Link>
                </div>

                <div className="searchPage__option">
                     <FeedIcon/>
                     <Link to="/all">News</Link>
                </div>

                <div className="searchPage__option">
                     <ImageIcon/>
                     <Link to="/all">Images</Link>
                </div>

                <div className="searchPage__option">
                     <SellIcon/>
                     <Link to="/all">Shopping</Link>
                </div>

                <div className="searchPage__option">
                     <LocationOnIcon/>
                     <Link to="/all">Maps</Link>
                </div>

                <div className="searchPage__option">
                     <MoreVertIcon/>
                     <Link to="/all">More</Link>
                </div>
                     
              </div>
         <div className="searchPage__optionsRight">

            <div className="searchPage__option">
             <Link to = "/settings">Settings</Link>
            </div>

            <div className="searchPage__option">
             <Link to = "/tools">Tools</Link>
            </div>
         </div>
        </div>
    </div>
    </div>

    {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for{" "}
            <strong>{term}</strong>
          </p>

          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a className="searchPage__resultLink" href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage__resultImage"
                      src={
                        item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src
                      }
                      alt=""
                    />
                  )}
                {item.displayLink} ▾
              </a>
              <a className="searchPage__resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>

              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage; 

