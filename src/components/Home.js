import React from 'react';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./Home.css";
import Search from './Search';

function Home() {
  return (
    <div className="home">
        <div className='home__header'>
            <div className='home__headerLeft'>
                     <p>About</p>
                     <p>Store</p>
            </div>
            <div className='home__headerRight'>
                    <p>Gmail</p>
                    <p>Images</p>
                    <AppsIcon/>
                    <AccountCircleIcon/>
            </div>
        </div>

        <div className="home__body">
        
        <div className="home__inputContainer">
            <Search/>
        </div>
        </div>
    </div>
  )
}

export default Home