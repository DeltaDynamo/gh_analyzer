//Imports
import "./profile.css";
import Table from "./activity.js"
//Functions
function Profile(data){
  data = data.data;
  let username = data.name==null?data.login:data.name;
  let followers_count = data.followers;
  let following_count = data.following;
  let puclic_repos = data.public_repos;
  let bio = data.bio==null?"Not Given":data.bio;
  let avatar_url = data.avatar_url;
  let hireable = data.hireable==true?"Yes":"No";
  let company = data.company==null?"Not Found":data.company;
  let email = data.email==null?"Not Found":data.email;
  let location = data.location==null?"Not Available":data.location;
  let blog = data.blog==(null||"")?"Not Available":data.blog;
  let create_date = data.created_at.substring(0,10);
  let repo_count = data.public_repos;
  let lastactive_date = data.updated_at.substring(0,10);
  let events_url = data.events_url;

  //console.log(blog);
  return (
    <div className="profile-section">
      <div className="profile-info-title">
      <h2>Profile Information</h2>
      </div>
      <div className="profile-general">
        <img className="avatar-pic" src={avatar_url} alt="avatar"/>
        <div className="profile-text">
          <h3 className="even top-element">Name : {username}</h3>
          <h3 className="odd">Email : {email}</h3>
          <h3 className="even">Location : {location}</h3>
          <h3 className="odd">Company : {company}</h3>
          <h3 className="even">Blog : <a href={blog}>{blog}</a></h3>
          <h3 className="odd bottom-element">Profile Created : {create_date}</h3>
        </div>
        <div className="profile-text2">
          <h3 className="even top-element">Bio : {bio}</h3>
          <h3 className="odd">Number of Public Repositories : {repo_count}</h3>
          <h3 className="even">Followers : {followers_count}</h3>
          <h3 className="odd">Following : {following_count}</h3>
          <h3 className="even">Profile Last Updated On : {lastactive_date}</h3>
          <h3 className="odd bottom-element">Can be Hired ? : {hireable}</h3>
        </div>
      </div>
    </div>
  );
}
// <h3 className="odd">User Bio : {bio}</h3>
// <h3 className="even">Followers : {followers_count} Github Users follow {username}</h3>
// <h3 className="odd">Following : {username} follows {following_count} Github Users</h3>
export default Profile;
