//Funstion to validate the username and to convert it into
//a callable api_string
function validateusername(username) {
  let api_string = ""
  let user = username.split('').reverse().join('');
  user = user.trim();

  let result = "";
  for(var i=0;i<user.length;i++){
    if(user[i]=='/') break;
    result += user[i];
  }

  result = result.split('').reverse().join('');
  api_string = "https://api.github.com/users/" + result;
  return api_string;
}

export default validateusername;
