//Import Statements
import React, {useState, useEffect} from 'react';
import "./search-user.css";
import axios from 'axios'
import Profile from "../profile/profile.js";
import validateusername from "../validation/validateusername.js";
import ProfileStatistics from "../profile/statistics.js";
//Function & StateHooks Defintions

function Search_User() {
    const [username,setusername] = useState("");
    let [data,setData]= useState(null);
    let [prof,setProf] = useState(
      <div className="Initial"><h2>Please Enter a Valid Github Username to Continue</h2></div>
    );
    let [profstat,setProfstat] = useState(
      <div className="Initial"><h2>Stats</h2></div>
    );

    const namechange = (e) => {
      setusername(e.target.value);
    }
    const SubmitUsername = async (e) => {
      //Prevents from Page reloading on clicking the search button
      e.preventDefault();

      let user_name = validateusername(username);
      let [profile,stat] = await Promise.all([fetch(user_name),fetch(user_name+'/repos')]);
      let profileJson = await profile.json();
      let statJson = await stat.json();
      //console.log(statJson);

      if(profileJson){
        //console.log(profileJson);
        setData(profileJson);
        if(profileJson.message === "Not Found") {
          let errmsg = "Invalid Username !!";
          setProf(<div className="ErrState">
            <h2>Invalid Username !</h2>
            <h2>Please Enter a Valid Github Username to Continue</h2>
          </div>);
          setProfstat(<div></div>);
        }
        else {
          setProf(<Profile data={profileJson}/>);
          setProfstat(<ProfileStatistics statdata={statJson}/>)
        }
      }
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
      {prof}
      {profstat}
    </div>
  );
}

export default Search_User;
