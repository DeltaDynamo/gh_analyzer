//Import Statements
import React, {useState, useEffect} from 'react';
import "./search-user.css";
import SearchIcon from '@mui/icons-material/Search';
import Fab from '@mui/material/Fab';
import axios from 'axios'

//Function & StateHooks Defintions

function Search_User() {
    const [username,setusername] = useState("");

    const namechange = (e) => {
      setusername(e.target.value);
    }
    const SubmitUsername = (e) => {
      //Prevents from Page reloading on clicking the search button
      e.preventDefault();
      console.log(username);
    }

  return (
    <div>
      <div className="parent-div">
        <h2 id="su-title">Search Github User</h2>
        <form>
        <input id="su-input" placeholder="Enter Github Username" type="text" value={username} onChange={namechange}></input>
        <button className="search" onClick={SubmitUsername}>Search
        </button>
        </form>
      </div>
    </div>
  );
}

export default Search_User;
