import React, {useState, useEffect} from 'react';
import "./search-user.css";
import SearchIcon from '@mui/icons-material/Search';
import Fab from '@mui/material/Fab';
import axios from 'axios'
import validateusername from "../validation/validateusername.js"
import Profile from "../profile/getprofile.js"
//Function & StateHooks Defintions

function Search_User() {
    const [username,setusername] = useState("");
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [profile,setProfile] = useState(<div><h2>Not Found</h2></div>)
    const flag = false;

    const namechange = (e) => {
      setusername(e.target.value);
    }
    const SubmitUsername = (e) => {
      //Prevents from Page reloading on clicking the search button
      e.preventDefault();

      //Fetching the Data from the Github API
      let currentuser = validateusername(username);
      const getData = async () => {
        try {
          const response = await axios.get(
            currentuser
          );
          setData(response.data);
          flag = true;
          setProfile(<Profile userdata={{data}}/>);
          setError(null);
        } catch (err) {
          setError(err.message);
        }
      };
      getData();

      setProfile(<Profile userdata={{data}}/>);
    }

    function DisplayProfile(prop){
      return profile;
    }

  return (
    <div class="parent-div">
    <h2 id="su-title">Search Github User</h2>
    <form>
    <input id="su-input" placeholder="Enter Github Username" type="text" value={username} onChange={namechange}></input>
    <button onClick={SubmitUsername}><Fab size="small" color="primary" aria-label="add">
    <SearchIcon />
    </Fab></button>
    </form>
    < DisplayProfile prop={flag} />
    </div>
  );
}

export default Search_User;
