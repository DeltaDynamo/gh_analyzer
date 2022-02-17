import "./search-user.css";
import SearchIcon from '@mui/icons-material/Search';
import Fab from '@mui/material/Fab';

function Search_User() {
  return (
    <div class="parent-div">
    <h2 id="su-title">Search Github User</h2>
    <form>
    <input id="su-input" placeholder="Enter Github Username" type="text"></input>
    <Fab size="small" color="primary" aria-label="add">
    <SearchIcon />
    </Fab>
    </form>
    </div>
  );
}

export default Search_User;
